

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
 * This plugin integrates with the [jQuery Tristate plug-in](https://vanderlee.github.io/tristate/)
 * to provide the ability to use a single checkbox input to represent three different
 * states. Another way of doing this would be with `e-field radio`, but this plugin
 * can be useful due to how compact it is.
 *
 * @name Tristate checkbox
 * @summary Provide a tristate checkbox to allow three values to be represented.
 * @requires [jQuery Tristate plug-in](https://vanderlee.github.io/tristate/)
 *
 * @depjs https://code.jquery.com/jquery-3.7.1.js
 * @depjs https://vanderlee.github.io/tristate/jquery.tristate.js
 *
 * @opt `e-type object` **`options`**: Options passed directly to the Tristate
 *   library. Please refer [to its documentation](https://vanderlee.github.io/tristate/)
 *   for details. You'll need to set `checked`, `unchecked` and `indeterminate`
 *   parameters to define what value those states should have.
 *
 * @example
 *  var editor = new DataTable.Editor({
 *    table: '#myTable',
 *    fields: [
 *      {
 *        label: 'State:',
 *        name: 'state',
 *        type: 'tristate',
 *        options: {
 *          checked: '1',
 *          unchecked: '',
 *          indeterminate: '-',
 *        },
 *      },
 *    ],
 *  });
 */

if (!DataTable.ext.editorFields) {
	DataTable.ext.editorFields = {};
}

DataTable.ext.editorFields.tristate = {
	create: function (conf) {
		var options = $.extend({}, conf.options);

		conf._input = $('<div>');
		conf._checkbox = $('<input type="checkbox">')
			.appendTo(conf._input)
			.addClass('tristate')
			.tristate(options);

		return conf._input;
	},

	get: function (conf) {
		return conf._checkbox.tristate('value');
	},

	set: function (conf, val) {
		return conf._checkbox.tristate('value', val);
	},

	enable: function (conf) {
		return conf._checkbox.prop('disable', false);
	},

	disable: function (conf, val) {
		return conf._checkbox.prop('disable', true);
	}
};


return DataTable.Editor;
}));
