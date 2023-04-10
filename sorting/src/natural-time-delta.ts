/*! © SpryMedia Ltd, Shodhan Save - datatables.net/license */

/**
 * This plug-in allows sorting of human readable time delta, viz.,
 * "1 week", "2 weeks 3 days", "4 weeks 5 days 6 hours", etc.
 *
 * Currently this plugin supports time range from microseconds to decades.
 *
 * The plugin also takes care of singular and plural values like week(s)
 *
 *  @name Natural Time Delta
 *  @summary Sort human readable time delta
 *  @author Shodhan Save
 *
 *  @example
 *    $("#example").DataTable({
 *       columnDefs: [
 *         { "type": "natural-time-delta", "targets": 2 }
 *       ]
 *    });
 */

import DataTable from 'datatables.net';

DataTable.ext.order['natural-time-delta-pre'] = function (data) {
	var result = 0;
	var pattern =
		/(\d+\s*decades?\s*)?(\d+\s*years?\s*)?(\d+\s*months?\s*)?(\d+\s*weeks?\s*)?(\d+\s*days?\s*)?(\d+\s*hours?\s*)?(\d+\s*minutes?\s*)?(\d+\s*seconds?\s*)?(\d+\s*milliseconds?\s*)?(\d+\s*microseconds?\s*)?/i;
	var format_time_element = function (el, splitter, mul) {
		if (el === undefined) {
			return 0;
		}
		return parseFloat(el.split(splitter)[0].trim()) * mul;
	};

	var matches = data.match(pattern);
	matches.reverse();

	var time_elements = [
		{ splitter: 'us', name: 'microsecond', mul: 1 / 1000 / 1000 },
		{ splitter: 'ms', name: 'millisecond', mul: 1 / 1000 },
		{ splitter: 's', name: 'second', mul: 1 },
		{ splitter: 'm', name: 'minute', mul: 1 * 60 },
		{ splitter: 'h', name: 'hour', mul: 1 * 60 * 60 },
		{ splitter: 'd', name: 'day', mul: 1 * 60 * 60 * 24 },
		{ splitter: 'w', name: 'week', mul: 1 * 60 * 60 * 24 * 7 },
		{ splitter: 'w', name: 'month', mul: 1 * 60 * 60 * 24 * 7 * 30 },
		{ splitter: 'w', name: 'year', mul: 1 * 60 * 60 * 24 * 7 * 30 * 12 },
		{ splitter: 'w', name: 'decade', mul: 1 * 60 * 60 * 24 * 7 * 30 * 12 * 10 },
	];

	time_elements.forEach(function (el, i) {
		var val = format_time_element(matches[i], el['splitter'], el['mul']);
		result += val;
	});

	return result || -1;
};
