/**
 * Detect "file size" type columns automatically. Commonly used for computer
 * file sizes, this can allow sorting to take the order of magnitude indicated
 * by the label (GB etc) into account.
 *  @name File size
 *  @anchor file_size
 *  @author <i>anjibman</i>
 */

jQuery.fn.dataTableExt.aTypes.unshift(
	function ( sData )
	{
		var sValidChars = "0123456789";
		var Char;
 
		/* Check the numeric part */
		for ( i=0 ; i<(sData.length - 3) ; i++ )
		{
			Char = sData.charAt(i);
			if (sValidChars.indexOf(Char) == -1)
			{
				return null;
			}
		}
 
		/* Check for size unit KB, MB or GB */
		if ( sData.substring(sData.length - 2, sData.length) == "KB"
			|| sData.substring(sData.length - 2, sData.length) == "MB"
			|| sData.substring(sData.length - 2, sData.length) == "GB" )
		{
			return 'file-size';
		}
		return null;
	}
);
