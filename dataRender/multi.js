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
 * This renderer doesn't format the output itself, but rather allows multiple
 * renderers to be easily called, which will render the content in sequence.
 *
 * Pass the renderers you wish to chain together as elements in an array to
 * this function. Important - you should pass the renderer as if you were
 * going to give it to the `render` property directly (i.e. if it is just a
 * simple function, don't execute it).
 *
 *  @name Multi
 *  @summary Use multiple renderers
 *  @author [Allan Jardine](http://datatables.net)
 *  @requires DataTables 3+
 *  @license MIT
 *
 *  @example
 *    // Convert dates using moment renderer and ensure they are HTML safe
 *    new DataTable( '#myTable', {
 *      columnDefs: [ {
 *        targets: 1,
 *        render: DataTable.render.multi( [
 *          DataTable.render.moment( 'Do MMM YYYY' ),
 *          DataTable.render.text(),
 *        ] )
 *      } ]
 *    } );
 */
DataTable.render.multi = function (renderArray) {
    return function (d, type, row, meta) {
        for (var r = 0; r < renderArray.length; r++) {
            if (typeof renderArray[r] === 'function') {
                d = renderArray[r](d, type, row, meta);
            }
            else if (typeof renderArray[r][type] === 'function') {
                d = renderArray[r][type](d, type, row, meta);
            }
            else if (typeof renderArray[r]._ === 'function') {
                d = renderArray[r]._(d, type, row, meta);
            }
        }
        return d;
    };
};


return DataTable;
}));
