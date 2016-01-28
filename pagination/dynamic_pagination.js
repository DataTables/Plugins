/**
 * This pagination plug-in provides multiple navigation types ( Select box, input, or basic navigation )
 * 
 * To set the limits:
 *
 * 'maxNormalPages' is used for the maximum pages in normal mode
 * 'maxSelectPages' is used for the selectbox mode
 *
 *  @name Dynamic input,select list
 *  @summary Show a `dt-tag select` `dt-tag input` list of pages the user can pick from.
 *  @author Frank van Os
 *
 *  @example
 *    $(document).ready(function() {
 *        $('#example').dataTable( {
 *            "sPaginationType": "dynamic_pagination"
 *        } );
 *    } );
 */
$.fn.dataTableExt.oPagination.dynamic_pagination = {
     'maxNormalPages': 10,
     'maxSelectPages': 20,
     'bootstrapTooltip': false,
     'fnClickHandler': function(e) {
        var fnCallbackDraw = e.data.fnCallbackDraw,
            oSettings = e.data.oSettings,
            sPage = e.data.sPage;
 
        if ($(this).is(':disabled')) {
            return false;
        }
 
        oSettings.oApi._fnPageChange(oSettings, sPage);
        fnCallbackDraw(oSettings);
 
        return true;
    },
	/*
	 * Function: oPagination.dynamic_pagination.fnInit
	 * Purpose:  Initalise dom elements required for pagination with listbox input
	 * Returns:  -
	 * Inputs:   object:oSettings - dataTables settings object
	 *             node:nPaging - the DIV which contains this pagination control
	 *             function:fnCallbackDraw - draw function which must be called on update
	 */
	"fnInit": function (oSettings, nPaging, fnCallbackDraw) {
		
		if (oSettings.sTableId !== '') {
			$(nPaging).attr('id', oSettings.sTableId + '_paginate');
		}
		
		var oClasses = oSettings.oClasses,
			oLang = oSettings.oLanguage.oPaginate;
		
		var PagingHolder = $('<ul/>').addClass('pagination');
		var nInputText = $('<input/>').attr('type','text').css('display','none');
		var nInputSelect = $('<select/>').css('display','none').addClass('form-control');
        
		var nFirst = $('<li/>').addClass(oClasses.sPageButton+' first').html($('<a/>').attr('href','#').text(oLang.sFirst));
		var nNext = $('<li/>').addClass(oClasses.sPageButton+' next').html($('<a/>').attr('href','#').text(oLang.sNext));
		var nInput = $('<li/>').attr('id',oSettings.sTableId+'_pagination_controls').addClass(oClasses.sPageButton).append(nInputText,nInputSelect);
		var nPrev = $('<li/>').addClass(oClasses.sPageButton+' previous').html($('<a/>').attr('href','#').text(oLang.sPrevious));
		var nLast = $('<li/>').addClass(oClasses.sPageButton+' last').html($('<a/>').attr('href','#').text(oLang.sLast));
		
        
		$(PagingHolder).append(nFirst, nPrev, nInput, nNext, nLast).appendTo(nPaging);
		
        $(nPaging).on('click','li:not(#'+oSettings.sTableId+'_pagination_controls) a',function (event) {
	        if(!$(this).parent('li').hasClass('disabled')){
	        	var nav = $(this).parent('li').attr('class').split(' ').pop();
			
				if($.inArray(nav,['first','last','previous','next']) !== -1){
				    oSettings.oApi._fnPageChange( oSettings, nav );
				    fnCallbackDraw( oSettings );
				}
			}
            event.preventDefault();
        } );
         
		function updatePage(element){
			if (element.val() === '' || element.val().match(/[^0-9]/)) {
				/* Nothing entered or non-numeric character */
                return;
            }
            var iNewStart = oSettings._iDisplayLength * (element.val() - 1);
            if (iNewStart > oSettings.fnRecordsDisplay()) { /* Display overrun */
                oSettings._iDisplayStart = (Math.ceil((oSettings.fnRecordsDisplay() - 1) / oSettings._iDisplayLength) - 1) * oSettings._iDisplayLength;
                fnCallbackDraw(oSettings);
                return;
            }
            oSettings._iDisplayStart = iNewStart;
            fnCallbackDraw(oSettings);
		}
		
		$(nInputText).keypress(function (e) {
			// On return navigate to given page
			if(e.which === 13){
				updatePage($(this));
			}
		});

		$(nInputSelect).change(function (e) { // Set DataTables page property and redraw the grid on listbox change event.
			updatePage($(this));
		});

        /* Disallow text selection */
        $('li.first,li.next,li.previous,li.last').bind( 'selectstart', function (evt) { evt.preventDefault(); } );
		
	},
	 
	/*
	 * Function: oPagination.listbox.fnUpdate
	 * Purpose:  Update the listbox element
	 * Returns:  -
	 * Inputs:   object:oSettings - dataTables settings object
	 *             function:fnCallbackDraw - draw function which must be called on update
	 */
	"fnUpdate": function (oSettings, fnCallbackDraw) {
		if (!oSettings.aanFeatures.p) {
			return;
		}
        
		var iPages = Math.ceil((oSettings.fnRecordsDisplay()) / oSettings._iDisplayLength);
		var iCurrentPage = Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength) + 1; /* Loop over each instance of the pager */
		var paging = oSettings.aanFeatures.p;
        var oClasses = oSettings.oClasses;
		var info = oSettings.aanFeatures.i;
        var that = this;
		
		for (var i = 0, iLen = paging.length; i < iLen; i++) {

            if ( oSettings._iDisplayStart === 0 ){
                $(paging).find('.first').attr('class',"paginate_button disabled first");
                $(paging).find('.previous').attr('class',"paginate_button disabled previous");
            }
            else {
                $(paging).find('.first').attr('class',"paginate_button first");
                $(paging).find('.previous').attr('class',"paginate_button previous");
            }

            if ( oSettings.fnDisplayEnd() == oSettings.fnRecordsDisplay() ){
                $(paging).find('.next').attr('class',"paginate_button disabled next");
                $(paging).find('.last').attr('class',"paginate_button disabled last");
            }
            else{
                $(paging).find('.next').attr('class',"paginate_button next");
                $(paging).find('.last').attr('class',"paginate_button last");
            }

            // Hide pagination block and info block
			$(paging).hide();
			$(info).hide();
            
            if(iPages <= that.maxNormalPages){
                $(paging).find('select,input').css('display','none');

				// Erase
              	$('#'+oSettings.sTableId+'_pagination_controls').find('a.paginate_button').remove();
              					
                for (var j = 0; j < iPages; j++) { //add the pages
                    var oNumber = $('<a/>',{
                        'class': oClasses.sPageButton,
                        'aria-controls': oSettings.sTableId,
                        'data-dt-idx': j,
                        'tabindex': oSettings.iTabIndex
                    }).text( oSettings.fnFormatNumber(j+1) );
                    if (iCurrentPage === j+1) {
                        oNumber.addClass('active').attr('disabled', true);
                    } else {
                        oNumber.click({ 'fnCallbackDraw': fnCallbackDraw, 'oSettings': oSettings, 'sPage': j }, that.fnClickHandler);
                    }
                    $(oNumber).appendTo('#'+oSettings.sTableId+'_pagination_controls');
                }
            }
            else if(iPages > that.maxNormalPages && iPages <= that.maxSelectPages) {

				// Erase
              	$('#'+oSettings.sTableId+'_pagination_controls').find('a.paginate_button').remove();
            	
                var input = $(paging).find('select');
            
                input.css('display','inline');
			
                if(oSettings._iDisplayStart === 0 && oSettings.fnDisplayEnd() == oSettings.fnRecordsDisplay()){
                    input.attr('disabled','disabled').attr('class','form-control disabled');
                }
                else{
                    input
                        .removeAttr('disabled','disabled')
                        .attr('class','form-control');
                }
                
                input.empty();
		        for (var j = 0; j < iPages; j++) { //add the pages
		            input.append($('<option>', {value:j+1,text:j+1}));
				}
                input.val(iCurrentPage);

                $(paging).find('input').css('display','none');
            }
            else if(iPages > that.maxNormalPages && iPages > that.maxSelectPages){
				var input = $(paging).find('input');
				input.css('display','inline');
			    if(that.bootstrapTooltip){
			        $('.pagination > li > input').attr('data-title','Max. page number: '+iPages).tooltip({
			            container: '.pagination',
			            placement: 'top'
			        });
			    }
			    input.val(iCurrentPage);
			    $(paging).find('select').css('display','none');                    
			}
            				
            // When there are pages show pagination block and info block
            $(paging).show();
            $(info).show();
		}
	}
};