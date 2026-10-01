/**
 * This pagination plugin provide page number drop down with first, previous, next and last page navigation buttons
 *@author Manjul Srivastava
 *
 */

// Referenced from multiple existing pagination plugins and JPaginator
$.fn.dataTableExt.oApi.fnPagingInfo = function ( oSettings)
{
  if ( oSettings)
  {
    return {
    	
    	"iStart":         oSettings._iDisplayStart,
        "iEnd":           oSettings.fnDisplayEnd(),
        "iLength":        oSettings._iDisplayLength,
        "iTotal":         oSettings.fnRecordsTotal(),
        "iFilteredTotal": oSettings.fnRecordsDisplay(),
        "iPage":          oSettings._iDisplayLength === -1 ?
            0 : Math.ceil( oSettings._iDisplayStart / oSettings._iDisplayLength ),
        "iTotalPages":    oSettings._iDisplayLength === -1 ?
            0 : Math.ceil( oSettings.fnRecordsDisplay() / oSettings._iDisplayLength )
    }
  } 
    else {
    return {
      "iStart": 0,          
      "iEnd": 0,        
      "iLength": 0,
      "iTotal": 0,      
      "iFilteredTotal": 0,
      "iPage": 0,
      "iTotalPages": 0
    }
  }
};

$.fn.dataTableExt.oPagination.jPaginator = {
  'paginator': $('<span>').html ( '<nav id="m_left"></nav><nav id="o_left"></nav><div class="paginator_p_wrap"><div class="paginator_p_bloc"><!--<a class="paginator_p"></a>--></div></div><nav id="o_right"></nav><nav id="m_right"></nav><div class="paginator_slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><a class="ui-slider-handle ui-state-default ui-corner-all" href="#"></a></div>'),
  'fnInit': function ( oSettings, nPaging, fnCallbackDraw) {
    $(nPaging).prepend ( this.paginator);
    $(this.paginator).jPaginator ( {
      selectedPage: 1,
      nbPages: 1,
      nbVisible: 6,
      overBtnLeft: '#o_left',
      overBtnRight: '#o_right',
      maxBtnLeft: '#m_left',
      maxBtnRight: '#m_right',
      minSlidesForSlider: 2,
      onPageClicked: function ( a, num) {
        if ( num - 1 == Math.ceil ( oSettings._iDisplayStart / oSettings._iDisplayLength)) {
          return;
        }
        oSettings._iDisplayStart = ( num - 1) * oSettings._iDisplayLength;
        fnCallbackDraw ( oSettings);
      }
    }).addClass ( 'jPaginator');
  },
  'fnUpdate': function ( oSettings, fnCallbackDraw) {
    if ( ! oSettings.aanFeatures.p) {
      return;
    }
    var oPaging = oSettings.oInstance.fnPagingInfo ();
    $(this.paginator).trigger ( 'reset', { nbVisible: 6, selectedPage: oPaging.iPage + 1, nbPages: oPaging.iTotalPages});
  }
};

$.fn.dataTableExt.oPagination.multiNavPagation = {
     
 
    "fnInit": function (oSettings, nPaging, fnCallbackDraw) {
         
        var oPaging = oSettings.oInstance.fnPagingInfo();
 
        nFirst = $('<span/>', { 'class': 'paginate_button first' , text : "<<" });
        nPrevious = $('<span/>', { 'class': 'paginate_button previous' , text : "<" });
        nNext = $('<span/>', { 'class': 'paginate_button next' , text : ">" });
        nLast = $('<span/>', { 'class': 'paginate_button last' , text : ">>" });
        nPageTxt = $("<span />", { text: 'Page' });
        nPageNumBox = $('<input />', { type: 'text', val: 1, 'class': 'pageinate_input_box' });
        nPageOf = $('<span />', { text: '/' });
        nTotalPages = $('<span />', { class :  "paginate_total" , text : oPaging.iTotalPages });
 
        var nInput = document.createElement('select');
        var nPage = document.createElement('span');
        var nPage1 = document.createElement('span');
        var nPage2 = document.createElement('span');
        var nOf = document.createElement('span');
        nOf.className = "paginate_of";
        nPage.className = "paginate_page";
        if (oSettings.sTableId !== '') {
            nPaging.setAttribute('id', oSettings.sTableId + '_paginate');
        }
        nInput.style.display = "inline";
        nPage.innerHTML = "Page ";
         
        $(nPaging)
            .append(nFirst)
            .append(nPrevious)
            .append(nInput)
            .append(nOf)
            .append(nNext)
            .append(nLast);
        
        $(nInput).change(function (e) {
            window.scroll(0,0);
            if (this.value === "" || this.value.match(/[^0-9]/)) {
                return;
            }
            var iNewStart = oSettings._iDisplayLength * (this.value - 1);
            if (iNewStart > oSettings.fnRecordsDisplay()) {
                oSettings._iDisplayStart = (Math.ceil((oSettings.fnRecordsDisplay() - 1) / oSettings._iDisplayLength) - 1) * oSettings._iDisplayLength;
                fnCallbackDraw(oSettings);
                return;
            }
            oSettings._iDisplayStart = iNewStart;
            fnCallbackDraw(oSettings);
        });
        
        $('span', nPaging).bind('mousedown', function () {
            return false;
        });
        $('span', nPaging).bind('selectstart', function () {
            return false;
        });
        
        nFirst.click(function () {
            if( $(this).hasClass("disabled") )
                return;
            oSettings.oApi._fnPageChange(oSettings, "first");
            fnCallbackDraw(oSettings);
        }).bind('selectstart', function () { return false; });
   
        nPrevious.click(function () {
            if( $(this).hasClass("disabled") )
                return;
            oSettings.oApi._fnPageChange(oSettings, "previous");
            fnCallbackDraw(oSettings);
        }).bind('selectstart', function () { return false; });
   
        nNext.click(function () {
            if( $(this).hasClass("disabled") )
                return;
            oSettings.oApi._fnPageChange(oSettings, "next");
            fnCallbackDraw(oSettings);
        }).bind('selectstart', function () { return false; });
   
        nLast.click(function () {
            if( $(this).hasClass("disabled") )
                return;
            oSettings.oApi._fnPageChange(oSettings, "last");
            fnCallbackDraw(oSettings);
        }).bind('selectstart', function () { return false; });
   
        nPageNumBox.change(function () {
            var pageValue = parseInt($(this).val(), 10) - 1 ;
            var oPaging = oSettings.oInstance.fnPagingInfo();
             
            if(pageValue === NaN || pageValue<0 ){
                pageValue = 0;
            }else if(pageValue >= oPaging.iTotalPages ){
                pageValue = oPaging.iTotalPages -1;
            }
            oSettings.oApi._fnPageChange(oSettings, pageValue);
            fnCallbackDraw(oSettings);
        });
   
    },

    "fnUpdate": function (oSettings, fnCallbackDraw) {
        if (!oSettings.aanFeatures.p) {
            return;
        }
         
        var oPaging = oSettings.oInstance.fnPagingInfo(); 
        var iPages = Math.ceil((oSettings.fnRecordsDisplay()) / oSettings._iDisplayLength);
        var iCurrentPage = Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength) + 1;

        var an = oSettings.aanFeatures.p;
        
        $(an).find('span.paginate_total').html(oPaging.iTotalPages);
        $(an).find('.pageinate_input_box').val(oPaging.iPage+1);
        
        for (var i = 0, iLen = an.length; i < iLen; i++) {
            var spans = an[i].getElementsByTagName('span');
            var inputs = an[i].getElementsByTagName('select');
            var elSel = inputs[0];
            if(elSel.options.length != iPages) {
                elSel.options.length = 0;
                for (var j = 0; j < iPages; j++) {
                    var oOption = document.createElement('option');
                    oOption.text = j + 1;
                    oOption.value = j + 1;
                    try {
                        elSel.add(oOption, null);
                    } catch (ex) {
                        elSel.add(oOption);
                    }
                }
                spans[2].innerHTML = "&nbsp;out&nbsp;of&nbsp;" + iPages;
            }
          elSel.value = iCurrentPage;
        }
        
        $(an).each(function(index,item) {
 
            var $item = $(item);
            
            if (oPaging.iPage == 0) {
                var prev = $item.find('span.paginate_button.first').add($item.find('span.paginate_button.previous'));
                prev.addClass("disabled");
            }else {
                var prev = $item.find('span.paginate_button.first').add($item.find('span.paginate_button.previous'));
                prev.removeClass("disabled");
            }
   
            if (oPaging.iPage+1 == oPaging.iTotalPages) {
                var next = $item.find('span.paginate_button.last').add($item.find('span.paginate_button.next'));
                next.addClass("disabled");
            }else {
                var next = $item.find('span.paginate_button.last').add($item.find('span.paginate_button.next'));
                next.removeClass("disabled");
            }
        });
    }
        
};
