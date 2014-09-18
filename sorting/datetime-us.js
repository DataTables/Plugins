/**
 * DataTables plug-in to handle U.S.-style dates. Requires month day year.  
 * Time is optional and can be in 12 or 24 hour formats. 
 * Properly parses mm/m, dd/d and yyyy/yy.
 *
 * Examples of readable formats: 
 * * 6/1/14 1:4 pm
 * * 06/01/2014 01:04 PM
 * * 6/1/2014 1:04 Pm
 * * 06/01/2014 13:04
 * * 06/01/2014

 * Based on original datetime-us plugin by Kevin Gravier.
 *
 *  @name Flexible US Datetime
 *  @summary Sort dates and times in US mm/dd/yyyy with optional time.
 *  @author Mark Stewart
 *
 *  @example
 *    $('#example').dataTable( {
 *       columnDefs: [
 *         { type: 'datetime-us', targets: 0 }
 *       ]
 *    } );
 */
 
jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "datetime-us-pre": function ( a ) {
        // Set optional items to zero
        var hour = 0,
            min = 0,
            ap = 0;
            
        // Execute match. Requires month, day, year. Can be mm/dd or m/d. Can be yy or yyyy
        // Time is optional. am/pm is optional
        var b = a.match(/(\d{1,2})\/(\d{1,2})\/(\d{2,4})( (\d{1,2}):(\d{1,2}))? ?(am|pm|AM|PM|Am|Pm)?/),
            month = b[1],
            day = b[2],
            year = b[3];
        // If time exists then output hours and minutes
        if (b[4] != undefined) {
            hour = b[5];
            min = b[6];
        }
        // if using am/pm then change the hour to 24 hour format for sorting
        if (b[7] != undefined) {
            ap = b[7].toLowerCase();
            if(hour == '12') hour = '0';
            if(ap == 'pm') hour = parseInt(hour, 10)+12;
        }
        // for 2 digit years, changes to 20__ if less than 70
        if(year.length == 2){
            if(parseInt(year, 10) < 70) year = '20'+year;
            else year = '19'+year;
        }
        // Converts single digits
        if(month.length == 1) month = '0'+month;
        if(day.length == 1) day = '0'+day;
        if(hour.length == 1) hour = '0'+hour;
        if(min.length == 1) min = '0'+min;

        var tt = year+month+day+hour+min;
        return tt;   
  },
  "datetime-us-asc": function ( a, b ) {
    return a - b;
  },
  "datetime-us-desc": function ( a, b ) {
    return b - a;
  }
});

jQuery.fn.dataTableExt.aTypes.unshift(
    function (sData) {
        if (sData !== null && sData.match(/(\d{1,2})\/(\d{1,2})\/(\d{2,4})( (\d{1,2}):(\d{1,2}))? ?(am|pm|AM|PM|Am|Pm)?/)) {

            return 'datetime-us';
        }
        return null;
    }
);
