/**
 * This sorting plug-in for DataTables will correctly sort data in date time or date
 * format typically used in Brazil:
 * just date:`dd/MM/yyyy`.
 * date and time:`dd/MM/yyyy HH:mm`
 *
 * Please note that this plug-in is **deprecated*. The
 * [datetime](//datatables.net/blog/2014-12-18) plug-in provides enhanced
 * functionality and flexibility.
 *
 *  @name Date (dd/MM/yyyy) or date and time (dd/MM/yyyy HH:mm)
 *  @summary Sort date / time in the format `dd/MM/yyyy HH:mm` or `dd/MM/yyyy`.
 *  @author [Jordan C20](https://www.jordanc20.com.br)
 *  @deprecated
 *
 *  @example One
 *    $('#example').dataTable( {
 *       columnDefs: [
 *         { type: 'date-br', targets: 0 },
 *         { type: 'datetime-br', targets: 0 }
 *       ]
 *    } );
 * 
 *  @example Two
 *    $('#example').dataTable( {
 *       "columns": [
 *         { type: 'date-br' },
 *         { type: 'datetime-br' }
 *       ]
 *    } );
 */

jQuery.extend(jQuery.fn.dataTableExt.oSort, {
	"date-br-pre": function ( a ) {
		const brDatea = a.split('/');
		return (brDatea[2] + brDatea[1] + brDatea[0]) * 1;
	},


	"date-br-asc": function ( a, b ) {
		return ((a < b) ? -1 : ((a > b) ? 1 : 0));
	},


	"date-br-desc": function ( a, b ) {
		return ((a < b) ? 1 : ((a > b) ? -1 : 0));
	},


	"datetime-br-asc": function ( a, b ) {
		var x, y;

		if (jQuery.trim(a) !== '') {
			var brDatea = jQuery.trim(a).split(' ');
			var brTimea = brDatea[1].split(':');
			var brDatea2 = brDatea[0].split('/');
			if(typeof brTimea[2] != 'undefined') {
				x = (brDatea2[2] + brDatea2[1] + brDatea2[0] + brTimea[0] + brTimea[1] + brTimea[2]) * 1;
			} else {
				x = (brDatea2[2] + brDatea2[1] + brDatea2[0] + brTimea[0] + brTimea[1]) * 1;
			}
		} else {
			x = -Infinity;
		}


		if (jQuery.trim(b) !== '') {
			var brDateb = jQuery.trim(b).split(' ');
			var brTimeb = brDateb[1].split(':');
			brDateb = brDateb[0].split('/');
			if(typeof brTimeb[2] != 'undefined') {
				y = (brDateb[2] + brDateb[1] + brDateb[0] + brTimeb[0] + brTimeb[1] + brTimeb[2]) * 1;
			} else {
				y = (brDateb[2] + brDateb[1] + brDateb[0] + brTimeb[0] + brTimeb[1]) * 1;
			}
		} else {
			y = -Infinity;
		}
		return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	},

	"datetime-br-desc": function ( a, b ) {
		var x, y;

		if (jQuery.trim(a) !== '') {
			var brDatea = jQuery.trim(a).split(' ');
			var brTimea = brDatea[1].split(':');
			var brDatea2 = brDatea[0].split('/');
			if(typeof brTimea[2] != 'undefined') {
				x = (brDatea2[2] + brDatea2[1] + brDatea2[0] + brTimea[0] + brTimea[1] + brTimea[2]) * 1;
			} else {
				x = (brDatea2[2] + brDatea2[1] + brDatea2[0] + brTimea[0] + brTimea[1]) * 1;
			}
		} else {
			x = Infinity;
		}

		if (jQuery.trim(b) !== '') {
			var brDateb = jQuery.trim(b).split(' ');
			var brTimeb = brDateb[1].split(':');
			brDateb = brDateb[0].split('/');
			if(typeof brTimeb[2] != 'undefined') {
				y = (brDateb[2] + brDateb[1] + brDateb[0] + brTimeb[0] + brTimeb[1] + brTimeb[2]) * 1;
			} else {
				y = (brDateb[2] + brDateb[1] + brDateb[0] + brTimeb[0] + brTimeb[1]) * 1;
			}
		} else {
			y = -Infinity;
		}
		return ((x < y) ? 1 : ((x > y) ? -1 : 0));
	}
});