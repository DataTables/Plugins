/*! © SpryMedia Ltd - datatables.net/license */

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

import DataTable from 'datatables.net';

declare module 'datatables.net' {
	interface DataTablesStatic {
		intlOrder(locals: string, options: Intl.CollatorOptions);
	}
}

DataTable.intlOrder = function (locales, options) {
	if (window.Intl) {
		var collator = new Intl.Collator(locales, options);
		var types = DataTable.ext.type;

		delete types.order['string-pre'];
		types.order['string-asc'] = collator.compare;
		types.order['string-desc'] = function (a, b) {
			return collator.compare(a, b) * -1;
		};
	}
};

// Old style originally introduced in the blog post
(DataTable.ext.order as any).intl = DataTable.intlOrder;
