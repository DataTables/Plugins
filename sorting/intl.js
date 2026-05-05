/*! © SpryMedia Ltd - datatables.net/license - 3.0.0-beta.2 */

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
 * This sorting type will replace DataTables' default string sort with one that
 * will use a locale aware collator. This is supported by IE11, Edge, Chrome,
 * Firefox and Safari 10+. Any browser that does not support the Intl will
 * simply fall back to UTF8 string sorting.
 *
 * This method simply needs to be called prior to the DataTables' initialisation
 * to replace the default string sort with locale aware sorting. The method
 * optionally takes two arguments:
 *
 * 1. [Optional] Locale or array of locales
 * 2. [Optional] Collator options
 *
 * For the supported options please see the
 * [MDN Intl documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator).
 *
 * @name intl
 * @summary Sort string data using the Intl Javascript API
 * @author [Allan Jardine](//datatables.net)
 * @depends DataTables 1.10+
 *
 * @example
 *    // Host's current locale
 *    DataTable.intlOrder();
 *
 * @example
 *    // Explicit locale
 *    DataTable.intlOrder('de-u-co-phonebk');
 *
 * @example
 *    // Locale with configuration options
 *    DataTable.intlOrder('fr', {
 *      sensitivity: 'base'
 *    } );
 */
DataTable.intlOrder = function (locales, options) {
    if (window.Intl) {
        var collator = new Intl.Collator(locales, options);
        var types = DataTable.ext.type;
        var asc = collator.compare;
        var desc = function (a, b) {
            return collator.compare(a, b) * -1;
        };
        delete types.order['string-pre'];
        types.order['string-asc'] = asc;
        types.order['string-desc'] = desc;
        // The utf8 data type variant uses the same sorting methods
        types.order['string-utf8-asc'] = asc;
        types.order['string-utf8-desc'] = desc;
        types.order['html-pre'] = DataTable.util.stripHtml;
        types.order['html-asc'] = asc;
        types.order['html-desc'] = desc;
        types.order['html-utf8-pre'] = DataTable.util.stripHtml;
        types.order['html-utf8-asc'] = asc;
        types.order['html-utf8-desc'] = desc;
    }
};
// Old style originally introduced in the blog post
DataTable.ext.type.order.intl = DataTable.intlOrder;


return DataTable;
}));
