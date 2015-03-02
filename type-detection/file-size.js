/**
 * Detect "file size" type columns automatically. Commonly used for computer
 * file sizes, this can allow sorting to take the order of magnitude indicated
 * by the label (GB, MB, Unlimited etc) into account.
 *
 *  @name File size
 *  @summary Detect abbreviated file size data (8 MB, 4KB, 10TB, Unlimited, No Limit etc)
 *  @author Ilia Rostovtsev (https://rostovtsev.ru)
 */

$.fn.dataTable.ext.type.detect.unshift(
	function ( sData )
	{
		/* Check for size unit KB, MB, GB, TB */
		if ( /((\d+(\s+)|\d+\.\d+(\s+)))(TB|GB|MB|KB|Byte|Bytes|ГБ|МБ|КБ|Байт)|(Unlimited|Ubegrenset|Nielimitowane|Ilimitado|无限制|No Limit)/i.test(sData) )
		{
			return 'file-size';
		} else 
		{
			return null;
		}
	}
);
