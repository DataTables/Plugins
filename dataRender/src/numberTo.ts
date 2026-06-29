/*! © SpryMedia Ltd, Alireza Mohammadi Doost - datatables.net/license */

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

import DataTable from 'datatables.net';

declare module 'datatables.net' {
	interface DataTablesStaticRender {
		/** Convert numbers to Farsi, English or Arabic. */
		numberTo(string: 'fa' | 'en' | 'ar'): any;
	}
}

DataTable.render.numberTo = function (to = 'fa') {
	let result = null;
	const faNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
	const enNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	const arNumbers = ['۰', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

	return function (d: any, type: string, row: any) {
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
					.replace(/\d/g, (x: number) => faNumbers[x]);
				break;

			case 'en':
				result = d
					.toString()
					.replace(/\d/g, (x: number) => enNumbers[x]);
				break;

			case 'ar':
				result = d
					.toString()
					.replace(/\d/g, (x: number) => arNumbers[x]);
				break;
		}
		return result;
	};
};
