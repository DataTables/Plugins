/*! © SpryMedia Ltd - datatables.net/license - 3.1.4 */

(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['datatables.net'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		if (typeof window === 'undefined') {
			module.exports = function (root) {
				if (! root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}
				
				var DataTable = root.DataTable ?
					root.DataTable :
					require('datatables.net')(root);

				return factory(root, root.document, DataTable);
			};
		}
		else {
			var DataTable = window.DataTable ?
				window.DataTable :
				require('datatables.net');

			module.exports = factory(window, window.document, DataTable);
		}
	}
	else {
		// Browser
		factory(window, document, window.DataTable);
	}
}(function(window, document, DataTable) {
'use strict';


/**
 * Detect file size type columns automatically. Commonly used for computer
 * file sizes, this can allow sorting to take the order of magnitude indicated
 * by the label (GB etc) into account.
 *
 *  @name File size
 *  @summary Detect abbreviated file size data (8MB, 4KB, 3B, etc)
 *  @author Allan Jardine - datatables.net
 */
DataTable.ext.type.detect.unshift(function (data) {
    if (typeof data !== 'string') {
        return null;
    }
    var matches = data.match(/^(\d+(?:\.\d+)?)\s*([a-z]+)/i);
    var units = ['b', 'kb', 'mb', 'gb', 'tb', 'pb'];
    var is_file_size = matches && units.indexOf(matches[2].toLowerCase()) !== -1;
    return is_file_size ? 'file-size' : null;
});


return DataTable;
}));
