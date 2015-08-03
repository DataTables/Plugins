/**
 * Sorts cells with empty values by placing them after cells with values
 * This helps when if you have column that may or may not have values
 * allowing items with values to appear first when sorting ascending
 * This was written to help with sorting items that were ranked, where
 *  items without a rank number were considered lower in rank
 *
 *  @name  Empty
 *  @summary Sort items without a value after items with a value
 *  @author Timothy Stewart
 *
 *  @example
 *    $('#example').dataTable( {
 *       columnDefs: [
 *         { type: 'empty', targets: 0 }
 *       ]
 *    } );
 */
    function emptySort(x, y) {
        // this is the value we will end up returning
        var retVal;

        // replace html spaces with empty, shouldn't happen but just in case
        x = x.replace('&nbsp;', '');
        y = y.replace('&nbsp;', '');

        // test if  a number, if so, set it
        if (parseInt(x)) {
            x = parseInt(x)
        }

        if (parseInt(y)) {
            y = parseInt(y)
        }

        // now we need to eval the x,y values and set the order
        // if blank they will appear last
        if (x == y) retVal = 0;
        else if (parseInt(x) && parseInt(y)) {
            if (x > y) retVal = 1;
            else retVal = -1;
        }
        else if (parseInt(x)) retVal = -1;
        else if (parseInt(y)) retVal = 1;
        else if (x > y) retVal = 1;
        else return -1;

        return retVal;
    }

    jQuery.extend(jQuery.fn.dataTableExt.oSort, {
        'empty-asc': function (a, b) {
            return emptySort(a, b);
        },

        'empty-desc': function (a, b) {
            return emptySort(b, a);
        }
    });