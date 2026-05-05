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
 * Sort data by a defined enumerated (enum) list. The options for the values in
 * the enum are defined by passing the values in an array to the method
 * `DataTable.enum`. Type detection and sorting plug-ins for DataTables will
 * automatically be generated and added to the table.
 *
 * For full details and instructions please see [this DataTables blog
 * post](//datatables.net/blog/2016-06-16).
 *
 * @name enum
 * @summary Dynamically create enum sorting options for a DataTable
 * @author [SpryMedia Ltd](http://datatables.net)
 *
 *  @example
 *    DataTable.enum( [ 'High', 'Medium', 'Low' ] );
 *
 *    new DataTable('#myTable');
 */
var unique = 0;
var types = DataTable.ext.type;
// Using form DataTable.enum breaks at least YuiCompressor since enum is
// a reserved word in JavaScript
DataTable['enum'] = function (arr) {
    var name = 'enum-' + unique++;
    var lookup = window.Map ? new Map() : {};
    for (var i = 0, ien = arr.length; i < ien; i++) {
        lookup[arr[i]] = i;
    }
    // Add type detection
    types.detect.unshift(function (d) {
        return lookup[d] !== undefined ? name : null;
    });
    // Add sorting method
    types.order[name + '-pre'] = function (d) {
        return lookup[d];
    };
};


return DataTable;
}));
