/**
 * When search a table with accented characters, it can be frustrating to have
 * an input such as _Zurich_ not match _Zürich_ in the table (`u !== ü`). This
 * type based search plug-in replaces the built-in string formatter in
 * DataTables with a function that will remove replace the accented characters
 * with their unaccented counterparts for fast and easy filtering.
 *
 * Note that with the accented characters being replaced, a search input using
 * accented characters will no longer match. The second example below shows
 * how the function can be used to remove accents from the search input as well,
 * to mitigate this problem.
 *
 *  @summary Replace accented characters with unaccented counterparts
 *  @name Accent neutralise
 *  @author Allan Jardine
 *
 *  @example
 *    $(document).ready(function() {
 *        $('#example').dataTable();
 *    } );
 *
 *  @example
 *    $(document).ready(function() {
 *        var table = $('#example').dataTable();
 *
 *        // Remove accented character from search input as well
 *        $('#myInput').keyup( function () {
 *          table
 *            .search(
 *              jQuery.fn.DataTable.ext.type.search.string( this.value )
 *            )
 *            .draw()
 *        } );
 *    } );
 */

jQuery.fn.DataTable.ext.type.search.string = function ( data ) {
    return ! data ?
        '' :
        typeof data === 'string' ?
            data
                .replace( /\n/g, " " )
                .replace( /έ/g, 'ε')
                .replace( /ύ/g, 'υ')
                .replace( /ό/g, 'ο')
                .replace( /ώ/g, 'ω')
                .replace( /ά/g, 'α')
                .replace( /ί/g, 'ι')
                .replace( /ή/g, 'η')
				.replace( /[äæǽ]/g, 'ae' )
				.replace( /[öœ]/g, 'oe' )
				.replace( /[ü]/g, 'ue' )
				.replace( /[Ä]/g, 'Ae' )
				.replace( /[Ü]/g, 'Ue' )
				.replace( /[Ö]/g, 'Oe' )
				.replace( /[ÀÁÂÃÄÅǺĀĂĄǍ]/g, 'A' )
				.replace( /[àáâãåǻāăąǎª]/g, 'a' )
				.replace( /[ÇĆĈĊČ]/g, 'C' )
				.replace( /[çćĉċč]/g, 'c' )
				.replace( /[ÐĎĐ]/g, 'D' )
				.replace( /[ðďđ]/g, 'd' )
				.replace( /[ÈÉÊËĒĔĖĘĚ]/g, 'E' )
				.replace( /[èéêëēĕėęě]/g, 'e' )
				.replace( /[ĜĞĠĢ]/g, 'G' )
				.replace( /[ĝğġģ]/g, 'g' )
				.replace( /[ĤĦ]/g, 'H' )
				.replace( /[ĥħ]/g, 'h' )
				.replace( /[ÌÍÎÏĨĪĬǏĮİ]/g, 'I' )
				.replace( /[ìíîïĩīĭǐįı]/g, 'i' )
				.replace( /[Ĵ]/g, 'J' )
				.replace( /[ĵ]/g, 'j' )
				.replace( /[Ķ]/g, 'K' )
				.replace( /[ķ]/g, 'k' )
				.replace( /[ĹĻĽĿŁ]/g, 'L' )
				.replace( /[ĺļľŀł]/g, 'l' )
				.replace( /[ÑŃŅŇ]/g, 'N' )
				.replace( /[ñńņňŉ]/g, 'n' )
				.replace( /[ÒÓÔÕŌŎǑŐƠØǾ]/g, 'O' )
				.replace( /[òóôõōŏǒőơøǿº]/g, 'o' )
				.replace( /[ŔŖŘ]/g, 'R' )
				.replace( /[ŕŗř]/g, 'r' )
				.replace( /[ŚŜŞŠ]/g, 'S' )
				.replace( /[śŝşšſ]/g, 's' )
				.replace( /[ŢŤŦ]/g, 'T' )
				.replace( /[ţťŧ]/g, 't' )
				.replace( /[ÙÚÛŨŪŬŮŰŲƯǓǕǗǙǛ]/g, 'U' )
				.replace( /[ùúûũūŭůűųưǔǖǘǚǜ]/g, 'u' )
				.replace( /[ÝŸŶ]/g, 'Y' )
				.replace( /[ýÿŷ]/g, 'y' )
				.replace( /[Ŵ]/g, 'W' )
				.replace( /[ŵ]/g, 'w' )
				.replace( /[ŹŻŽ]/g, 'Z' )
				.replace( /[źżž]/g, 'z' )
				.replace( /[ÆǼ]/g, 'AE' )
				.replace( /[ß]/g, 'ss' )
				.replace( /[Ĳ]/g, 'IJ' )
				.replace( /[ĳ]/g, 'ij' )
				.replace( /[Œ]/g, 'OE' )
				.replace( /[ƒ]/g, 'f' ) :
            data;
};
