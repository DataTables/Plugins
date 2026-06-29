

import DataTable from 'datatables.net';
/**
 * Incrementor field type plug-in code
 *
 * @name Incrementor
 * @summary Show + and - buttons on either side of a numeric input field with FontAwesome icons
 * @requires FontAwesome
 * @depcss https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css
 * @scss editor.incrementor.scss
 *
 * @example
 *
 * new DataTable.Editor( {
 *   "ajax": "php/dates.php",
 *   "table": "#example",
 *   "fields": [ {
 *          "label": "First name:",
 *          "name": "first_name"
 *      }, {
 *          "label": "Last name:",
 *          "name": "last_name"
 *      }, {
 *          "label": "Age:",
 *          "name": "age",
 *          "type": "incrementor"
 *      }
 *   ]
 * } );
 */

if (!DataTable.ext.editorFields) {
	DataTable.ext.editorFields = {};
}

var Editor = DataTable.Editor;
var _fieldTypes = DataTable.ext.editorFields;

_fieldTypes.incrementor = {
	create: function (conf) {
		var that = this;

		conf._enabled = true;

		conf._input = DataTable.Dom.c('div')
			.classAdd('input-group')
			.html(
				'<span>' +
					'<button type="button" class="btn alter decrement"><i class="fa fa-minus fa-lg"></i></button>' +
					'<input id="' +
					Editor.safeId(conf.id) +
					'" type="text" class="incrementor" style="text-align:center;float:left;width:100px">' +
					'<button type="button" class="btn alter increment"><i class="fa fa-plus fa-lg"></i></button>' +
					'</span>'
			);

		// Use the fact that we are called in the scope of the Editor instance to call
		// the API method for setting the value when needed
		conf._input.find('button.alter').on('click', function () {
			if (conf._enabled) {
				var number = conf._input.find('input.incrementor').val();

				if (DataTable.Dom.s(this).classHas('increment')) {
					number = parseInt(number) + 1;
					conf._input.find('input.incrementor').val(number);
				}
				else if (number >= 1) {
					number = parseInt(number) - 1;
					conf._input.find('input.incrementor').val(number);
				}
				that.set(
					conf.name,
					conf._input.find('input.incrementor').val()
				);
			}

			return false;
		});

		return conf._input;
	},

	get: function (conf) {
		return conf._input.find('input.incrementor').val();
	},

	set: function (conf, val) {
		var number = parseInt(val);

		conf._input.find('input.incrementor').val(number);
	},

	enable: function (conf) {
		conf._enabled = true;
		conf._input.classRemove('disabled');
	},

	disable: function (conf) {
		conf._enabled = false;
		conf._input.classAdd('disabled');
	}
};


export default DataTable.Editor;

