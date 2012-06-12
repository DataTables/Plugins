/**
 * This plug-in will add automatic detection for currency columns to 
 * DataTables. Note that only $ and £ symbols are detected with this code,
 * but it is trivial to add more or change the current ones. This is best used
 * in conjunction with the currency sorting plug-in.
 *  @name Currency
 *  @anchor currency
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>, Nuno Gomes
 */

jQuery.fn.dataTableExt.aTypes.unshift(
   function ( sData )
	{
		var sValidChars = "0123456789.-,";
		var sValidSymbols = "$£€";
		var c;
		var symbolMatch = false;

		if ( sValidSymbols.indexOf( sData.charAt(0) ) === -1 ) {
			return null;
		}

		for ( i=1 ; i<sData.length ; i++ ) {
			// check for valid chars
			c = sData.charAt(i);
			if (sValidChars.indexOf(c) === -1) {
				return null;
			}
		}

		// currency detected
		return 'currency';
	}
);
