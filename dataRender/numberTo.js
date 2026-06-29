/*! © SpryMedia Ltd, Alireza Mohammadi Doost - datatables.net/license - 3.0.0-beta.2 */

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
 * Convert numbers to farsi, english, arabic.
 * تبدیل عداد به فارسی, انگلیسی, عربی
 *
 *  @name ConvertTo
 *  @summary Convert numbers to Farsi, English, Arabic.
 *  @author Alireza Mohammadi Doost
 *  @license MIT
 *
 *  @example
 *    new DataTable('#example', {
 *      columnDefs: [{
 *        targets: 2,
 *        render: DataTable.render.numberTo('fa')
 *      }]
 *    });
 */
DataTable.render.numberTo = function (to = 'fa') {
    let result = null;
    const faNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const enNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const arNumbers = ['۰', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return function (d, type, row) {
        if (type !== 'display') {
            return d;
        }
        if (!d && to === 'fa') {
            return 'مقدار ورودی صحیح نمی‌باشد.';
        }
        else if (!d) {
            return 'numbers is empty.';
        }
        switch (to) {
            case 'fa':
                result = d
                    .toString()
                    .replace(/\d/g, (x) => faNumbers[x]);
                break;
            case 'en':
                result = d
                    .toString()
                    .replace(/\d/g, (x) => enNumbers[x]);
                break;
            case 'ar':
                result = d
                    .toString()
                    .replace(/\d/g, (x) => arNumbers[x]);
                break;
        }
        return result;
    };
};


return DataTable;
}));
