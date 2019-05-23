/**
 * When searching a table with accented characters, it can be frustrating to have
 * an input such as _Zurich_ not match _Zürich_ in the table (`u !== ü`). This
 * type based search plug-in replaces the built-in string formatter in
 * DataTables with a function that will replace the accented characters
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

(function(){

function removeAccents ( data ) {
    return data
        .replace( /έ/g, 'ε' )
        .replace( /[ύϋΰ]/g, 'υ' )
        .replace( /ό/g, 'ο' )
        .replace( /ώ/g, 'ω' )
        .replace( /ά/g, 'α' )
        .replace( /[ίϊΐ]/g, 'ι' )
        .replace( /ή/g, 'η' )
        .replace( /\n/g, ' ' )
        .replace( /[ÀÁÂÃÄÅ]/g, 'A' )
        .replace( /[àáâãäå]/g, 'a' )
        .replace( /[ÈÉÊË]/g, 'E' )
        .replace( /[èéêë]/g, 'e' )
        .replace( /[ÌÍÎÏ]/g, 'i' )
        .replace( /[ìíîï]/g, 'i' )
        .replace( /[ÒÓÔÕÖ]/g, 'O' )
        .replace( /[òóôõö]/g, 'o' )
        .replace( /[ÙÚÛÜ]/g, 'U' )
        .replace( /[ùúûü]/g, 'u' )
        .replace( /Ñ/g, 'N' )
        .replace( /ñ/g, 'n' )
        .replace( /Ț/g, 'T' )
        .replace( /ț/g, 't' )
        .replace( /Ș/g, 'S' )
        .replace( /ș/g, 's' )
        .replace( /Ç/g, 'C' )
        .replace( /ç/g, 'c' );
    }

var searchType = jQuery.fn.DataTable.ext.type.search;

searchType.string = function ( data ) {
    return ! data ?
        '' :
        typeof data === 'string' ?
            removeAccents( data ) :
            data;
};

searchType.html = function ( data ) {
    return ! data ?
        '' :
        typeof data === 'string' ?
            removeAccents( data.replace( /<.*?>/g, '' ) ) :
            data;
};

}());