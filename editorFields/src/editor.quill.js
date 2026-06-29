/**
 * [Quill](http://quilljs.com/) is a lightweight WYSIWYG editing library that
 * will provides an attractive input where end users and easily edit complex
 * information in a style familiar to all word processor users.
 *
 * Quill is different from the majority of other WYSIWYG libraries in that it
 * does not use iframes. This makes it more approachable for extension
 * developers and easier to style.
 *
 * It also has support for multiple modules such as toolbars, authorship
 * highlighting and multiple cursors. The toolbar module is used by default by
 * this Editor plug-in (see options below). Please see the [Quill
 * documentation](http://quilljs.com/docs/modules/) for more information.
 *
 * @name Quill
 * @summary Quill WYSIWYG editor
 * @requires [Quill](http://quilljs.com)
 *
 * @depcss //cdn.quilljs.com/latest/quill.snow.css
 * @depjs //cdn.quilljs.com/latest/quill.min.js
 *
 * @scss editor.quill.scss
 *
 * @opt `e-type string`, `e-type node`, `e-type boolean` **`toolbar`**: Show
 *   toolbar (`true` - default) or not (`false`). A custom toolbar can be
 *   defined, per the Quill documentation, by passing the string or node for
 *   the toolbar's HTML to this parameter.
 * @opt `e-type object` **`opts`**: Options passed directly to the Quill
 *   configuration object. Please refer to the [Quill
 *   documentation](http://quilljs.com/docs/configuration/) for the full range
 *   of options.
 *
 * @method **`quill`**: Get the Quill instance used for this field, so you can
 *   add additional modules, or perform other API operations on it directly.
 *
 * @example
 *
 * new DataTable.Editor( {
 *   "ajax": "/api/documents",
 *   "table": "#documents",
 *   "fields": [ {
 *       "label": "Description:",
 *       "name": "description",
 *       "type": "quill"
 *     },
 *     // additional fields...
 *   ]
 * } );
 */

if (!DataTable.ext.editorFields) {
	DataTable.ext.editorFields = {};
}

var _fieldTypes = DataTable.Editor
	? DataTable.Editor.fieldTypes
	: DataTable.ext.editorFields;

var Dom = DataTable.Dom;

// Default toolbar, as Quill doesn't provide one
var defaultToolbar =
	'<div id="toolbar-toolbar" class="toolbar">' +
	'<span class="ql-formats">' +
	'<select class="ql-font">' +
	'<option selected=""></option>' +
	'<option value="serif"></option>' +
	'<option value="monospace"></option>' +
	'</select>' +
	'<select class="ql-size">' +
	'<option value="small"></option>' +
	'<option selected=""></option>' +
	'<option value="large"></option>' +
	'<option value="huge"></option>' +
	'</select>' +
	'</span>' +
	'<span class="ql-formats">' +
	'<button class="ql-bold"></button>' +
	'<button class="ql-italic"></button>' +
	'<button class="ql-underline"></button>' +
	'<button class="ql-strike"></button>' +
	'</span>' +
	'<span class="ql-formats">' +
	'<select class="ql-color"></select>' +
	'<select class="ql-background"></select>' +
	'</span>' +
	'<span class="ql-formats">' +
	'<button class="ql-list" value="ordered"></button>' +
	'<button class="ql-list" value="bullet"></button>' +
	'<select class="ql-align">' +
	'<option selected=""></option>' +
	'<option value="center"></option>' +
	'<option value="right"></option>' +
	'<option value="justify"></option>' +
	'</select>' +
	'</span>' +
	'<span class="ql-formats">' +
	'<button class="ql-link"></button>' +
	'</span>' +
	'</div>';

_fieldTypes.quill = {
	create: function (conf) {
		var safeId = DataTable.Editor.safeId(conf.id);
		var input = Dom.c('div')
			.attr('id', safeId)
			.classAdd('quill-wrapper')
			.html(
				(conf.toolbarHtml || defaultToolbar) +
					'<div class="editor"></div>'
			);

		conf._quill = new Quill(
			input.find('.editor')[0],
			DataTable.util.object.assignDeep(
				{
					theme: 'snow',
					modules: {
						toolbar: {
							container: input.find('div.toolbar')[0]
						}
					}
				},
				conf.opts
			)
		);

		return input;
	},

	get: function (conf) {
		return conf._quill.getText();
	},

	set: function (conf, val) {
		conf._quill.setText(val !== null ? val : '');
	},

	enable: function (conf) {
		conf._quill.enable();
	},

	disable: function (conf) {
		conf._quill.disable();
	},

	// Get the Quill instance
	quill: function (conf) {
		return conf._quill;
	}
};
