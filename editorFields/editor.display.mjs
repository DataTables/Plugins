

import DataTable from 'datatables.net';
/**
 * Display plain HTML as a field's value. This is uneditable by the system user,
 * and is suitable for displaying status messages or other read only
 * information.
 *
 * @name Read only display
 * @summary Read only field which does not display an input option
 *
 * @opt `e-type object` **`attr`**: Attributes that will be used to set the
 *     attributes of container `-tag div` element that this plug-in uses to
 *     place the HTML to be displayed into.
 *
 * @example
 *
 * new DataTable.Editor({
 *   "ajax": "php/dates.php",
 *   "table": "#example",
 *   "fields": [{
 *       "label": "Info:",
 *       "name": "info",
 *       "type": "display"
 *     },
 *     // additional fields...
 *   ]
 * });
 */

if (!DataTable.ext.editorFields) {
	DataTable.ext.editorFields = {};
}

var _fieldTypes = DataTable.Editor
	? DataTable.Editor.fieldTypes
	: DataTable.ext.editorFields;

_fieldTypes.display = {
	create: function (conf) {
		conf._div = DataTable.Dom.c('div').attr(
			Object.assign(
				{
					id: conf.id
				},
				conf.attr || {}
			)
		);

		return conf._div[0];
	},

	get: function (conf) {
		return conf._rawHtml;
	},

	set: function (conf, val) {
		conf._rawHtml = val;
		conf._div.html(val);
	},

	enable: function (conf) {},

	disable: function (conf) {}
};


export default DataTable.Editor;

