/**
 * This plug-in will strip out non-numeric formatting characters such that a
 * formatted number (for example 1,000,000) can be detected automatically and
 * sorted numerically. Note that characters a-z are not automatically removed,
 * otherwise there is a risk of detecting columns as numeric which should not
 * be. Also note that the jQuery 1.7 method isNumeric is used, so jQuery 1.7
 * is required.
 *  @name Formatted numbers
 *  @anchor formatted_numbers
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 */

jQuery.fn.dataTableExt.aTypes.unshift(  
	function ( sData )
	{
		var deformatted = sData.replace(/[^\d\-\.\/a-zA-Z]/g,'');
		if ( $.isNumeric( deformatted ) || deformatted === "-" ) {
			return 'formatted-num';
		}
		return null;
	}
);
