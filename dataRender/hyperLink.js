/*! © Lokesh Babu - datatables.net/license - 3.0.0-beta.2 */

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
 * This data rendering helper method can be useful when a hyperLink with custom
 * anchorText has to rendered. The data for the column is still fully searchable and sortable, based on the hyperLink value,
 * and sortable, based on the hyperLink value, but during display in webpage is rendered with custom placeholder
 *
 * It accepts four parameters:
 *
 * 1. 'anchorText' -  type string - (optional - default `Click Here`)  - The custom placeholder to display
 * 2. 'location' -  type string - (optional - default `newTab`)
 * 		takes two values 'newTab' and 'popup'
 * 3. 'width' -  type integer - (optional - default `600`)
 *		The custom width of popup to display.
 *		Value is utilised on when 'location' is given as 'popup'.
 * 4. 'height' -  type integer - (optional - default `400`)
 *		The custom height of popup to display.
 *		Value is utilised on when 'location' is given as 'popup'.
 *
 *  @name HyperLink
 *  @summary Displays url data in hyperLink with custom placeholder
 *  @author Lokesh Babu
 *  @requires DataTables 3+
 *  @license MIT
 *
 *
 *  @example
 *    // Display the hyperlink with 'Click Here', which open hyperlink in new Tab or new Window based on Browser setting
 *    new DataTable('#myTable', {
 *      columnDefs: [ {
 *        targets: 1,
 *        render: DataTable.render.hyperLink()
 *      } ]
 *    } );
 *
 *  @example
 *    // Display the hyperlink with 'Download', which open hyperlink in new Tab or new Window based on Browser setting
 *    new DataTable('#myTable', {
 *      columnDefs: [ {
 *        targets: 2,
 *        render: DataTable.render.hyperLink( 'Download' )
 *      } ]
 *    } );
 *
 *  @example
 *    // Display the hyperlink with 'Download', which open hyperlink in popup
 *    // with size 600as width and 400 as height
 *    new DataTable('#myTable', {
 *      columnDefs: [ {
 *        targets: 2,
 *        render: DataTable.render.hyperLink( 'Download', 'popup' )
 *      } ]
 *    } );
 *
 *  @example
 *    // Display the hyperlink with 'Download', which open hyperlink in popup
 *    // with size 1000 width and 500 as height
 *    new DataTable('#myTable', {
 *      columnDefs: [ {
 *        targets: 2,
 *        render: DataTable.render.hyperLink( 'Download', 'popup' , 1000, 500)
 *      } ]
 *    } );
 */
DataTable.render.hyperLink = function (anchorText, location, widthIn, heightIn) {
    var validateAndReturnDefaultIfFailed = function (item, defaultValue) {
        if (typeof item === 'number') {
            return item;
        }
        if (typeof item === 'string') {
            return parseInt(item) ? item : defaultValue;
        }
        return defaultValue;
    };
    var anchorText = anchorText || 'Click Here';
    var location = location || 'newTab';
    var width = validateAndReturnDefaultIfFailed(widthIn, 600);
    var height = validateAndReturnDefaultIfFailed(heightIn, 400);
    return function (data, type, row) {
        // restriction only for table display rendering
        if (type !== 'display') {
            return data;
        }
        var url = data;
        try {
            url = new URL(data);
            switch (location) {
                case 'newTab':
                    return ('<a title="' +
                        url +
                        '" href="' +
                        url +
                        '" target="_blank">' +
                        anchorText +
                        '</a>');
                case 'popup':
                    return ('<a title="' +
                        url +
                        '" href="' +
                        url +
                        '" target="popup" rel="noopener noreferrer" onclick="window.open(\'' +
                        url +
                        "', '" +
                        anchorText +
                        "', 'width=" +
                        width +
                        ',height=' +
                        height +
                        '\'); return false;">' +
                        anchorText +
                        '</a>');
                default:
                    return ('<a title="' +
                        url +
                        '" href="' +
                        url +
                        '" target="_blank">' +
                        anchorText +
                        '</a>');
            }
        }
        catch (e) {
            return url;
        }
    };
};


return DataTable;
}));
