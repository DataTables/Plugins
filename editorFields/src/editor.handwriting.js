/**
 * This plug-in makes the [Signature Pad library](http://szimek.github.io/signature_pad/)
 * available for use as an Editor field. This allows a user to draw on a `-tag canvas`
 * using their mouse, finger or other input (depending on their computer).
 *
 * The data is stored as a data URL, which can then be stored in a database as a string.
 * It also makes it easy to show the resulting image in a DataTable using an `-tag img` tag.
 *
 * @name Handwriting
 * @summary Canvas input for mouse / finger input of data
 * @requires [Signature Pad](https://github.com/szimek/signature_pad)
 *
 * @depjs //cdnjs.cloudflare.com/ajax/libs/signature_pad/4.1.4/signature_pad.umd.min.js
 *
 * @scss editor.handwriting.scss
 *
 * @opt `e-type object` **`height`**: Canvas height - defaults to 75 if not given
 * @opt `e-type object` **`opts`**: Options passed directly to the Signature Pad
 *   configuration object. Please refer to the Signature Pad documentation for
 *   the full range of options.
 * @opt `e-type object` **`width`**: Canvas width - defaults to 300 if not given
 *
 * @example
 *
 * new DataTable.Editor( {
 *   ajax: '/api/documents',
 *   table: '#documents',
 *   fields: [ {
 *       label: 'Signature:',
 *       name: 'sig',
 *       type: 'handwriting'
 *     },
 *     // additional fields...
 *   ]
 * } );
 *
 * // In the DataTable `columns` array to display the image:
 * {
 * 	data: 'sig',
 * 	render: function (d) {
 * 		return d ? '<img src="' + d + '">' : '';
 * 	}
 * }
 */

if (!DataTable.ext.editorFields) {
	DataTable.ext.editorFields = {};
}

var Editor = DataTable.Editor;
var _fieldTypes = DataTable.ext.editorFields;

_fieldTypes.handwriting = {
	create: function (conf) {
		var height = conf.height || 75;
		var width = conf.width || 300;
		var canvas = DataTable.Dom.c('canvas').classAdd('signature-pad').attr({
			height: height,
			width: width
		});

		conf._enabled = true;
		conf._container = DataTable.Dom.c('div')
			.attr('id', Editor.safeId(conf.id))
			.append(
				DataTable.Dom.c('button').attr('type', 'button').html('&times;')
			)
			.append(DataTable.Dom.c('input').attr('type', 'hidden'));
		conf._input = conf._container.find('input');
		conf._container.append(canvas);

		// at this location, the event is created
		conf.signaturePad = new SignaturePad(
			canvas[0],
			Object.assign(conf.opts, {
				backgroundColor: 'rgba(255, 255, 255, 0)',
				penColor: 'rgb(0, 0, 0)'
			})
		);

		conf.signaturePad.addEventListener('endStroke', function () {
			var val = conf.signaturePad.toDataURL();
			conf._input.val(val).trigger('change', { editor: true });
		});

		conf._container.find('button').on('click', function () {
			conf.signaturePad.clear();
		});

		return conf._container;
	},

	get: function (conf) {
		return conf._input.val();
	},

	set: function (conf, val) {
		conf.signaturePad.clear();
		conf._input.val('');

		if (val) {
			conf._input.val(val);
			conf.signaturePad.fromDataURL(val);
		}
	},

	enable: function (conf) {
		conf._enabled = true;
		conf._inpu.classRemove('disabled');
	},

	disable: function (conf) {
		conf._enabled = false;
		conf._input.classAdd('disabled');
	}
};
