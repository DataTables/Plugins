/*! © SpryMedia Ltd - datatables.net/license */

/**
 * Data can often be a complicated mix of numbers and letters (file names
 * are a common example) and sorting them in a natural manner is quite a
 * difficult problem.
 *
 * Fortunately the Javascript `localeCompare` method is now widely supported
 * and provides a natural sorting method we can use with DataTables.
 *
 *  @name Natural sorting
 *  @summary Sort data with a mix of numbers and letters _naturally_.
 *  @author Allan Jardine
 *  @requires DataTables 2+
 *
 *  @example
 *   // Natural sorting
 *   new DataTable('#myTable',
 *       columnDefs: [
 *           { type: 'natural', target: 0 }
 *       ]
 *   } );
 *
 *  @example
 *   // Html can be stripped from sorting by using 'natural-nohtml' such as
 *   new DataTable('#myTable',
 *       columnDefs: [
 *    	     { type: 'natural-nohtml', target: 0 }
 *       ]
 *    } );
 *
 *  @example
 *   // Case insensitive natural sorting
 *   new DataTable('#myTable',
 *       columnDefs: [
 *    	     { type: 'natural-ci', target: 0 }
 *       ]
 *    } );
 *
 */

import DataTable from "datatables.net";

DataTable.type("natural", {
	order: {
		asc: function (a, b) {
			return a.localeCompare(b, navigator.languages[0] || navigator.language, {
				numeric: true,
				ignorePunctuation: true,
			});
		},
		desc: function (a, b) {
			return (
				a.localeCompare(b, navigator.languages[0] || navigator.language, { numeric: true, ignorePunctuation: true }) *
				-1
			);
		},
	},
	className: "natural-sort",
});

DataTable.type("natural-nohtml", {
	order: {
		asc: function (a, b) {
			a = DataTable.util.stripHtml(a);
			b = DataTable.util.stripHtml(b);

			return a.localeCompare(b, navigator.languages[0] || navigator.language, {
				numeric: true,
				ignorePunctuation: true,
			});
		},
		desc: function (a, b) {
			a = DataTable.util.stripHtml(a);
			b = DataTable.util.stripHtml(b);

			return (
				a.localeCompare(b, navigator.languages[0] || navigator.language, { numeric: true, ignorePunctuation: true }) *
				-1
			);
		},
	},
	className: "natural-sort",
});

DataTable.type("natural-ci", {
	order: {
		asc: function (a, b) {
			a = a.toString().toLowerCase();
			b = b.toString().toLowerCase();

			return a.localeCompare(b, navigator.languages[0] || navigator.language, {
				numeric: true,
				ignorePunctuation: true,
			});
		},
		desc: function (a, b) {
			a = a.toString().toLowerCase();
			b = b.toString().toLowerCase();

			return (
				a.localeCompare(b, navigator.languages[0] || navigator.language, { numeric: true, ignorePunctuation: true }) *
				-1
			);
		},
	},
	className: "natural-sort",
});
