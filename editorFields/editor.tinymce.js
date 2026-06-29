

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
 * Use the [TinyMCE](http://www.tinymce.com) WYSIWYG input control in Editor.
 *
 * @name TinyMCE
 * @summary WYSIWYG editor
 * @requires [TinyMCE](http://www.tinymce.com)
 * @depjs https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js
 *
 * @opt `e-type object` **`opts`**: TinyMCE options object which is used in the construction
 *   of the WYSIWYG text area. The options available are defined in the [TinyMCE
 *   documentation](http://www.tinymce.com).
 *
 * @method **`tinymce`**: Get the TinyMCE instance. This is useful if you want to be
 *   able to interact with the TinyMCE instance directly, through the control's
 *   own API.
 *
 * @example
 *
 * new DataTable.Editor( {
 *   "ajax": "php/dates.php",
 *   "table": "#example",
 *   "fields": [ {
 *       "label": "Notes:",
 *       "name": "notes",
 *       "type": "tinymce",
 *       "opts": {
 *         skin : 'lightgray',
 *         // additional options if required...
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

var Dom = DataTable.Dom;

_fieldTypes.tinymce = {
	_reinit: function (conf, host) {
		if (conf._doingInit) {
			return true;
		}

		// Destroy any existing editor
		var editor = tinymce.get(conf._safeId);

		if (Dom.s('#' + conf._safeId).length === 0) {
			return;
		}

		if (editor) {
			editor.destroy();
		}

		conf._doingInit = true;

		setTimeout(function () {
			tinymce.init(
				DataTable.util.object.assignDeep(
					{},
					{
						selector: '#' + conf._safeId,
						setup: function (editor) {
							editor.on('init', function (e) {
								if (conf._initSetVal) {
									editor.setContent(conf._initSetVal);
									conf._initSetVal = null;
								}

								conf._doingInit = false;
							});

							host.bubblePosition();
						}
					},
					conf.opts
				)
			);
		}, 250);
	},

	_getAndSet: function (conf, host) {
		if (Dom.s('body').find(conf._input).length) {
			_fieldTypes.tinymce._reinit(conf, host);
		}
		else {
			host.one('open', function () {
				_fieldTypes.tinymce._reinit(conf, host);
			});
		}
	},

	create: function (conf) {
		var that = this;
		conf._safeId = DataTable.Editor.safeId(conf.id);

		conf._input = Dom.c('div').append(
			Dom.c('textarea').attr('id', conf._safeId)
		);

		// Because tinyMCE uses an editable iframe, we need to destroy and
		// recreate it on every display of the input
		this.on('initCreate.tinymceInit-' + conf._safeId, function () {
			_fieldTypes.tinymce._getAndSet(conf, that);
		})
			.on('initEdit.tinymceInit-' + conf._safeId, function () {
				_fieldTypes.tinymce._getAndSet(conf, that);
			})
			.on('close.tinymceInit-' + conf._safeId, function () {
				var editor = tinymce.get(conf._safeId);

				if (editor) {
					editor.destroy();
				}

				conf._initSetVal = null;
				conf._input.find('textarea').val('');
			});

		return conf._input;
	},

	get: function (conf) {
		var editor = tinymce.get(conf._safeId);

		if (!editor) {
			return conf._initSetVal;
		}

		return editor.getContent();
	},

	set: function (conf, val) {
		var editor = tinymce.get(conf._safeId);

		// If not ready, then store the value to use when the `open` event fires
		conf._initSetVal = val;
		if (!editor) {
			return;
		}
		editor.setContent(val);
	},

	enable: function (conf) {}, // not supported in TinyMCE

	disable: function (conf) {}, // not supported in TinyMCE

	destroy: function (conf) {
		var id = DataTable.Editor.safeId(conf.id);

		this.off('open.tinymceInit-' + id);
		this.off('close.tinymceInit-' + id);
		this.off('displayOrder.tinymceInit-' + id);
	},

	owns: function (conf, node) {
		return Dom.s(node).closest('div.DTE_Field_Type_tinymce').length
			? true
			: false;
	},

	// Get the TinyMCE instance - note that this is only available after the
	// first onOpen event occurs
	tinymce: function (conf) {
		return tinymce.get(conf._safeId);
	}
};


return DataTable.Editor;
}));
