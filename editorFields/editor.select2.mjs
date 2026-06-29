

import DataTable from 'datatables.net';
/**
 * [Select2](http://ivaynberg.github.io/select2) is a replacement for HTML
 * `-tag select` elements, enhancing standard `-tag select`'s with searching,
 * remote data sets and more. This plug-in provides the ability to use Select2
 * with Editor very easily.
 *
 * Note for when using Select2's remote Ajax data source option: In order to have
 * the label correctly render for an item being edited, the server-side script
 * that is responding to the Select2 requests must be able to accept a request
 * with the parameters: `initialValue:true` and `value:...` (i.e. the value). The
 * server _must_ respond with `{ "id": value, "text": "Label to show" }`.
 * 
 * Please note that this plug-in was published, Editor now has a built-in
 * `e-field autocomplete` and `e-field tags` field type which can be used with
 * full integration for the published server-side libraries. It is recommended
 * that you use the new built-in field types in preference to this plug-in,
 * particularly for new projects.
 *
 * @name Select2
 * @summary Use the Select2 library with Editor for complex select input options.
 * @requires [Select2](http://ivaynberg.github.io/select2)
 * @depcss //cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css
 * @depjs https://code.jquery.com/jquery-3.7.1.js
 * @depjs //cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js
 *
 * @opt `e-type object` **`options`**: - The values and labels to be used in the Select2 list. This can be given in a number of different forms:
 *   * `e-type object` - Name / value pairs, where the property name is used as the label and the value as the field value. For example: `{ "Edinburgh": 51, "London": 76, ... }`.
 *   * `e-type array` - An array of objects with the properties `label` and `value` defined. For example: `[ { label: "Edinburgh", value: 51 }, { label: "London", value: 76 } ]`.
 *   * `e-type array` - An array of values (e.g. numbers, strings etc). Each element in the array will be used for both the label and the value. For example: `[ "Edinburgh", "London" ]`.
 * @opt `e-type object` **`optionsPair`**: If `options` is given as an array of objects, by default
 *      Editor will read the information for the label and value properties of the select input
 *      from the `label` and `value` properties of the data source object. This option provides the
 *      ability to alter those parameters by giving it as an object containing the properties `label
 *      and `value` itself, the values of which indicate the properties that should be read from the
 *      data source object. For example you might use `{ label: 'name', value: 'id' }`.
 * @opt `e-type object` **`opts`**: Select2 initialisation options object.
 *     Please refer to the Select2 documentation for the full range
 *     of options available.
 * @opt `e-type object` **`attr`**: Attributes that are applied to the
 *     `-tag select` element before Select2 is initialised
 * @opt `-type string` - **`separator`** when the `multiple` and `tags` options are used for Select2 (`opts` parameter) this can be used to use a string value to represent the multiple values that are selected. The character given for this parameter is the separator character that will be used.
 * @opt `-type string` - **`onFocus`**: Action to take when the Select2 field is focused. This can be `open` or `undefined`. If `open` the dropdown list will automatically show when the field is focused.
 * @pot `-type string` - **`urlDataType`**: Format in which to send the data for an Ajax initial request (if required). Can be `json` (default) or `param` to have the value encoded with `jQuery.param()`.
 *
 * @method **`inst`**: Execute a Select2 method, using the arguments given. The
 *     return value is that returned by the Select2 method. For example you could
 *     use `editor.field('priority').inst('val')` to get the value from Select2
 *     directly.
 * @method **`update`**: Update the list of options that are available in the
 *     Select2 list. This uses the same format as `options` for the
 *     initialisation.
 *
 * @example
 * // Create an Editor instance with a Select2 field and data
 * new DataTable.Editor( {
 *   "ajax": "/api/todo",
 *   "table": "#example",
 *   "fields": [ {
 *           "label": "Item:",
 *           "name": "item"
 *       }, {
 *           "label": "Priority:",
 *           "name": "priority",
 *           "type": "select2",
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
 *
 * @example
 * // Add a Select2 field to Editor with Select2 options set
 * editor.add( {
 *     "label": "State:",
 *     "name": "state",
 *     "type": "select2",
 *     "opts": {
 *         "placeholder": "Select State",
 *         "allowClear": true
 *     }
 * } );
 *
 */

if (!DataTable.ext.editorFields) {
	DataTable.ext.editorFields = {};
}

var _fieldTypes = DataTable.Editor
	? DataTable.Editor.fieldTypes
	: DataTable.ext.editorFields;

_fieldTypes.select2 = {
	_addOptions: function (conf, opts) {
		var elOpts = conf._input[0].options;

		elOpts.length = 0;

		if (opts) {
			DataTable.Editor.pairs(
				opts,
				conf.optionsPair,
				function (val, label, i) {
					elOpts[i] = new Option(label, val);
				}
			);
		}
	},

	create: function (conf) {
		conf._input = $('<select/>').attr(
			$.extend(
				{
					id: DataTable.Editor.safeId(conf.id)
				},
				conf.attr || {}
			)
		);

		var options = $.extend(
			{
				width: '100%'
			},
			conf.opts
		);

		_fieldTypes.select2._addOptions(conf, conf.options || conf.ipOpts);
		conf._input.select2(options);

		var open;
		conf._input
			.on('select2:open', function () {
				open = true;
			})
			.on('select2:close', function () {
				open = false;
			});

		// On open, need to have the instance update now that it is in the DOM
		this.one(
			'open.select2-' + DataTable.Editor.safeId(conf.id),
			function () {
				conf._input.select2(options);

				if (open) {
					conf._input.select2('open');
				}
			}
		);

		return conf._input[0];
	},

	get: function (conf) {
		var val = conf._input.val();
		val = conf._input.prop('multiple') && val === null ? [] : val;

		return conf.separator ? val.join(conf.separator) : val;
	},

	set: function (conf, val) {
		var field = this.field(conf.name);

		if (conf.separator && !Array.isArray(val)) {
			val = val === null ? [] : val.split(conf.separator);
		}

		// Clear out any existing tags
		if (conf.opts && conf.opts.tags) {
			conf._input.val([]);
		}

		// The value isn't present in the current options list, so we need to
		// add it in order to be able to select it. Note that this makes the set
		// action async! It doesn't appear to be possible to add an option to
		// select2, then change its label and update the display
		var needAjax = false;

		if (conf.opts && conf.opts.ajax) {
			if (Array.isArray(val)) {
				for (var i = 0, ien = val.length; i < ien; i++) {
					if (
						conf._input.find('option[value="' + val[i] + '"]')
							.length === 0
					) {
						needAjax = true;
						break;
					}
				}
			}
			else {
				if (
					conf._input.find('option[value="' + val + '"]').length === 0
				) {
					needAjax = true;
				}
			}
		}

		if (needAjax && val) {
			field.processing(true);

			var functionData = {};
			if (typeof conf.opts.ajax.data === 'function') {
				functionData = conf.opts.ajax.data({
					term: val,
					page: 0
				});
			}

			$.ajax(
				$.extend(
					{
						beforeSend: function (jqXhr, settings) {
							// Add an initial data request to the server, but
							// don't override `data` since the dev might be
							// using that
							var initData =
								conf.urlDataType === undefined ||
								conf.urlDataType === 'json'
									? 'initialValue=true&value=' +
									  JSON.stringify(val) +
									  '&' +
									  $.param(functionData)
									: $.param(
											$.extend(functionData, {
												initialValue: true,
												value: val
											})
									  );

							if (typeof conf.opts.ajax.url === 'function') {
								settings.url = conf.opts.ajax.url();
							}

							if (settings.type === 'GET') {
								settings.url +=
									settings.url.indexOf('?') === -1
										? '?' + initData
										: '&' + initData;
							}
							else {
								settings.data = settings.data
									? settings.data + '&' + initData
									: initData;
							}
						},
						success: function (json) {
							var addOption = function (option) {
								if (
									conf._input.find(
										'option[value="' + option.id + '"]'
									).length === 0
								) {
									$('<option/>')
										.attr('value', option.id)
										.text(option.text)
										.appendTo(conf._input);
								}
							};

							if (Array.isArray(json)) {
								for (
									var i = 0, ien = json.length;
									i < ien;
									i++
								) {
									addOption(json[i]);
								}
							}
							else if (
								json.results &&
								Array.isArray(json.results)
							) {
								for (
									var i = 0, ien = json.results.length;
									i < ien;
									i++
								) {
									addOption(json.results[i]);
								}
							}
							else {
								addOption(json);
							}

							conf._input
								.val(val)
								.trigger('change', { editor: true });
							field.processing(false);
						}
					},
					conf.opts.ajax
				)
			);
		}
		else {
			conf._input.val(val).trigger('change', { editor: true });
		}
	},

	enable: function (conf) {
		$(conf._input).removeAttr('disabled');
	},

	disable: function (conf) {
		$(conf._input).attr('disabled', 'disabled');
	},

	// Non-standard Editor methods - custom to this plug-in
	inst: function (conf) {
		var args = Array.prototype.slice.call(arguments);
		args.shift();

		return conf._input.select2.apply(conf._input, args);
	},

	update: function (conf, data) {
		var val = _fieldTypes.select2.get(conf);

		_fieldTypes.select2._addOptions(conf, data);

		// Restore null value if it was, to let the placeholder show
		if (val === null) {
			_fieldTypes.select2.set.call(this, conf, null);
		}

		$(conf._input).trigger('change', { editor: true });
	},

	focus: function (conf) {
		if (conf._input.is(':visible') && conf.onFocus === 'focus') {
			conf._input.select2('open');
		}
	},

	owns: function (conf, node) {
		if (
			$(node).closest('.select2-container').length ||
			$(node).closest('.select2').length ||
			$(node).hasClass('select2-selection__choice__remove')
		) {
			return true;
		}
		return false;
	},

	canReturnSubmit: function () {
		return false;
	}
};


export default DataTable.Editor;

