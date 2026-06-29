

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
 * AutoComplete is a very useful way of providing input guidance to the end
 * user, providing the ease of selection of a `<select>` list with the
 * flexibility of a free form text input. This plug-in provides integration
 * between [jQuery UI's AutoComplete](https://jqueryui.com/) control and Editor,
 * adding the `autoComplete` field type to Editor.
 * 
 * Please note that this plug-in was published, Editor now has a built-in
 * `e-field autocomplete` field type which can be used with full integration for
 * the published server-side libraries. It is recommended that you use the new
 * built-in field type, particularly for new projects.
 *
 * @name jQuery UI AutoComplete
 * @summary Use jQuery UI's AutoComplete library with Editor to allow easy and
 *     accurate input of data.
 * @requires jQuery UI's AutoComplete library
 * @depcss https://code.jquery.com/ui/1.10.0/themes/base/jquery-ui.css
 * @depjs https://code.jquery.com/jquery-3.7.1.js
 * @depjs https://code.jquery.com/ui/1.10.0/jquery-ui.js
 *
 * @opt `e-type object` **`opts`**: jQuery UI AutoComplete initialisation
 *     options object. Please refer to the jQuery UI documentation for the full
 *     range of options available.
 *
 * @method **`node`**: Get the input element as a jQuery object that is used for
 *     the AutoComplete so you can run custom actions on it, including
 *     `autocomplete` methods. This is useful if you wish to update the data
 *     that is available to the AutoComplete control.
 *
 * @example
 *
 * new DataTable.Editor( {
 *   "ajax": "/api/genres",
 *   "table": "#example",
 *   "fields": [ {
 *       "label": "Genres:",
 *       "name": "genre",
 *       "type": "autoComplete",
 *       "opts": {
 *         "source": [
 *           // array of genres...
 *         ]
 *       }
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

_fieldTypes.autoComplete = {
	create: function (conf) {
		conf._input = $(
			'<input type="text" id="' + conf.id + '">'
		).autocomplete(conf.opts || {});

		return conf._input[0];
	},

	get: function (conf) {
		return conf._input.val();
	},

	set: function (conf, val) {
		conf._input.val(val);
	},

	enable: function (conf) {
		conf._input.autocomplete('enable');
	},

	disable: function (conf) {
		conf._input.autocomplete('disable');
	},

	canReturnSubmit: function (conf, node) {
		if ($('ul.ui-autocomplete').is(':visible')) {
			return false;
		}
		return true;
	},

	owns: function (conf, node) {
		if ($(node).closest('ul.ui-autocomplete').length) {
			return true;
		}
		return false;
	},

	// Non-standard Editor method - custom to this plug-in
	node: function (conf) {
		return conf._input;
	},

	update: function (conf, options) {
		conf._input.autocomplete('option', 'source', options);
	}
};


return DataTable.Editor;
}));
