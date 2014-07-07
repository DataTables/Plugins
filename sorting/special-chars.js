jQuery.extend( jQuery.fn.dataTableExt.oSort, {
  "special-chars-pre": function ( a ) {
    return a.toLowerCase()
      .replace( /\n/g, ' ' )
      .replace( /\u00e1/g, 'a' )
      .replace( /\u00e9/g, 'e' )
      .replace( /\u00ed/g, 'i' )
      .replace( /\u00f3/g, 'o' )
      .replace( /\u00fa/g, 'u' )
      .replace( /\u00ea/g, 'e' )
      .replace( /\u00ee/g, 'i' )
      .replace( /\u00f4/g, 'o' )
      .replace( /\u00e8/g, 'e' )
      .replace( /\u00ef/g, 'i' )
      .replace( /\u00fc/g, 'u' );
  }
} );
