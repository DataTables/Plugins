

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
 * Date and time picker in Editor, Bootstrap style. This plug-in provides
 * integration between
 * [Bootstrap DateTimePicker](http://www.malot.fr/bootstrap-datetimepicker/)
 * control and Editor. Fields can use this control by specifying `datetime` as
 * the Editor field type.
 * 
 * Please note that this plug-in was published, Editor now has a built-in
 * `e-field datetime` field type which can be used with full integration for
 * the published server-side libraries. It is recommended that you use the new
 * built-in field type in preference to this field type, particularly for new
 * projects.
 *
 * @name Bootstrap DateTimePicker (1)
 * @summary Date and time input selector styled with Bootstrap
 * @requires [Bootstrap DateTimePicker](http://www.malot.fr/bootstrap-datetimepicker/)
 * @depjs https://code.jquery.com/jquery-3.7.1.js
 *
 * @opt `e-type object` **`opts`**: DateTimePicker initialisation options
 *     object. Please refer to the Bootstrap DateTimePicker documentation for
 *     the full range of options available.
 * @opt `e-type object` **`attrs`**: Attributes that are applied to the
 *     `-tag input` element used for the date picker.
 *
 * @method **`inst`**: Get the DateTimePicker instance so you can call its API
 *     methods directly.
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
 *          "label": "Updated date:",
 *          "name": "updated_date",
 *          "type": "datetime",
 *          "opts": {
 *              format: 'yyyy-mm-dd'
 *          }
 *      }, {
 *          "label": "Registered date:",
 *          "name": "registered_date",
 *          "type": "datetime",
 *          "opts": {
 *              format: 'd M yy'
 *          }
 *      }
 *   ]
 * } );
 */

if ( ! DataTable.ext.editorFields ) {
	DataTable.ext.editorFields = {};
}

var _fieldTypes = DataTable.Editor ?
    DataTable.Editor.fieldTypes :
    DataTable.ext.editorFields;


_fieldTypes.datetime = {
	create: function ( conf ) {
		var that = this;

		conf._input = $('<input/>')
			.attr( $.extend( {
				id: conf.id,
				type: 'text',
				'class': 'datetimepicker'
			}, conf.attr || {} ) )
			.datetimepicker( $.extend( {}, conf.opts ) );

		return conf._input[0];
	},

	get: function ( conf ) {
		return conf._input.val();
	},

	set: function ( conf, val ) {
		conf._input.val( val );
	},

	// Non-standard Editor methods - custom to this plug-in. Return the jquery
	// object for the datetimepicker instance so methods can be called directly
	inst: function ( conf ) {
		return conf._input;
	}
};


return DateTime;
}));
