/**
 * When dealing with computer file sizes, it is common to append a post fix
 * such as KB, MB or GB to a string in order to easily denote the order of
 * magnitude of the file size. This plug-in allows sorting to take these
 * indicates of size into account. A counterpart type detection plug-in 
 * is also available.
 *  @name File size
 *  @author <i>anjibman</i>
 */

 jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "file-size-asc": function ( a, b ) {
        var x = a.substring(0,a.length - 2);
        var y = b.substring(0,b.length - 2);
            
        var x_unit = (a.substring(a.length - 2, a.length) == "MB" ? 
            1000 : (a.substring(a.length - 2, a.length) == "GB" ? 1000000 : 1));
        var y_unit = (b.substring(b.length - 2, b.length) == "MB" ? 
            1000 : (b.substring(b.length - 2, b.length) == "GB" ? 1000000 : 1));
         
        x = parseInt( x * x_unit );
        y = parseInt( y * y_unit );
         
        return ((x < y) ? -1 : ((x > y) ?  1 : 0));
    },

    "file-size-desc": function ( a, b ) {
        var x = a.substring(0,a.length - 2);
        var y = b.substring(0,b.length - 2);
        
        var x_unit = (a.substring(a.length - 2, a.length) == "MB" ? 
            1000 : (a.substring(a.length - 2, a.length) == "GB" ? 1000000 : 1));
        var y_unit = (b.substring(b.length - 2, b.length) == "MB" ? 
            1000 : (b.substring(b.length - 2, b.length) == "GB" ? 1000000 : 1));
        
        x = parseInt( x * x_unit);
        y = parseInt( y * y_unit);
        
        return ((x < y) ?  1 : ((x > y) ? -1 : 0));
    }
} );
