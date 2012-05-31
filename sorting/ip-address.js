/**
 * Sorts a column containing IP addresses in typical dot notation. This can 
 * be most useful when using DataTables for a networking application, and 
 * reporting information containing IP address. Also has a matching type 
 * detection plug-in for automatic type detection.
 *  @name IP addresses 
 *  @author Brad Wasson
 */

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"ip-address-asc": function ( a, b ) {
		var m = a.split("."), x = "";
		var n = b.split("."), y = "";
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
		for(var i = 0; i < n.length; i++) {
			var item = n[i];
			if(item.length == 1) {
				y += "00" + item;
			} else if(item.length == 2) {
				y += "0" + item;
			} else {
				y += item;
			}
		}
		return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	},

	"ip-address-desc": function ( a, b ) {
		var m = a.split("."), x = "";
		var n = b.split("."), y = "";
		for(var i = 0; i < m.length; i++) {
			var item = m[i];
			if(item.length == 1) {
				x += "00" + item;
			} else if (item.length == 2) {
				x += "0" + item;
			} else {
				x += item;
			}
		}
		for(var i = 0; i < n.length; i++) {
			var item = n[i];
			if(item.length == 1) {
				y += "00" + item;
			} else if (item.length == 2) {
				y += "0" + item;
			} else {
				y += item;
			}
		}
		return ((x < y) ? 1 : ((x > y) ? -1 : 0));
	}
} );
