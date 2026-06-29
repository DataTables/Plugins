

import DataTable from 'datatables.net';
/**
 * Date pickers in Editor, Bootstrap style. This plug-in provides integration
 * between [Bootstrap
 * DatePicker](https://github.com/eternicode/bootstrap-datepicker) control and
 * Editor, replacing the build in `date` field type in Editor (which is jQuery
 * UI based).
 * 
 * Please note that this plug-in was published, Editor now has a built-in
 * `e-field datetime` field type which can be used with full integration for
 * the published server-side libraries. It is recommended that you use the new
 * built-in field type in preference to this field type, particularly for new
 * projects.
 *
 * @name Bootstrap DatePicker
 * @summary Date picker control which is tightly integrated with Bootstrap for
 *     styling.
 * @requires Bootstrap DatePicker
 * @depcss
 * https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.0.2/css/bootstrap-datepicker.css
 * @depjs https://code.jquery.com/jquery-3.7.1.js
 * @depjs
 * https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.0.2/js/bootstrap-datepicker.min.js
 *
 * @opt `e-type object` **`opts`**: DatePicker initialisation options object.
 *     Please refer to the Bootstrap DatePicker documentation for the full range
 *     of options available.
 * @opt `e-type object` **`attrs`**: Attributes that are applied to the `-tag
 *     input` element used for the date picker.
 *
 * @method **`node`**: Get the input element as a jQuery object that is used for
 *     the DatePicker so you can run custom actions on it (listening for events
 *     etc)
 * @method **`remove`**: Run the DatePickers' `remove()` method. See DatePicker
 *     documentation for usage.
 * @method **`show`**: Run the DatePickers' `show()` method. See DatePicker
 *     documentation for usage.
 * @method **`hide`**: Run the DatePickers' `hide()` method. See DatePicker
 *     documentation for usage.
 * @method **`update`**: Run the DatePickers' `update()` method. See DatePicker
 *     documentation for usage.
 * @method **`setDate`**: Run the DatePickers' `setDate()` method. See
 *     DatePicker documentation for usage.
 * @method **`setUTCDate`**: Run the DatePickers' `setUTCDate()` method. See
 *     DatePicker documentation for usage.
 * @method **`getDate`**: Run the DatePickers' `getDate()` method. See
 *     DatePicker documentation for usage.
 * @method **`getUTCDate`**: Run the DatePickers' `getUTCDate()` method. See
 *     DatePicker documentation for usage.
 * @method **`setStartDate`**: Run the DatePickers' `setStartDate()` method. See
 *     DatePicker documentation for usage.
 * @method **`setEndDate`**: Run the DatePickers' `setEndDate()` method. See
 *     DatePicker documentation for usage.
 * @method **`setDaysOfWeekDisabled`**: Run the DatePickers'
 *     `setDaysOfWeekDisabled()` method. See DatePicker documentation for usage.
 *
 * @scss editor.bootstrapDate.scss
 *
 * @example
 *
 *new DataTable.Editor( {
 *  "ajax": "php/dates.php",
 *  "table": "#example",
 *  "fields": [ {
 *         "label": "First name:",
 *         "name": "first_name"
 *     }, {
 *         "label": "Last name:",
 *         "name": "last_name"
 *     }, {
 *         "label": "Updated date:",
 *         "name": "updated_date",
 *         "type": "date",
 *         "opts": {
 *             showOn: 'focus',
 *             format: 'yyyy-mm-dd'
 *         }
 *     }, {
 *         "label": "Registered date:",
 *         "name": "registered_date",
 *         "type": "date",
 *         "opts": {
 *             format: 'D, d M yy'
 *         }
 *     }
 *  ]
 *} );
 */

if (!DataTable.ext.editorFields) {
	DataTable.ext.editorFields = {};
}

var _fieldTypes = DataTable.Editor
	? DataTable.Editor.fieldTypes
	: DataTable.ext.editorFields;

_fieldTypes.date = {
	create: function (conf) {
		conf._input = $('<input/>')
			.attr(
				$.extend(
					{
						id: conf.id,
						type: 'text',
						class: 'datepicker'
					},
					conf.attr || {}
				)
			)
			.datepicker(conf.opts || {});

		this.on('close', function () {
			conf._input.datepicker('hide');
		});

		return conf._input[0];
	},

	get: function (conf) {
		return conf._input.val();
	},

	set: function (conf, val) {
		if (typeof val === 'object' && val && val.getMonth) {
			conf._input.val(val).datepicker('setDate', val);
		}
		else {
			conf._input.val(val).datepicker('update');
		}
	},

	enable: function (conf) {
		conf._input.prop('disabled', true);
	},

	disable: function (conf) {
		conf._input.prop('disabled', false);
	},

	// Non-standard Editor methods - custom to this plug-in
	node: function (conf) {
		return conf._input;
	},

	owns: function (conf, node) {
		// THe date control will have redrawn itself, creating new nodes by the
		// time this function runs if clicking on a date. So need to check based
		// on class if the date picker own the element clicked on
		var isCell =
			$(node).hasClass('day') ||
			$(node).hasClass('month') ||
			$(node).hasClass('year');
		return $(node).parents('div.datepicker').length || isCell
			? true
			: false;
	}
};

// Add the date plug-in methods as methods for the Editor field so they can be
// access using (for example) `editor.field('name').show();`.
[
	'remove',
	'show',
	'hide',
	'update',
	'setDate',
	'setUTCDate',
	'getDate',
	'getUTCDate',
	'setStartDate',
	'setEndDate',
	'setDaysOfWeekDisabled'
].forEach(function (val) {
	DataTable.Editor.fieldTypes.date[val] = function () {
		var args = Array.prototype.slice.call(arguments);
		var conf = args.shift();

		args.unshift(val);
		conf._input.datepicker.apply(conf._input, args);
	};
});


export default DataTable.Editor;

