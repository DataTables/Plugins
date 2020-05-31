/**
 * When sorting html links in a DataTable column you might 
 * want to sort it by link text not url.
 * 
 * For example "asc" by text not html link code:
 * 
 * <a href="http://3example.com">1 Link text</a>
 * <a href="http://2example.com">2 Link text</a>
 * <a href="http://1example.com">3 Link text</a>
 * 
 * @name linktext.js
 * @summary Sort link text not url.
 * @author Darek L https://github.com/dprojects
 * 
 * @example
 * 
 *      gTable = $('#demo-table').DataTable({
 *                  "orderClasses": true,
 *                  "responsive": true,
 *                  "columnDefs": [ { "type": "linktext", "targets": 1 } ],
 *                  "order": [1, "asc"]
 *      });
 * 
 * To change order later:
 * 
 *      gTable.order([1, 'desc']).draw();
 */

$.extend( $.fn.dataTableExt.oSort, {
    "linktext-pre": function ( a ) {
        return a.replace(/<[\s\S]*?>/g,"").replace(/\s/g,"").replace(".","").replace(",","");;
    }
});

/**
 * Version with 'asc' and 'desc, but 
 * later You have to use "desc" in this case not "dsc".
 */

/*
$.extend( $.fn.dataTableExt.oSort, {

    "linktext-asc": function ( a, b ) {
    
        let x = a.replace(/<[\s\S]*?>/g,"").replace(/\s/g,"").replace(".","").replace(",","");
        let y = b.replace(/<[\s\S]*?>/g,"").replace(/\s/g,"").replace(".","").replace(",","");

        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    },
    "linktext-desc": function ( a, b ) {
        
        let x = a.replace(/<[\s\S]*?>/g,"").replace(/\s/g,"").replace(".","").replace(",","");
        let y = b.replace(/<[\s\S]*?>/g,"").replace(/\s/g,"").replace(".","").replace(",","");
        
        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
    }
});
*/
