/**
 * This plug-in will provide date sorting for the "dd/mm/YYY hh:ii:ss" 
 * formatting, which is common in France and other European countries. It can 
 * also be quickly adapted for other formatting as required. Furthermore, this 
 * date sorting plug-in allows for empty values in the column.
 *  @name Date (dd/mm/YYY hh:ii:ss) 
 *  @author <a href="http://coolforest.net/">Ronan Guilloux</a>
 */

 jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "date-euro-asc": function ( a, b ) {
        if ($.trim(a) != '') {
            var frDatea = $.trim(a).split(' ');
            var frTimea = frDatea[1].split(':');
            var frDatea2 = frDatea[0].split('/');
            var x = (frDatea2[2] + frDatea2[1] + frDatea2[0] + frTimea[0] + frTimea[1] + frTimea[2]) * 1;
        } else {
            var x = 10000000000000; // = l'an 1000 ...
        }
     
        if ($.trim(b) != '') {
            var frDateb = $.trim(b).split(' ');
            var frTimeb = frDateb[1].split(':');
            frDateb = frDateb[0].split('/');
            var y = (frDateb[2] + frDateb[1] + frDateb[0] + frTimeb[0] + frTimeb[1] + frTimeb[2]) * 1;                      
        } else {
            var y = 10000000000000;                     
        }
        var z = ((x < y) ? -1 : ((x > y) ? 1 : 0));
        return z;
    },

    "date-euro-desc": function ( a, b ) {
        if ($.trim(a) != '') {
            var frDatea = $.trim(a).split(' ');
            var frTimea = frDatea[1].split(':');
            var frDatea2 = frDatea[0].split('/');
            var x = (frDatea2[2] + frDatea2[1] + frDatea2[0] + frTimea[0] + frTimea[1] + frTimea[2]) * 1;                       
        } else {
            var x = 10000000000000;                     
        }
     
        if ($.trim(b) != '') {
            var frDateb = $.trim(b).split(' ');
            var frTimeb = frDateb[1].split(':');
            frDateb = frDateb[0].split('/');
            var y = (frDateb[2] + frDateb[1] + frDateb[0] + frTimeb[0] + frTimeb[1] + frTimeb[2]) * 1;                      
        } else {
            var y = 10000000000000;                     
        }                   
        var z = ((x < y) ? 1 : ((x > y) ? -1 : 0));                   
        return z;
    }
} );
