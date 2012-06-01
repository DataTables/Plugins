/**
 * Sorts a column containing IP addresses in typical dot notation. This can 
 * be most useful when using DataTables for a networking application, and 
 * reporting information containing IP address. Also has a matching type 
 * detection plug-in for automatic type detection.
 *  @name IP addresses 
 *  @anchor ip_address
 *  @author Brad Wasson
 */

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"ip-address-pre": function ( a ) {
		var m = a.split("."), x = "";

		for(var i = 0; i < m.length; i++) {
			var item = m[i];
			if(item.length == 1) {
				x += "00" + item;
			} else if(item.length == 2) {
				x += "0" + item;
			} else {
				x += item;
			}
		}

		return x;
	},

	"ip-address-asc": function ( a, b ) {
		return ((a < b) ? -1 : ((a > b) ? 1 : 0));
	},

	"ip-address-desc": function ( a, b ) {
		return ((a < b) ? 1 : ((a > b) ? -1 : 0));
	}
} );
