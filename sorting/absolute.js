/*! © SpryMedia Ltd - datatables.net/license - 3.0.0-beta.2 */

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
 * When sorting a DataTable you might find that you want to keep a specific item
 * at the top or bottom of the table. For example when sorting a column of
 * numbers, if a value is `null` or `N/A` you might want to keep it at the
 * bottom of the table, regardless of if ascending or descending sorting is
 * applied. This plug-in provides that ability.
 *
 * You must call the `DataTable.absoluteOrder` with information about the
 * value(s) you wish to make absolute in the sorting order and store the
 * returned value, assigning it to the `columns.type` option for the column you
 * wish this sorting to be applied to.
 *
 * For number based columns a `DataTable.absoluteOrderNumber` function is also
 * available.
 *
 * @name Absolute sorting
 * @summary Keep one or more items at the top and/or bottom of a table when
 * sorting
 * @author SpryMedia Ltd
 * @depends DataTables 3+
 *
 * @example
 *    var namesType = DataTable.absoluteOrder( [
 *      { value: '', position: 'top' }
 *    ] );
 *
 *    var numbersType = DataTable.absoluteOrderNumber( [
 *      { value: 'N/A', position: 'bottom' }
 *    ] );
 *
 *    new DataTable('#example', {
 *      columnDefs: [
 *        { type: namesType, targets: 0 },
 *        { type: numbersType, targets: 1 }
 *      ]
 *    } );
 */
// Unique value allowing multiple absolute ordering use cases on a single page.
var _unique = 0;
// Function to encapsulate code that is common to both the string and number
// ordering plug-ins.
var _setup = function (values) {
    if (!Array.isArray(values)) {
        values = [values];
    }
    var o = {
        name: 'absoluteOrder' + _unique++,
        alwaysTop: {},
        alwaysBottom: {},
        asc: function (a, b, isNumber) { },
        desc: function (a, b, isNumber) { }
    };
    // In order to provide performance, the symbols that are to be looked for
    // are stored as parameter keys in an object, allowing O(1) lookup, rather
    // than O(n) if it were in an array.
    for (var i = 0, ien = values.length; i < ien; i++) {
        var conf = values[i];
        if (typeof conf === 'string') {
            o.alwaysTop[conf] = true;
        }
        else if (conf.position === undefined || conf.position === 'top') {
            o.alwaysTop[conf.value] = true;
        }
        else {
            o.alwaysBottom[conf.value] = true;
        }
    }
    // Ascending ordering method
    o.asc = function (a, b, isNumber) {
        if (o.alwaysTop[a] && o.alwaysTop[b]) {
            return 0;
        }
        else if (o.alwaysBottom[a] && o.alwaysBottom[b]) {
            return 0;
        }
        else if (o.alwaysTop[a] || o.alwaysBottom[b]) {
            return -1;
        }
        else if (o.alwaysBottom[a] || o.alwaysTop[b]) {
            return 1;
        }
        if (isNumber) {
            // Cast as a number if required
            if (typeof a === 'string') {
                a = a.replace(/[^\d\-\.]/g, '') * 1;
            }
            if (typeof b === 'string') {
                b = b.replace(/[^\d\-\.]/g, '') * 1;
            }
        }
        return a < b ? -1 : a > b ? 1 : 0;
    };
    // Descending ordering method
    o.desc = function (a, b, isNumber) {
        if (o.alwaysTop[a] && o.alwaysTop[b]) {
            return 0;
        }
        else if (o.alwaysBottom[a] && o.alwaysBottom[b]) {
            return 0;
        }
        else if (o.alwaysTop[a] || o.alwaysBottom[b]) {
            return -1;
        }
        else if (o.alwaysBottom[a] || o.alwaysTop[b]) {
            return 1;
        }
        if (isNumber) {
            if (typeof a === 'string') {
                a = a.replace(/[^\d\-\.]/g, '') * 1;
            }
            if (typeof b === 'string') {
                b = b.replace(/[^\d\-\.]/g, '') * 1;
            }
        }
        return a < b ? 1 : a > b ? -1 : 0;
    };
    return o;
};
// String based ordering
DataTable.absoluteOrder = function (values) {
    var conf = _setup(values);
    DataTable.ext.type.order[conf.name + '-asc'] = conf.asc;
    DataTable.ext.type.order[conf.name + '-desc'] = conf.desc;
    // Return the name of the sorting plug-in that was created so it can be used
    // with the `columns.type` parameter. There is no auto-detection here.
    return conf.name;
};
// Number based ordering - strips out everything but the number information
DataTable.absoluteOrderNumber = function (values) {
    var conf = _setup(values);
    DataTable.ext.type.order[conf.name + '-asc'] = function (a, b) {
        return conf.asc(a, b, true);
    };
    DataTable.ext.type.order[conf.name + '-desc'] = function (a, b) {
        return conf.desc(a, b, true);
    };
    return conf.name;
};


return DataTable;
}));
