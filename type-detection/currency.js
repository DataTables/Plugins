/**
 * This plug-in will add automatic detection for currency columns to 
 * DataTables. Note that only $ and £ symbols are detected with this code,
 * but it is trivial to add more or change the current ones. This is best used
 * in conjunction with the currency sorting plug-in.
 *  @name Currency
 *  @anchor currency
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>, Nuno Gomes
 */

(function(){

// Change this list to the valid characters you want
var validChars = "$£€c" + "0123456789" + ".-,'";

// Init the regex just once for speed - it is "closure locked"
var
	str = jQuery.fn.dataTableExt.oApi._fnEscapeRegex( validChars ),
	re = new RegExp('[^'+str+']');


jQuery.fn.dataTableExt.aTypes.unshift(
   function ( data )
	{
		if ( typeof data !== 'string' || re.test(data) ) {
			return null;
		}

		return 'currency';
	}
);

}());

