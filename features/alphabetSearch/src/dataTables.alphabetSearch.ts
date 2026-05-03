/*! © SpryMedia Ltd - datatables.net/license */

/**
 * @summary     AlphabetSearch
 * @description Show an set of alphabet buttons alongside a table providing
 *     search input options
 * @author      SpryMedia Ltd
 * @copyright   Copyright SpryMedia Ltd.
 * @requires DataTables 3+
 *
 * License      MIT - http://datatables.net/license/mit
 *
 * Please see [this blog post](http://datatables.net/blog/2014-09-22).
 *
 * @example
 *   new DataTable('#myTable', {
 *     layout: {
 *       topStart: 'alphabetSearch;
 *     }
 *   } );
 */

import DataTable, { Dom } from 'datatables.net';

interface AlphabetSearchOptions {
	column?: number;
	caseSensitive?: boolean;
	numbers?: boolean;
};

declare module 'datatables.net' {
	interface DataTablesStatic {
		/** Show an set of alphabet buttons alongside a table providing search input options */
		AlphabetSearch(settings: any): void;
	}

	interface Config {
		alphabet?: AlphabetSearchOptions;
	}

	interface Api<T> {
		alphabetSearch: ApiAlphabet<T>;
	}

	interface ApiAlphabet<T> {
		(searchTerm: string): ApiAlphabetMethods<T>;
	}

	interface ApiAlphabetMethods<T> extends Api<T> {
		node(): Dom | null;

		recalc(): Api<T>;
	}

	interface Feature {
		alphabetSearch?: AlphabetSearchOptions;
	}

	interface Context {
		alphabetSearch: string;
	}

	interface Options {
		alphabet: AlphabetSearchOptions;
	}
}

// Search function
DataTable.Api.register('alphabetSearch()', function (searchTerm) {
	this.iterator('table', function (context) {
		context.alphabetSearch = searchTerm;
	});

	return this;
});

// Recalculate the alphabet display for updated data
DataTable.Api.register('alphabetSearch.recalc()', function () {
	this.iterator('table', function (context) {
		draw(
			new DataTable.Api(context),
			context._alphabet,
			context._alphabetOptions
		);
	});

	return this;
});

DataTable.Api.register('alphabetSearch.node()', function () {
	return this._context.length
		? this._context._alphabet
		: null;
});

// Search plug-in
DataTable.ext.search.push(function (context, searchData) {
	// Ensure that there is a search applied to this table before running it
	if (!context.alphabetSearch || ! searchData) {
		return true;
	}

	var columnId = 0;
	var caseSensitive = false;

	if (context.init.alphabet !== undefined) {
		columnId =
			context.init.alphabet.column !== undefined
				? context.init.alphabet.column
				: 0;
		caseSensitive =
			context.init.alphabet.caseSensitive !== undefined
				? context.init.alphabet.caseSensitive
				: false;
	}

	if (caseSensitive) {
		if (searchData[columnId].charAt(0) === context.alphabetSearch) {
			return true;
		}
	}
	else {
		if (
			searchData[columnId].charAt(0).toUpperCase() === context.alphabetSearch
		) {
			return true;
		}
	}

	return false;
});

// Private support methods
function bin(data, options) {
	var letter,
		bins = {};

	for (var i = 0, ien = data.length; i < ien; i++) {
		if (options.caseSensitive) {
			letter = data[i].toString().replace(/<.*?>/g, '').charAt(0);
		}
		else {
			letter = data[i].toString().replace(/<.*?>/g, '').charAt(0).toUpperCase();
		}
		if (bins[letter]) {
			bins[letter]++;
		}
		else {
			bins[letter] = 1;
		}
	}

	return bins;
}

function draw(table, alphabet, options) {
	alphabet.empty();
	alphabet.append('Search: ');

	var columnData = table.column(options.column).data();
	var bins = bin(columnData, options);

	Dom.c('span')
		.classAdd('clear active')
		.data('letter', '')
		.data('match-count', columnData.length)
		.html('None')
		.appendTo(alphabet);

	if (options.numbers) {
		for (var i = 0; i < 10; i++) {
			var letter = String.fromCharCode(48 + i);

			Dom.c('span')
				.data('letter', letter)
				.data('match-count', bins[letter] || 0)
				.classAdd(!bins[letter] ? 'empty' : '')
				.html(letter)
				.appendTo(alphabet);
		}
	}
	for (var i = 0; i < 26; i++) {
		var letter = String.fromCharCode(65 + i);

		Dom.c('span')
			.data('letter', letter)
			.data('match-count', bins[letter] || 0)
			.classAdd(!bins[letter] ? 'empty' : '')
			.html(letter)
			.appendTo(alphabet);
	}
	if (options.caseSensitive) {
		for (var i = 0; i < 26; i++) {
			var letter = String.fromCharCode(97 + i);

			Dom.c('span')
				.data('letter', letter)
				.data('match-count', bins[letter] || 0)
				.classAdd(!bins[letter] ? 'empty' : '')
				.html(letter)
				.appendTo(alphabet);
		}
	}

	Dom.c('div').classAdd('alphabetInfo').appendTo(alphabet);
}

DataTable.AlphabetSearch = function (context) {
	var table = new DataTable.Api(context);
	var alphabet = Dom.c('div').classAdd('alphabet');
	var options = Object.assign(
		{
			column: 0,
			caseSensitive: false,
			numbers: false,
		},
		table.init().alphabet
	);

	draw(table, alphabet, options);

	context._alphabet = alphabet;
	context._alphabetOptions = options;

	// Trigger a search
	alphabet.on('click', 'span', function () {
		alphabet.find('.active').classRemove('active');
		Dom.s(this).classAdd('active');

		table.alphabetSearch(Dom.s(this).data('letter')).draw();
	});

	// Mouse events to show helper information
	alphabet
		.on('mouseenter', 'span', function () {
			alphabet
				.find('div.alphabetInfo')
				.css({
					opacity: '1',
					left: Dom.s(this).position().left + 'px',
					width: Dom.s(this).width() + 'px',
				})
				.html(Dom.s(this).data('match-count'));
		})
		.on('mouseleave', 'span', function () {
			alphabet.find('div.alphabetInfo').css('opacity', '0');
		});

	this.node = function () {
		return alphabet;
	};
};

// Legacy dom option
DataTable.ext.feature.push({
	fnInit: function (settings) {
		var search = new DataTable.AlphabetSearch(settings);
		return search.node();
	},
	cFeature: 'A',
});

// Feature registration
DataTable.feature.register('alphabetSearch', function (settings, opts) {
	var search = new DataTable.AlphabetSearch(settings);

	return search.node();
});
