/**
 * This sorting plug-in allows for HTML tags with numeric data. With the 'html'
 * type it will strip the HTML and then sorts by strings, with this type it 
 * strips the HTML and then sorts by numbers. Note also that this sorting 
 * plug-in has an equivalent type detection plug-in which can make integration
 * easier.
 *  @name Numbers with HTML
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 */

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "num-html-asc": function ( a, b ) {
        var x = a.replace( /<.*?>/g, "" );
        var y = b.replace( /<.*?>/g, "" );
        x = parseFloat( x );
        y = parseFloat( y );

        return ((x < y) ? -1 : ((x > y) ?  1 : 0));
    },

    "num-html-desc": function ( a, b ) {
        var x = a.replace( /<.*?>/g, "" );
        var y = b.replace( /<.*?>/g, "" );
        x = parseFloat( x );
        y = parseFloat( y );

        return ((x < y) ?  1 : ((x > y) ? -1 : 0));
    }
} );
