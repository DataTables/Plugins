/*! © SpryMedia Ltd - datatables.net/license */

(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery', 'datatables.net'], function ($) {
			return factory($, window, document);
		});
	}
	else if (typeof exports === 'object') {
		// CommonJS
		var jq = require('jquery');
		var cjsRequires = function (root, $) {
			if (!$.fn.dataTable) {
				require('datatables.net')(root, $);
			}
		};

		if (typeof window === 'undefined') {
			module.exports = function (root, $) {
				if (!root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}

				if (!$) {
					$ = jq(root);
				}

				cjsRequires(root, $);
				return factory($, root, root.document);
			};
		}
		else {
			cjsRequires(window, jq);
			module.exports = factory(jq, window, window.document);
		}
	}
	else {
		// Browser
		factory(jQuery, window, document);
	}
}(function ($, window, document) {
	'use strict';

	var DataTable = $.fn.dataTable;

	/**
	 * This plugin enables sorting for Turkish column content, allowing sorting of text columns containing Turkish characters
	 * and date columns in the Turkish format (e.g., 31.12.2024, 1.1.2024, or 01.01.2024).
	 * Numeric columns in Turkish number format remain unaffected, and they use default sorting, which is fine with Turkish numbers.
	 *
	 * The plugin automatically detects column types and applies Turkish sorting to text and date columns in Turkish format,
	 * eliminating the need to add 'columnDefs' to datatable options.
	 *
	 * Compatible with DataTables 1.13.7.
	 * Previous versions of DataTables have not been tested.
	 *
	 *  @name Turkish
	 *  @summary Sort Turkish text, date, and numbers.
	 *  @author [Sinan ILYAS](https://github.com/sinanilyas)
	 */

	DataTable.ext.type.detect.unshift(function (a) {
		'use strict'

		const isTurkishNumber = /^[-+]?(\d+|\d{1,3}(\.\d{3})*)(,\d+)?$/.test(a);
		if (isTurkishNumber) return null; // Use default sorting, which is fine with Turkish number format.

		return 'turkish'; // Use 'turkish' sorting
	});

	DataTable.ext.type.order['turkish-pre'] = function (a) {
		'use strict'

		function isDate(a) {
			return /^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[0-2])\.\d{4}$/.test(a);
		}

		function preprocessDate(a) {
			const dateArray = a.split('.');

			const day = dateArray[0].padStart(2, '0'); // Pad the day component with leading zero if it's single-digit
			const month = dateArray[1].padStart(2, '0'); // Pad the month component with leading zero if it's single-digit
			const year = dateArray[2];

			return `${year}-${month}-${day}`;
		}

		function preprocessText(a) {
			const specialLettersMapping = {
				'c': 'c0',
				'ç': 'c1',
				'g': 'g0',
				'ğ': 'g1',
				'i': 'i1',
				'ı': 'i0',
				'o': 'o0',
				'ö': 'o1',
				's': 's0',
				'ş': 's1',
				'u': 'u0',
				'ü': 'u1',
				'C': 'C0',
				'Ç': 'C1',
				'G': 'G0',
				'Ğ': 'G1',
				'I': 'I0',
				'İ': 'I1',
				'O': 'O0',
				'Ö': 'O1',
				'S': 'S0',
				'Ş': 'S1',
				'U': 'U0',
				'Ü': 'U1',
			};

			function replaceSpecialLetters(a) {
				// Construct a regular expression pattern to match all special letters
				const pattern = new RegExp('[' + Object.keys(specialLettersMapping).join('') + ']', 'g');

				// Replace each special letter with its mapped value
				return a.replace(pattern, function (match) {
					return specialLettersMapping[match];
				});
			}

			return replaceSpecialLetters(a);
		}

		if (isDate(a)) return preprocessDate(a);

		return preprocessText(a);
	};

	return DataTable;
}));
