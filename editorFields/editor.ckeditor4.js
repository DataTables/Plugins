

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
 * Use the [CKEditor v4](https://ckeditor.com) WYSIWYG input control in Editor to
 * allow easy creation of complex HTML content in Editor.
 *
 * @name CKEditor v4
 * @summary WYSIWYG editor
 * @requires [CKEditor](https://ckeditor.com)
 *
 * @opt `e-type object` **`opts`**: CKEditor initialisation options object.
 *   Please refer to the CKEditor documentation for the full range of options
 *   available.
 *
 * @example
 *
 * new DataTable.Editor( {
 *   "ajax": "php/customers.php",
 *   "table": "#example",
 *   "fields": [ {
 *       "label": "Info:",
 *       "name": "info",
 *       "type": "ckeditor"
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

_fieldTypes.ckeditor = {
	create: function (conf) {
		var that = this;
		var id = DataTable.Editor.safeId(conf.id);

		conf._input = DataTable.Dom.c('div').append(
			DataTable.Dom.c('textarea').attr('id', id)
		);

		// CKEditor needs to be initialised on each open call
		this.on('open.ckEditInit-' + id, function () {
			if (DataTable.Dom.s('#' + id).length) {
				conf._editor = CKEDITOR.replace(id, conf.opts);
				conf._editor.on('instanceReady', function () {
					// If shown in a bubble, there is a good chance we'll need
					// to move it once CKEditor is shown, since it is large!
					if (conf._input.parents('div.DTE_Bubble').length) {
						that.bubblePosition();
					}
				});

				if (conf._initSetVal) {
					conf._editor.setData(conf._initSetVal);
					conf._initSetVal = null;
				}
				else {
					conf._editor.setData('');
				}
			}
		});

		// And destroyed on each close, so it can be re-initialised on reopen
		this.on('preClose.ckEditInit-' + id, function () {
			if (conf._editor) {
				conf._editor.destroy();
				conf._editor = null;
			}
		});

		return conf._input;
	},

	get: function (conf) {
		if (!conf._editor) {
			return conf._initSetVal;
		}

		return conf._editor.getData();
	},

	set: function (conf, val) {
		var id = DataTable.Editor.safeId(conf.id);

		// If not ready, then store the value to use when the onOpen event fires
		if (!conf._editor || !DataTable.Dom.s('#' + id).length) {
			conf._initSetVal = val;
			return;
		}
		conf._editor.setData(val);
	},

	enable: function (conf) {}, // not supported in CKEditor

	disable: function (conf) {}, // not supported in CKEditor

	destroy: function (conf) {
		var id = DataTable.Editor.safeId(conf.id);

		this.off('open.ckEditInit-' + id);
		this.off('preClose.ckEditInit-' + id);
	}
};


return DataTable.Editor;
}));
