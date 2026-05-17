/*The MIT License (MIT)

Copyright (c) 2015 Paul Zepernick

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/


/**
 * @author Paul Zepernick http://www.paulzepernick.com
 * @summary DtServerColSearch
 * @description Add Server Side Column Search fields 
 * 
 */
(function(window, document, undefined) {
	var factory = function( $, DataTable ) {
		"use strict";
		
		/**
		 * Function: DtServerColSearch
		 * Purpose: Automatically create text boxes and selects for column based server side searching
		 * Returns: object: DtServerColSearch - must be called with 'new'
		 * Inputs:   mixed:mTable - target table
		 *  @param {object} dt DataTables instance or HTML table node. With DataTables
		 *    	1.10 this can also be a jQuery collection (with just a single table in its
		 *    result set), a jQuery selector, DataTables API instance or settings
		 *    	object.
		 *  @param {object} Initialisation settings, with the following properties
		 *  			string:placement - 'head', 'foot' (default 'head')
		 *  			bool:placeholders - Add placeholders to the search inputs? (default true)
		 *  			string:controlClass - Class / Classes to apply to each control
		 *  			array:select - select settings object
		 *  					mixed:name - String or int referencing the column data string, column name, or columnum index
		 *  					mixed:options - String Array.  The value / display of the option can be separated with a | char.  Elements with no pipe will use the same value for the option value and display
		 *  									OR
		 *  									function(jqSelObj) jQuery object of the select being created is passed in.  This can then have the options appended to it.
		 *  					bool:header - Should a header entry be generated for the select? (default true)  
		 * 
		 * The following properties are read from the DataTable settings:
		 * 		bool:columns.searchable - used to determine if the column should receive a input for searching
		 * 		int:searchDelay - used to determine the amount of time to wait before not receiving user input for searching.  Default is 500 if not specified 
		 * 
		 */
		var DtServerColSearch = function(dt, opts) {
			if ( ! this instanceof DtServerColSearch ) {
				alert( "DtServerColSearch warning: DtServerColSearch must be initialised with the 'new' keyword." );
				return;
			}
			
			var defaults = {
					placement: "head",

					select: [],
					
					placeholders: true,
					
					controlClass: "form-control"
			};
			
			var mergedOpts = $.extend({}, defaults, opts);
			
			//return the options for this plugin
			this.getOptions = function() {
				return mergedOpts;
			};
			
			var selectDefaults = {
					header: true
			};
			//default options describing a select
			this.getSelectDefaults = function() {
				return selectDefaults;
			};
			
			this._delayCall = (function(){
				  var timer = 0;
				  return function(ms, callback){
				    clearTimeout (timer);
				    timer = setTimeout(callback, ms);
				  };
				})();
			
			var dtsettings = $.fn.dataTable.Api ?
					new $.fn.dataTable.Api( dt ).settings()[0] :
						dt.fnSettings();
			
			this.init(dt, dtsettings, mergedOpts);
		};
		
		DtServerColSearch.prototype = {
			dtapi : {},
			dtsettings: {},
			
			//init the extension and build the search fields
			init : function(dtapi, dtsettings, opts) {
				
				if(this.getOptions().placement !== "head" && this.getOptions().placement !== "foot") {
					alert("[DtServerColSearch] placement option must be one of these ['head', 'foot']");
					return;
				}
				
				dtsettings.searchDelay = dtsettings.searchDelay || 500;
				this.dtapi = dtapi;
				this.dtsettings = dtsettings;
				//console.log(dtsettings);
								
				var tr = $("<tr/>").addClass("dataTable_colSearchBar");
				
				var cols = dtsettings.aoColumns;
				var colLen = cols.length;
				//console.info(cols);
				for(var i = 0; i < colLen; i++) {
					if(cols[i].bVisible === false) {
						continue;
					}
					
					if(cols[i].bSearchable === false) {
						tr.append($("<td/>"));
						continue;
					}
						
					var name = cols[i].data || cols[i].mData;
					var input = this._getSearchCtrl(name, i).addClass(this.getOptions().controlClass);
					var td = $("<td/>").append(input);
					tr.append(td);
					
				}
				
				var parent;
				if(this.getOptions().placement === "head") {
						parent = $(dtapi.table().header());
				} else {
					parent = $(dtapi.table().footer());
					//build a footer if the table does not have one
					if(parent.length === 0) {
						parent = $("<tfoot/>");
						$(dtapi.table().node()).append(parent);
					}
				}
							
						
				parent.prepend(tr);
				
				//listen for columns being hidden and make sure we hide the column in the search bar too
				$(dtapi.table().node()).on("column-visibility.dt", function(e, settings, column, state) {
					tr.children().eq(column).toggle(state);
				});
						
			},
			
			//private method to build the text or select box for the searching
			_getSearchCtrl : function(name, index) {
				
				var selects = this.getOptions().select;
				var len = selects.length;
				for(var i = 0; i < len; i++) {
					var s = $.extend({}, this.getSelectDefaults(), selects[i]);
					if(s.name === name || s.name === index) {
						return this._buildSelect(index, s);
					}
				}
				
				return this._buildText(index);
			},
			
			//private method to build a select control and hook a change listener to it
			_buildSelect : function(index, sObj) {
				var plugin = this;
				var select = $("<select/>");
				if($.isFunction(sObj.options)) {
					sObj.options(select);
				} else {
					this._appendOptsToSelect(select, sObj.options);
				}
				
				if(sObj.header === true) {
					var hTxt = $(plugin.dtapi.column(index).header()).text();
					select.prepend($("<option/>").val("").text("--" + hTxt + " Search " + "--")).val("");
				}
				
				select.change(function() {
					plugin._doSearch($(this), index);
				});
				
				return select;
			},
			
			_appendOptsToSelect: function(jqSel, optsArray) {
				var len = optsArray.length;
				for(var i = 0; i < len; i++) {
					var spl = optsArray[i].split("|");
					var val = spl[0];
					var display = spl.length > 1 ? spl[1] : val;
					jqSel.append($("<option/>").val(val).text(display));
				}
			},
			
			_buildText : function(index) {
				var plugin = this;
				var input = $("<input/>")
					.attr("type", "text")
					.keyup(function() {
							var input = $(this);
							plugin._delayCall(plugin.dtsettings.searchDelay, function() {
								plugin._doSearch(input, index);
							});
						});
				
				if(plugin.getOptions().placeholders === true) {
					var hTxt = $(plugin.dtapi.column(index).header()).text();
					input.attr("placeholder", hTxt + " Search...");
				}
				
				return input;
			},
			
			_doSearch : function(input, index) {
				//console.log(input);
				this.dtapi
					.columns(index)
					.search(input.val())
					.draw();
			}
		};
		
		
		$.fn.dataTable.DtServerColSearch = DtServerColSearch;
		$.fn.DataTable.DtServerColSearch = DtServerColSearch;
		
		
		
		
		return DtServerColSearch;
	};
	
	
	// Define as an AMD module if possible
	if ( typeof define === 'function' && define.amd ) {
		define( ['jquery', 'datatables'], factory );
	}
	else if ( typeof exports === 'object' ) {
	    // Node/CommonJS
	    factory( require('jquery'), require('datatables') );
	}
	else if ( jQuery && !jQuery.fn.dataTable.DtServerColSearch ) {
		// Otherwise simply initialise as normal, stopping multiple evaluation
		factory( jQuery, jQuery.fn.dataTable );
	}
	
		
	
})(window, document);