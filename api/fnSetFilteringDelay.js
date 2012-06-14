/**
 * Enables filtration delay for keeping the browser more responsive while 
 * searching for a longer keyword.
 *  @name fnSetFilteringDelay
 *  @anchor fnSetFilteringDelay
 *  @author <a href="http://www.zygimantas.com/">Zygimantas Berziunas</a>, <a href="http://www.sprymedia.co.uk/">Allan Jardine</a> and <i>vex</i>
 *
 *  @example
 *    $(document).ready(function() {
 *        $('.dataTable').dataTable().fnSetFilteringDelay();
 *    } );
 */

jQuery.fn.dataTableExt.oApi.fnSetFilteringDelay = function ( oSettings, iDelay ) {
	var _that = this;

	if ( iDelay === undefined ) {
		iDelay = 250;
	}
	 
	this.each( function ( i ) {
		$.fn.dataTableExt.iApiIndex = i;
		var
			$this = this, 
			oTimerId = null, 
			sPreviousSearch = null,
			anControl = $( 'input', _that.fnSettings().aanFeatures.f );
		 
			anControl.unbind( 'keyup' ).bind( 'keyup', function() {
			var $$this = $this;
 
			if (sPreviousSearch === null || sPreviousSearch != anControl.val()) {
				window.clearTimeout(oTimerId);
				sPreviousSearch = anControl.val();  
				oTimerId = window.setTimeout(function() {
					$.fn.dataTableExt.iApiIndex = i;
					_that.fnFilter( anControl.val() );
				}, iDelay);
			}
		});
		 
		return this;
	} );
	return this;
};
