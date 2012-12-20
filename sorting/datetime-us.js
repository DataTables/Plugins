/*
 * Adds a new sorting option to dataTables called <code>datetime-us</code>. Also
 * includes a type detection plug-in. Matches and sorts date / time strings in
 * the format: <code>(m)m/(d)d/(yy)yy (h)h/m(m) (am|pm)</code>. For example:
 *   <ul>
 *      <li>1/1/13 1:4 pm</li>
 *      <li>01/01/2013 01:04 PM</li>
 *      <li>1/1/2013 1:04 Pm</li>
 *   </ul>
 *
 *  @name Date / time - US
 *  @anchor datetime_us
 *  @author <a href="http://mrkmg.com/">Kevin Gravier</a>
*/ 
jQuery.extend( jQuery.fn.dataTableExt.oSort, {
   "datetime-us-pre": function ( a ) {
       var b = a.match(/(\d{1,2})\/(\d{1,2})\/(\d{2,4}) (\d{1,2}):(\d{1,2}) (am|pm|AM|PM|Am|Pm)/),
           month = b[1],
           day = b[2],
           year = b[3],
           hour = b[4],
           min = b[5],
           ap = b[6];

       if(hour == '12') hour = '0';
       if(ap == 'pm') hour = parseInt(hour, 10)+12;

       if(year.length == 2){
           if(parseInt(year, 10)<70) year = '20'+year;
           else year = '19'+year;
       }
       if(month.length == 1) month = '0'+month;
       if(day.length == 1) day = '0'+day;
       if(hour.length == 1) hour = '0'+hour;
       if(min.length == 1) min = '0'+min;

       var tt = year+month+day+hour+min;
       return  tt;
   },
   "datetime-us-asc": function ( a, b ) {
       return a - b;
   },

   "datetime-us-desc": function ( a, b ) {
       return b - a;
   }
});

jQuery.fn.dataTableExt.aTypes.unshift(
   function ( sData )
   {
       if (sData !== null && sData.match(/\d{1,2}\/\d{1,2}\/\d{2,4} \d{1,2}:\d{1,2} (am|pm|AM|PM|Am|Pm)/))
       {

           return 'datetime-us';
       }
       return null;
   }
);
