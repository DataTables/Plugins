/**
 * Sort by priority through an enumerated list. In this case the words 'High',
 * 'Medium' and 'Low' are used and thus sorted in priority order. This works 
 * by converting the works to a numerical value and then sorting based on that
 * value.
 *  @name enum
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 */

(function() {

function priority( a ) {
    // Add / alter the switch statement below to match your enum list
    switch( a ) {
        case "High":   return 1;
        case "Medium": return 2;
        case "Low":    return 3;
        default:       return 4;
    }
}

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "enum-asc": function ( a, b ) {
        var x = priority( a );
        var y = priority( b );
         
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    },

    "enum-desc": function ( a, b ) {
        var x = priority( a );
        var y = priority( b );
         
        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
    }
} );

}());