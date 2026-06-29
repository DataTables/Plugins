

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
 * Signature is a Plugin to allow the user to add signatures to cells. This plugin
 * provides integration between (https://www.jqueryscript.net/other/Smooth-Signature-Pad-Plugin-with-jQuery-Html5-Canvas.html)
 * and Editor, adding the `signature` field type to Editor.
 *
 * @name jQuery Signature Pad
 * @summary Use jQuery Signature Pad library with Editor to allow Signatures
 * to be added to cells in Editor.
 *
 * @requires jQuery Signature Pad Library
 *
 * @depjs https://www.jqueryscript.net/demo/Smooth-Signature-Pad-Plugin-with-jQuery-Html5-Canvas/assets/numeric-1.2.6.min.js
 * @depjs https://code.jquery.com/jquery-3.7.1.js
 * @depjs https://www.jqueryscript.net/demo/Smooth-Signature-Pad-Plugin-with-jQuery-Html5-Canvas/assets/bezier.js
 * @depjs https://www.jqueryscript.net/demo/Smooth-Signature-Pad-Plugin-with-jQuery-Html5-Canvas/jquery.signaturepad.js
 *
 * @opt `e-type object` **`opts`**: jQuery Signature Pad expects an object for
 *      signature configuration, see their documentation for default and values.
 *
 * @opt `e-type object1` **`opts`**: jQuery Signature Pad expects an object for
 *      attributes configuration, see their documentation for default values.
 *
 * @opt `e-type object1` **`opts`**: jQuery Signature Pad expects a number for width.
 *
 * @opt `e-type object1` **`opts`**: jQuery Signature Pad expects a number for height.
 *
 * @example
 *   var editor = new DataTable.Editor({
 *     table: "#example",
 *     fields: [
 *       ...
 *       {
 *         label: "Signature:",
 *         name: "signature",
 *         type: "signature"
 *       }
 *     ]
 *   });
 *
 *   new DataTable("#example", {
 *     layout: {
 *       topStart: 'buttons'
 *     },
 *     columns: [
 *       { data: "name" },
 *       { data: "position" },
 *       { data: "start_date" },
 *       {
 *         data: "signature",
 *         render: function(data, type, row) {
 *           return data ? "Signed" : "Not Signed";
 *         }
 *       }
 *     ],
 *     select: true,
 *     buttons: [
 *       { extend: "create", editor: editor },
 *       { extend: "edit", editor: editor },
 *       { extend: "remove", editor: editor }
 *     ]
 *   });
 *
 */

if (!DataTable.ext.editorFields) {
	DataTable.ext.editorFields = {};
}

var _fieldTypes = DataTable.Editor
	? DataTable.Editor.fieldTypes
	: DataTable.ext.editorFields;

_fieldTypes.signature = {
	create: function (conf) {
		conf._input = $(
			'<div class="sig sigWrapper" style="height:auto;">' +
				'<div class="typed"></div>' +
				'</div>'
		).attr(
			$.extend(
				{
					id: DataTable.Editor.safeId(conf.id),
					type: 'text'
				},
				conf.attr || {}
			)
		);

		var width = 300;
		var height = 250;

		if (conf.canvasWidth) {
			width = conf.canvasWidth;
		}

		if (conf.canvasHeight) {
			height = conf.canvasHeight;
		}

		var canvasEl = $(
			'<canvas class="pad" width=' +
				width +
				' height=' +
				height +
				'></canvas>'
		);
		var inputEl = $('<input type="hidden" name="output" class="output">');

		conf._input.append(canvasEl);
		conf._input.append(inputEl);

		conf._sig = conf._input.signaturePad(
			{
				canvas: canvasEl,
				lineTop: 200,
				drawOnly: true
			},
			conf.signatureOptions
		);

		return conf._input[0];
	},

	get: function (conf) {
		return $(conf._input).find('input').val();
	},

	set: function (conf, val) {
		//regenerate must take a parameter that is a valid json object or string.
		//Therefore, if the val is not valid json then and empty object should be passed.
		var isJSON = true;
		try {
			JSON.parse(val);
		} catch (err) {
			isJSON = false;
		}
		conf._sig.regenerate(!isJSON ? {} : val);
	}
};


return DataTable.Editor;
}));
