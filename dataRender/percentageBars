/**
 * This data rendering helper method will convert percentage values into a bar.
 * Values can either have the % sign or not and decimals get rounded to the
 * given value. The percentage will have a max value of 100%.
 *
 * This function should be used with the `dt-init columns.render` configuration
 * option of DataTables.
 *
 * It accepts six parameters:
 *
 * 1. `-type string` square as default or round for a rounded bar.
 * 2. `-type string` A hex color for the text.
 * 3. `-type string` A hex color for the border.
 * 4. `-type string` A hex color for the bar.
 * 5. `-type string` A hex color for the background.
 * 6. `-type integer` A number used to round the value.
 *
 *  DEMO : http://codepen.io/RedJokingInn/pen/jrkZQN
 *
 *  @name percentBar
 *  @summary Display percentage value as a bar
 *  @author [Drijkoningen Dirk](RedJokingInn)
 *  @requires DataTables 1.10+
 *
 *  @returns {String} Html code for bar
 *
 *  @example
 *    // Display square bars with white text, medium blue border, light blue bar, dark blue background, rounded to integer.
 *    $('#example').DataTable( {
 *      columnDefs: [ {
 *        targets: 4,
 *        render: $.fn.dataTable.render.percentBar( 'square','#FFF', '#269ABC', '#31B0D5', '#286090', 0 )
 *      } ]
 *    } );
 *
 *  @example
 *    // Display round bars with yellow text, medium blue border, light blue bar, dark blue background, rounded to 1 decimal.
 *    $('#example').DataTable( {
 *      columnDefs: [ {
 *        targets: 2,
 *        render: $.fn.dataTable.render.percentBar( 'round','#FF0', '#269ABC', '#31B0D5', '#286090', 1 )
 *      } ]
 *    } );
 */

jQuery.fn.dataTable.render.percentBar = function(pShape, cText, cBorder, cBar, cBack, vRound) {
  //Bar templates
  var styleRule1 = 'max-width:100px;height:12px;margin:0 auto;';
  var styleRule2 = 'border:2px solid '+cBorder+';line-height:12px;font-size:14px;color:'+cText+';background:'+cBack+';';
  var styleRule3 = 'height:12px;line-height:12px;text-align:center;background-color:'+cBar+';padding:auto 6px;';
  //Square is default, make template round if pShape == round
  if(pShape=='round'){
    styleRule2 += 'border-radius:7px;';
    styleRule3 += 'border-top-left-radius:6px;border-bottom-left-radius:6px;';
  }

  return function(d, type, row) {
    //Remove % if found in the value
    //Round to the given parameter vRound
    s = parseFloat(d.replace(/\s%|%/g,'')).toFixed(vRound);
    //Not allowed to go over 100%
    if(s>100){s=100}
    
    // Order, search and type gets numbers
    if (type !== 'display') {
      return s;
    }
    if (typeof d !== 'number' && typeof d !== 'string') {
      return d;
    }
    
    //Return the code for the bar
    return '<div style="'+styleRule1+'"><div style="'+styleRule2+'"><div style="'+styleRule3+'width:'+s+ '%;">'+s+'%</div></div></div>';
  };
};
