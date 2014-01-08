/**
 * Jump to data
 *
 *  @name page.JumpToData()
 *  @summary 
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 *  @requires DataTables 1.10+
 *
 *  @example
 *    table.page.jumpToData( 0, "Allan Jardine" );
 */

jQuery.fn.dataTable.Api.register( 'page.jumpToData()', function ( column, data ) {
	var pos = this.column(column, {order:'current'}).data().indexOf( data );

	if ( pos >= 0 ) {
		var page = Math.floor( pos / this.page.info().length );
		this.page( page ).draw( false );
	}
} );