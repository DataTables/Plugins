

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
 * Use a field as a grouping title for other fields. This provides the end
 * user with easy to understand grouping.
 *
 * Fields defined with this type are not submitted to the server, but they do
 * need to be initialised as normal using `e-api add()` or `e-init fields`.
 *
 * @name Field set title
 * @summary Field grouping display
 *
 * @scss editor.title.scss
 *
 * @example
 *     
 * new DataTable.Editor( {
 *   "ajax": "/api/dates",
 *   "table": "#staff",
 *   "fields": [ {
 *       "label": "Personal information",
 *       "name": "pinfo",
 *       "type": "title"
 *     }, 
 *     // additional fields...
 *   ]
 * } );
 */

if ( ! DataTable.ext.editorFields ) {
    DataTable.ext.editorFields = {};
}

var _fieldTypes = DataTable.Editor ?
    DataTable.Editor.fieldTypes :
    DataTable.ext.editorFields;


_fieldTypes.title = {
    create: function ( field )      { return DataTable.Dom.c('div')[0]; },
    get:    function ( field )      { return ''; },
    set:    function ( field, val ) {}
};


return DataTable.Editor;
}));
