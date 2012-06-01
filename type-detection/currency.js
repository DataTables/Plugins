/**
 * This plug-in will add automatic detection for currency columns to 
 * DataTables. Note that only $ and £ symbols are detected with this code,
 * but it is trivial to add more or change the current ones. This is best used
 * in conjunction with the currency sorting plug-in.
 *  @name Currency
 *  @anchor currency
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 */

jQuery.fn.dataTableExt.aTypes.unshift(  
	function ( sData )  
	{  
		var sValidChars = "0123456789.-,";  
		var Char;  

		if ( typeof sData !== 'string' ) {
			return null;
		}
		   
		/* Check the numeric part */  
		for ( i=1 ; i<sData.length ; i++ )   
		{   
			Char = sData.charAt(i);   
			if (sValidChars.indexOf(Char) == -1)   
			{  
				return null;  
			}  
		}  
		   
		/* Check prefixed by currency */  
		if ( sData.charAt(0) == '$' || sData.charAt(0) == '£' )  
		{  
			return 'currency';  
		}  
		return null;  
	}  
);
