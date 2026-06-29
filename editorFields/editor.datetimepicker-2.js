

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
 * integration between [Bootstrap DateTimePicker](http://eonasdan.github.io/bootstrap-datetimepicker/)
 * control and Editor. Fields can use this control by
 * specifying `datetime` as the Editor field type.
 * 
 * Please note that this plug-in was published, Editor now has a built-in
 * `e-field datetime` field type which can be used with full integration for
 * the published server-side libraries. It is recommended that you use the new
 * built-in field type in preference to this field type, particularly for new
 * projects.
 *
 * @name Bootstrap DateTimePicker (2)
 * @summary Date and time input selector styled with Bootstrap
 * @requires [Bootstrap DateTimePicker](http://eonasdan.github.io/bootstrap-datetimepicker/)
 * @depjs https://code.jquery.com/jquery-3.7.1.js
 * @depjs //cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js
 * @depjs //cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.7.14/js/bootstrap-datetimepicker.min.js
 * @depcss //cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.7.14/css/bootstrap-datetimepicker.css
 *
 * @opt `e-type object` **`opts`**: DateTimePicker initialisation options
 *     object. Please refer to the Bootstrap DateTimePicker documentation for
 *     the full range of options available.
 * @opt `e-type object` **`attr`**: Attributes that are applied to the `-tag
 *     div` wrapper element used for the date picker. This can be used to set
 *     `data` attributes which the DateTimePicker allows for setting additional
 *     options such as the date format.
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
 *              format: 'DD.MM.YYYY'
 *          }
 *      }, {
 *          "label": "Registered date:",
 *          "name": "registered_date",
 *          "type": "datetime"
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

		conf._input = $(
				'<div class="input-group date" id="'+conf.id+'">'+
					'<input type="text" class="form-control" />'+
					'<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>'+
					'</span>'+
				'</div>'
			)
			.attr( $.extend( {}, conf.attr ) )
			.datetimepicker( $.extend( {}, conf.opts ) );
 
		return conf._input[0];
	},

	get: function ( conf ) {
		return conf._input.children('input').val();
	},

	set: function ( conf, val ) {
		var picker = conf._input.data("DateTimePicker");

		if ( picker.setDate ) {
			picker.setDate( val );
		}
		else {
			picker.date( val );
		}
	},

	disable: function ( conf ) {
		conf._input.data("DateTimePicker").disable();
	},

	enable: function ( conf ) {
		conf._input.data("DateTimePicker").enable();
	},

	// Non-standard Editor methods - custom to this plug-in. Return the jquery
	// object for the datetimepicker instance so methods can be called directly
	inst: function ( conf ) {
		return conf._input.data("DateTimePicker");
	}
};


return DateTime;
}));
