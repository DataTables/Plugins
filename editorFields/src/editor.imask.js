/**
 * This plug-in displays user input data passed through a masking filter - i.e.
 * it reformats the user input into an attractive format. This is done by the
 * [IMask library](https://imask.js.org) which has a wide variety of
 * configuration options.
 *
 * @name imask
 * @summary Display user input in a given format
 * @requires [IMask](https://imask.js.org/)
 *
 * @depjs https://cdnjs.cloudflare.com/ajax/libs/imask/7.6.1/imask.min.js
 * 
 * @opt `e-type string` **`mask`**: The mask to apply.
 * @opt `e-type object` **`maskOptions`**: Options passed directly to IMask. Please
 *   refer to the IMask documentation for the full range of options.
 *
 * @example
 * new DataTable.Editor( {
 *	 "ajax": "/api/staff",
 *	 "table": "#staff",
 *	 "fields": [ {
 *			label: "Extension:",
 *			name: "extn",
 *			type: 'imask',
 *			mask: '000000'
 *		},
 *		{
 *			label: 'Start date:',
 *			name: 'start_date',
 *			type: 'imask',
 *			maskOptions: {
 *				mask: Date,
 *				autofix: true,
 *				blocks: {
 *					d: {mask: IMask.MaskedRange, placeholderChar: 'd', from: 1, to: 31, maxLength: 2},
 *					m: {mask: IMask.MaskedRange, placeholderChar: 'm', from: 1, to: 12, maxLength: 2},
 *					Y: {mask: IMask.MaskedRange, placeholderChar: 'y', from: 1900, to: 2999, maxLength: 4}
 *				},
 *				lazy: false
 *			}
 *		},
 *		{
 *			label: 'Salary:',
 *			name: 'salary',
 *			type: 'imask',
 *			maskOptions: {
 *				mask: Number,
 *				thousandsSeparator: "'",
 *			}
 *		}
 *   ]
 * } );
 */

var _fieldTypes = DataTable.Editor
	? DataTable.Editor.fieldTypes
	: DataTable.ext.editorFields;

_fieldTypes.imask = {
	create: function (conf) {
		conf._input = DataTable.Dom.c('input').attr(
			Object.assign(
				{
					id: DataTable.Editor.safeId(conf.id),
					type: 'text'
				},
				conf.attr || {}
			)
		);

		conf._imask = IMask(conf._input[0], Object.assign(
			{mask: conf.mask},
			conf.maskOptions
		));

		return conf._input[0];
	},

	get: function (conf) {
		return conf._imask.unmaskedValue;
	},

	set: function (conf, val) {
		conf._imask.unmaskedValue = val;

		conf._input.trigger('change');
	},

	enable: function (conf) {
		conf._input.prop('disabled', false);
	},

	disable: function (conf) {
		conf._input.prop('disabled', true);
	},

	canReturnSubmit: function (conf, node) {
		return true;
	},

	destroy: function (conf) {
		conf._imask.destroy();
	},

	inst: function (conf) {
		return conf._imask;
	}
};
