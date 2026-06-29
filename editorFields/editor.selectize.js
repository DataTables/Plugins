

(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['datatables.net'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		// CommonJS
		var cjsRequires = function (root) {
			if (! root.DataTable) {
				require('datatables.net')(root);
			}
		};

		if (typeof window === 'undefined') {
			module.exports = function (root) {
				if (! root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}

				cjsRequires(root);
				return factory(root, root.document, root.DataTable);
			};
		}
		else {
			cjsRequires(window);
			module.exports = factory(window, window.document, window.DataTable);
		}
	}
	else {
		// Browser
		factory(window, document, window.DataTable);
	}
}(function(window, document, DataTable) {
'use strict';

/**
 * [Selectize](https://selectize.github.io/selectize.js/) enhances the HTML
 * `<select>` element with a beautifully styled input control, that features
 * tags, text input, auto-complete and much more.
 * 
 * Please note that this plug-in was published, Editor now has a built-in
 * `e-field autocomplete` and `e-field tags` field type which can be used with
 * full integration for the published server-side libraries. It is recommended
 * that you use the new built-in field types in preference to this plug-in,
 * particularly for new projects.
 *
 * @name Selectize
 * @summary Use the Selectize library with Editor for complex select input options.
 * @requires [Selectize](https://selectize.github.io/selectize.js/)
 * @depcss //cdnjs.cloudflare.com/ajax/libs/selectize.js/0.9.0/css/selectize.css
 * @depjs https://code.jquery.com/jquery-3.7.1.js
 * @depjs //cdnjs.cloudflare.com/ajax/libs/selectize.js/0.9.0/js/standalone/selectize.js
 *
 * @opt `e-type object` **`options`**: Options that are given to the selectize
 *     `addOption` method.
 * @opt `e-type object` **`opts`**: Selectize initialisation options object.
 *     Please refer to the Selectize documentation for the full range
 *     of options available.
 * @opt `e-type object` **`attr`**: Attributes that are applied to the
 *     `-tag select` element before selectize is initialised
 *
 * @method **`inst`**: Get the selectize instance
 * @method **`update`**: Clear existing options and add new items
 *
 * @scss editor.selectize.scss
 *
 * @example
 *   new DataTable.Editor( {
 *   "ajax": "/api/tableFormatting",
 *   "table": "#example",
 *   "fields": [ {
 *           "label": "Item:",
 *           "name": "item"
 *       }, {
 *           "label": "Priority:",
 *           "name": "priority",
 *           "type": "selectize",
 *           "options": [
 *               { "label": "1 (highest)", "value": "1" },
 *               { "label": "2",           "value": "2" },
 *               { "label": "3",           "value": "3" },
 *               { "label": "4",           "value": "4" },
 *               { "label": "5 (lowest)",  "value": "5" }
 *           ]
 *       }, {
 *           "label": "Status:",
 *           "name": "status",
 *           "type": "radio",
 *           "default": "Done",
 *           "options": [
 *               { "label": "To do", "value": "To do" },
 *               { "label": "Done", "value": "Done" }
 *           ]
 *       }
 *   ]
 * } );
 */

if (!DataTable.ext.editorFields) {
	DataTable.ext.editorFields = {};
}

var _fieldTypes = DataTable.Editor
	? DataTable.Editor.fieldTypes
	: DataTable.ext.editorFields;

_fieldTypes.selectize = {
	_addOptions: function (conf, options) {
		var selectize = conf._selectize;

		selectize.clearOptions();
		selectize.addOption(options);
		selectize.refreshOptions(false);
	},

	create: function (conf) {
		var container = $('<div/>');
		conf._input = $('<select/>')
			.attr(
				$.extend(
					{
						id: conf.id
					},
					conf.attr || {}
				)
			)
			.appendTo(container);

		conf._input.selectize(
			$.extend(
				{
					valueField: 'value',
					labelField: 'label',
					searchField: 'label',
					dropdownParent: 'body'
				},
				conf.opts
			)
		);

		conf._selectize = conf._input[0].selectize;

		if (conf.options || conf.ipOpts) {
			_fieldTypes.selectize._addOptions(
				conf,
				conf.options || conf.ipOpts
			);
		}

		// Make sure the select list is closed when the form is submitted
		this.on('preSubmit', function () {
			conf._selectize.close();
		});

		return container[0];
	},

	get: function (conf) {
		return conf._selectize.getValue();
	},

	set: function (conf, val) {
		return conf._selectize.setValue(val);
	},

	enable: function (conf) {
		conf._selectize.enable();
		$(conf._input).removeClass('disabled');
	},

	disable: function (conf) {
		conf._selectize.disable();
		$(conf._input).addClass('disabled');
	},

	// Non-standard Editor methods - custom to this plug-in
	inst: function (conf) {
		return conf._selectize;
	},

	update: function (conf, options) {
		_fieldTypes.selectize._addOptions(conf, options);
	},

	canReturnSubmit: function () {
		return true;
	}
};


return DataTable.Editor;
}));
