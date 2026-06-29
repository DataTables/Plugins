/*! © SpryMedia Ltd, Alireza Mohammadi Doost - datatables.net/license - 3.0.0-beta.2 */

import DataTable from 'datatables.net';

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


export default DataTable;

