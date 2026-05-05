/*!
 * Fuzzy Search for DataTables
 * SpryMedia Ltd - datatables.net/license MIT license
 *
 * Damerau-Levenshtein function courtesy of https://github.com/tad-lispy/node-damerau-levenshtein
 * BSD 2-Clause License
 * Copyright (c) 2018, Tadeusz Łazurski
 * All rights reserved.
 */

import DataTable, { Api, Context, Dom, util } from 'datatables.net';
import './types';

import fuzzySearch from './search';

DataTable.ext.search.push(function (settings, data, dataIndex) {
	let initial = settings.init.fuzzySearch;
	let row = settings.data[dataIndex] as any;

	if (!initial) {
		return true;
	}

	if (row) {
		// If fuzzy searching has not been implemented then pass all rows for this function
		if (row._fuzzySearch !== undefined) {
			// Read score to set the cell content and sort data
			var score = row._fuzzySearch.score;

			if (util.is.plainObject(initial) && initial.rankColumn !== undefined) {
				row.cells[initial.rankColumn].innerHTML = score;

				// Remove '%' from the end of the score so can sort on a number
				if (row.orderCache) {
					row.orderCache[initial.rankColumn] = +score.substring(
						0,
						score.length - 1
					);
				}
			}

			// Return the value for the pass as decided by the fuzzySearch function
			return row._fuzzySearch.pass;
		}
		else if (util.is.plainObject(initial) && initial.rankColumn !== undefined) {
			row.cells[initial.rankColumn].innerHTML = '';

			if (row.orderCache) {
				row.orderCache[initial.rankColumn] = '';
			}
		}
	}

	return true;
});

Dom.s(document).on('init.dt', function (e, settings: Context) {
	var api = new DataTable.Api(settings);
	var initial = api.init();
	var initialFuzzy = initial.fuzzySearch;

	// If this is not set then fuzzy searching is not enabled on the table so return.
	if (!initialFuzzy) {
		return;
	}

	if (typeof initialFuzzy === 'object' && initialFuzzy.columns) {
		initialFuzzy.columns = api
			.columns(initialFuzzy.columns)
			.indexes()
			.toArray();
	}

	var fromPlugin = false;

	// Find the input element
	var input = Dom.s(api.table().container()).find('div.dt-search input');

	var fontBold = {
		'font-weight': '600',
		'background-color': 'rgba(255,255,255,0.1)'
	};
	var fontNormal = {
		'font-weight': '500',
		'background-color': 'transparent'
	};
	var toggleCSS = {
		border: 'none',
		background: 'none',
		'font-size': '100%',
		width: '50%',
		display: 'inline-block',
		color: 'white',
		cursor: 'pointer',
		padding: '0.5em'
	};

	// Only going to set the toggle if it is enabled
	var toggle = Dom.c('button').classAdd('toggleSearch').text('Abc').css({
		border: 'none',
		background: 'none',
		position: 'relative',
		right: '33px',
		top: '0px',
		cursor: 'pointer',
		color: '#3b5e99',
		'margin-top': '1px'
	});

	var tooltip: Dom, exact: Dom, fuzzy: Dom, label: Dom;

	if (initialFuzzy === true || initialFuzzy.toggleSmart) {
		toggle.insertAfter(input);

		toggle = Dom.c('button')
			.classAdd('toggleSearch')
			.text('Abc')
			.insertAfter(input)
			.css({
				border: 'none',
				background: 'none',
				position: 'relative',
				right: '33px',
				top: '0px',
				cursor: 'pointer',
				color: '#3b5e99',
				'margin-top': '1px'
			});

		exact = Dom.c('button')
			.classAdd('toggleSearch')
			.text('Exact')
			.insertAfter(input)
			.css(toggleCSS)
			.css(fontBold)
			.attr('highlighted', 'true');

		fuzzy = Dom.c('button')
			.classAdd('toggleSearch')
			.text('Fuzzy')
			.insertAfter(input)
			.css(toggleCSS);

		input.css({
			'padding-right': '30px'
		});

		Dom.s(input.parent()).css('right', '-33px').css('position', 'relative');

		label = Dom.c('div').text('Search Type').css({
			'padding-bottom': '0.5em',
			'font-size': '0.8em'
		});

		tooltip = Dom.c('div')
			.classAdd('fuzzyToolTip')
			.css({
				position: 'absolute',
				top: '2em',
				background: 'white',
				'border-radius': '4px',
				'text-align': 'center',
				padding: '0.5em',
				'background-color': '#16232a',
				'box-shadow': '4px 4px 4px rgba(0, 0, 0, 0.5)',
				color: 'white',
				transition: 'opacity 0.25s',
				'z-index': '30001',
				width: input.width('outer') - 3 + 'px'
			})
			.append(label)
			.append(exact)
			.append(fuzzy);
	}

	function toggleFuzzy(event: KeyboardEvent) {
		if (toggle.attr('blurred')) {
			toggle.css({ filter: 'blur(0px)' }).attrRemove('blurred');
			fuzzy.attrRemove('highlighted').css(fontNormal);
			exact.attr('highlighted', true).css(fontBold);
		}
		else {
			toggle.css({ filter: 'blur(1px)' }).attr('blurred', true);
			exact.attrRemove('highlighted').css(fontNormal);
			fuzzy.attr('highlighted', true).css(fontBold);
		}

		// Whenever the search mode is changed we need to re-search
		triggerSearchFunction(event);
	}

	// Highlights one of the buttons in the tooltip and un-highlights the other
	function highlightButton(toHighlight: Dom, event: KeyboardEvent) {
		if (!toHighlight.attr('highlighted')) {
			toggleFuzzy(event);
		}
	}

	// Removes the tooltip element
	function removeToolTip() {
		tooltip.remove();
	}

	// Turn off the default datatables searching events
	Dom.s(settings.table).off('search.dt.DT');

	var fuzzySearchVal = '';
	var searchVal = '';
	// The function that we want to run on search
	var triggerSearchFunction = function (event: KeyboardEvent) {
		// If the search is only to be triggered on return wait for that
		if (
			(event.type === 'input' &&
				(initial.search === undefined ||
					!(initial.search as any).return)) ||
			event.key === 'Enter' ||
			event.type === 'click'
		) {
			// If the toggle is set and isn't checkd then perform a normal search
			if (toggle && !toggle.attr('blurred')) {
				api.rows().iterator(
					'row',
					function (settings: any, rowIdx) {
						settings.aoData[rowIdx]._fuzzySearch = undefined;
					},
					false
				);

				searchVal = input.val() as string;
				fuzzySearchVal = searchVal;
				fromPlugin = true;
				api.search(searchVal);
				fromPlugin = false;
				searchVal = '';
			}
			// Otherwise perform a fuzzy search
			else {
				// Get the value from the input element and convert to lower case
				fuzzySearchVal = input.val() as string;
				searchVal = '';

				if (
					fuzzySearchVal !== undefined &&
					fuzzySearchVal.length !== 0
				) {
					fuzzySearchVal = fuzzySearchVal.toLowerCase();
				}

				// For each row call the fuzzy search function to get result
				api.rows().iterator(
					'row',
					function (settings: any, rowIdx) {
						settings.aoData[rowIdx]._fuzzySearch = fuzzySearch(
							fuzzySearchVal,
							settings.aoData[rowIdx]._aFilterData,
							initialFuzzy
						);
					},
					false
				);

				fromPlugin = true;
				// Empty the datatables search and replace it with our own
				api.search('');
				input.val(fuzzySearchVal);
				fromPlugin = false;
			}

			fromPlugin = true;
			api.draw();
			fromPlugin = false;
		}
	};

	DataTable.Api.register(
		'search.fuzzy()',
		function (this: Api, value: string) {
			if (value === undefined) {
				return fuzzySearchVal;
			}
			else {
				fuzzySearchVal = value.toLowerCase();
				searchVal = api.search() as string;
				input.val(fuzzySearchVal);

				// For each row call the fuzzy search function to get result
				api.rows().iterator(
					'row',
					function (settings: any, rowIdx) {
						settings.aoData[rowIdx]._fuzzySearch = fuzzySearch(
							fuzzySearchVal,
							settings.aoData[rowIdx]._aFilterData,
							initialFuzzy
						);
					},
					false
				);
				// triggerSearchFunction({key: 'Enter'});
				return this;
			}
		}
	);

	input.off();

	// Set listeners to occur on toggle and typing
	if (toggle) {
		// Actions for the toggle button
		toggle
			.on('click', toggleFuzzy)
			.on('mouseenter', function () {
				tooltip.insertAfter(toggle).on('mouseleave', removeToolTip);
				tooltip.css('left', input.position().left + 3 + 'px');
				exact.on('click', event => highlightButton(exact, event));
				fuzzy.on('click', event => highlightButton(fuzzy, event));
			})
			.on('mouseleave', removeToolTip);

		// Actions for the input element
		input
			.on('mouseenter', function () {
				tooltip.insertAfter(toggle).on('mouseleave', removeToolTip);
				tooltip.css('left', input.position().left + 3 + 'px');
				exact.on('click', event => highlightButton(exact, event));
				fuzzy.on('click', event => highlightButton(fuzzy, event));
			})
			.on('mouseleave', function () {
				var inToolTip = false;

				tooltip.on('mouseenter', () => (inToolTip = true));
				toggle.on('mouseenter', () => (inToolTip = true));

				setTimeout(function () {
					if (!inToolTip) {
						removeToolTip();
					}
				}, 250);
			});

		var state = api.state.loaded();

		api.on('stateSaveParams', function (e, settings, data) {
			data._fuzzySearch = {
				active: toggle.attr('blurred'),
				val: input.val()
			};
		});

		if (state !== null && state._fuzzySearch !== undefined) {
			input.val(state._fuzzySearch.val);

			if (
				state._fuzzySearch.active === 'true' &&
				state.start &&
				state.length
			) {
				toggle.trigger('click');
				api.page(state.start / state.length).draw('page');
			}
		}
	}

	api.on('search', function () {
		if (!fromPlugin) {
			input.val(
				api.search() !== searchVal
					? (api.search() as string)
					: fuzzySearchVal
			);
		}
	});

	// Always add this event no matter if toggling is enabled
	input.on('input keydown', triggerSearchFunction);
});
