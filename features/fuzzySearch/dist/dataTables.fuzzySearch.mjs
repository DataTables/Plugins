/*!
 * Fuzzy Search 3.0.0-beta.2 for DataTables
 * SpryMedia Ltd - datatables.net/license MIT license
 *
 * Damerau-Levenshtein function courtesy of https://github.com/tad-lispy/node-damerau-levenshtein
 * BSD 2-Clause License
 * Copyright (c) 2018, Tadeusz Łazurski
 * All rights reserved.
 */

import DataTable, { Dom, util } from 'datatables.net';

DataTable.ext.search.push(function (settings, data, dataIndex) {
    let initial = settings.init.fuzzySearch;
    let row = settings.data[dataIndex];
    if (!initial) {
        return true;
    }
    if (row) {
        // If fuzzy searching has not been implemented then pass all rows for this function
        if (row._fuzzySearch !== undefined) {
            // Read score to set the cell content and sort data
            var score = row._fuzzySearch.score;
            if (util.is.plainObject(initial) &&
                initial.rankColumn !== undefined) {
                row.cells[initial.rankColumn].innerHTML = score;
                // Remove '%' from the end of the score so can sort on a number
                if (row.orderCache) {
                    row.orderCache[initial.rankColumn] = +score.substring(0, score.length - 1);
                }
            }
            // Return the value for the pass as decided by the fuzzySearch function
            return row._fuzzySearch.pass;
        }
        else if (util.is.plainObject(initial) &&
            initial.rankColumn !== undefined) {
            row.cells[initial.rankColumn].innerHTML = '';
            if (row.orderCache) {
                row.orderCache[initial.rankColumn] = '';
            }
        }
    }
    return true;
});
Dom.s(document).on('init.dt', function (e, settings) {
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
    var tooltip, exact, fuzzy, label;
    if (initialFuzzy === true || initialFuzzy.toggleSmart) {
        toggle.insertAfter(input);
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
    function toggleFuzzy(event) {
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
    function highlightButton(toHighlight, event) {
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
    var triggerSearchFunction = function (event) {
        // If the search is only to be triggered on return wait for that
        if ((event.type === 'input' &&
            (initial.search === undefined ||
                !initial.search.return)) ||
            event.key === 'Enter' ||
            event.type === 'click') {
            // If the toggle is set and isn't checkd then perform a normal search
            if (toggle && !toggle.attr('blurred')) {
                api.rows().iterator('row', function (settings, rowIdx) {
                    settings.data[rowIdx]._fuzzySearch = undefined;
                }, false);
                searchVal = input.val();
                fuzzySearchVal = searchVal;
                fromPlugin = true;
                api.search(searchVal);
                fromPlugin = false;
                searchVal = '';
            }
            // Otherwise perform a fuzzy search
            else {
                // Get the value from the input element and convert to lower case
                fuzzySearchVal = input.val();
                searchVal = '';
                if (fuzzySearchVal !== undefined &&
                    fuzzySearchVal.length !== 0) {
                    fuzzySearchVal = fuzzySearchVal.toLowerCase();
                }
                // For each row call the fuzzy search function to get result
                api.rows().iterator('row', function (settings, rowIdx) {
                    var _a;
                    settings.data[rowIdx]._fuzzySearch = fuzzySearch(fuzzySearchVal, (_a = settings.data[rowIdx]) === null || _a === void 0 ? void 0 : _a.searchCellCache, initialFuzzy);
                }, false);
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
    DataTable.Api.register('search.fuzzy()', function (value) {
        if (value === undefined) {
            return fuzzySearchVal;
        }
        else {
            fuzzySearchVal = value.toLowerCase();
            searchVal = api.search();
            input.val(fuzzySearchVal);
            // For each row call the fuzzy search function to get result
            api.rows().iterator('row', function (settings, rowIdx) {
                var _a;
                settings.data[rowIdx]._fuzzySearch = fuzzySearch(fuzzySearchVal, (_a = settings.data[rowIdx]) === null || _a === void 0 ? void 0 : _a.searchCellCache, initialFuzzy);
            }, false);
            // triggerSearchFunction({key: 'Enter'});
            return this;
        }
    });
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
            if (state._fuzzySearch.active === 'true' &&
                state.start &&
                state.length) {
                toggle.trigger('click');
                api.page(state.start / state.length).draw('page');
            }
        }
    }
    api.on('search', function () {
        if (!fromPlugin) {
            input.val(api.search() !== searchVal
                ? api.search()
                : fuzzySearchVal);
        }
    });
    // Always add this event no matter if toggling is enabled
    input.on('input keydown', triggerSearchFunction);
});
function levenshtein(__this, that, limit) {
    var thisLength = __this.length, thatLength = that.length, matrix = [];
    // If the limit is not defined it will be calculate from this and that args.
    limit = (limit || (thatLength > thisLength ? thatLength : thisLength)) + 1;
    for (var i = 0; i < limit; i++) {
        matrix[i] = [i];
        matrix[i].length = limit;
    }
    for (i = 0; i < limit; i++) {
        matrix[0][i] = i;
    }
    if (Math.abs(thisLength - thatLength) > (limit || 100)) {
        return prepare(limit || 100);
    }
    if (thisLength === 0) {
        return prepare(thatLength);
    }
    if (thatLength === 0) {
        return prepare(thisLength);
    }
    // Calculate matrix.
    var j, this_i, that_j, cost, min, t;
    for (i = 1; i <= thisLength; ++i) {
        this_i = __this[i - 1];
        // Step 4
        for (j = 1; j <= thatLength; ++j) {
            // Check the jagged ld total so far
            if (i === j && matrix[i][j] > 4)
                return prepare(thisLength);
            that_j = that[j - 1];
            cost = this_i === that_j ? 0 : 1; // Step 5
            // Calculate the minimum (much faster than Math.min(...)).
            min = matrix[i - 1][j] + 1; // Devarion.
            if ((t = matrix[i][j - 1] + 1) < min)
                min = t; // Insertion.
            if ((t = matrix[i - 1][j - 1] + cost) < min)
                min = t; // Substitution.
            // Update matrix.
            matrix[i][j] =
                i > 1 &&
                    j > 1 &&
                    this_i === that[j - 2] &&
                    __this[i - 2] === that_j &&
                    (t = matrix[i - 2][j - 2] + cost) < min
                    ? t
                    : min; // Transposition.
        }
    }
    return prepare(matrix[thisLength][thatLength]);
    function prepare(steps) {
        var length = Math.max(thisLength, thatLength);
        var relative = length === 0 ? 0 : steps / length;
        var similarity = 1 - relative;
        return {
            steps: steps,
            relative: relative,
            similarity: similarity
        };
    }
}
function fuzzySearch(searchVal, data, initial) {
    var x, y, i;
    // If no searchVal has been defined then return all rows.
    if (searchVal === undefined || searchVal.length === 0) {
        return {
            pass: true,
            score: ''
        };
    }
    var columns = initial.columns !== undefined ? initial.columns : null;
    var threshold = initial.threshold !== undefined ? initial.threshold : 0.5;
    // Split the searchVal into individual words.
    var splitSearch = searchVal.split(/ /g);
    // Array to keep scores in
    var highestCollated = [];
    // Remove any empty words or spaces
    for (x = 0; x < splitSearch.length; x++) {
        if (splitSearch[x].length === 0 || splitSearch[x] === ' ') {
            splitSearch.splice(x, 1);
            x--;
        }
        // Aside - Add to the score collection if not done so yet for this search word
        else if (highestCollated.length < splitSearch.length) {
            highestCollated.push({ pass: false, score: 0 });
        }
    }
    // Going to check each cell for potential matches
    for (i = 0; i < data.length; i++) {
        if (columns === null || columns.includes(i)) {
            // Convert all data points to lower case fo insensitive sorting
            data[i] = data[i].toLowerCase();
            // Split the data into individual words
            var splitData = data[i].split(/ /g);
            // Remove any empty words or spaces
            for (y = 0; y < splitData.length; y++) {
                if (splitData[y].length === 0 || splitData[y] === ' ') {
                    splitData.splice(y, 1);
                    x--;
                }
            }
            // Check each search term word
            for (x = 0; x < splitSearch.length; x++) {
                // Reset highest score
                var highest = {
                    pass: undefined,
                    score: 0
                };
                // Against each word in the cell
                for (y = 0; y < splitData.length; y++) {
                    // If this search Term word is the beginning of the word in the cell we want to pass this word
                    if (splitData[y].indexOf(splitSearch[x]) === 0) {
                        var newScore = splitSearch[x].length / splitData[y].length;
                        highest = {
                            pass: true,
                            score: highest.score < newScore
                                ? newScore
                                : highest.score
                        };
                    }
                    // Get the levenshtein similarity score for the two words
                    var steps = levenshtein(splitSearch[x], splitData[y]).similarity;
                    // If the levenshtein similarity score is better than a previous one for the search word then var's store it
                    if (steps > highest.score) {
                        highest.score = steps;
                    }
                }
                // If this cell has a higher scoring word than previously found to the search term in the row, store it
                if (highestCollated[x].score < highest.score || highest.pass) {
                    highestCollated[x] = {
                        pass: highest.pass || highestCollated[x].pass
                            ? true
                            : highest.score > threshold,
                        score: highest.score
                    };
                }
            }
        }
    }
    // Check that all of the search words have passed
    for (i = 0; i < highestCollated.length; i++) {
        if (!highestCollated[i].pass) {
            return {
                pass: false,
                score: Math.round((highestCollated.reduce((a, b) => a + b.score, 0) /
                    highestCollated.length) *
                    100) + '%'
            };
        }
    }
    // If we get to here, all scores greater than 0.5 so display the row
    return {
        pass: true,
        score: Math.round((highestCollated.reduce((a, b) => a + b.score, 0) /
            highestCollated.length) *
            100) + '%'
    };
}


export default DataTable;

