/**
 * @summary     SlidingChild
 * @description Show / Hide row child plugin
 * @version     2.0.0
 * @file        dataTables.slidingChild.js
 * @author      Nick Adkinson (https://github.com/data-handler)
 * @copyright   Copyright 2018 Nick Adkinson
 * 
 * License      MIT - http://datatables.net/license/mit
 *
 * This feature plug-in provides functionality for showing and hiding row child 
 * information in DataTables. This can be particularly useful for displaying
 * hierarchical data as a drill-down, or where you wish to convey more information
 * about a row than there is space for in the host table.
 *
 * @example
 *    $('#myTable').DataTable({
 *        slidingChild: {
 *            source: function(parent, response) {
 *                $.get('/Child/GetByParentId/' + parent.data('id'), response);
 *            }
 *        }
 *    });
 *
 */
(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery', 'datatables.net'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = function (root, $) {
			if ( ! root ) {
				root = window;
			}

			if ( ! $ || ! $.fn.dataTable ) {
				$ = require('datatables.net')(root, $).$;
			}

			return factory( $, root, root.document );
		};
	}
	else {
		// Browser
		factory( jQuery, document );
	}
}(function( $, document ) {
'use strict';

var SlidingChild = function ( dt, options )
{
    var table = dt.table();
    var sliderElement = document.createElement('div');
    sliderElement.className = 'slider';

	this.s = $.extend({}, 
		{
			dt:         dt,
            table:      $(table.node()),
            slider:     $(sliderElement)
		}, 
		SlidingChild.defaults, 
		options
	);	

	this._bind();
};

SlidingChild.prototype = {
	_bind: function() {
		var that = this;
		var settings = that.s;
		$(settings.table, '> tbody').on('click', settings.selector, function() {     
            var $this = $(this);
            var tr = $this.is('tr') ? $this : $this.closest('tr');

			if (!tr.is('tr')) { return; } // throw error?
			
			var dtRow = settings.dt.row(tr);            
            settings.source( tr, that._response(dtRow) );
        });
	},
	_response: function(dtRow) {
		return function( dtRow, childData ) {
			this._toggleChild( dtRow, childData );
		}.bind( this, dtRow );
	},
	_toggleChild: function(dtRow, childData) {
        var that = this;
		if (dtRow.child.isShown()) {
			that._hideChild(dtRow, function() {});
		} else {      
			var settings = that.s;          
            var existingShownDtRow = settings.dt.row('.shown');
			if (existingShownDtRow.length && settings.toggle) {     
                that._hideChild(existingShownDtRow, that._showChild(dtRow, childData));
            } else {            
                that.__showChild(dtRow, childData);
            }
		}
    },
    _showChild: function(dtRow, data) {
        return function( dtRow, childData ) {
			this.__showChild( dtRow, childData );
		}.bind( this, dtRow, data );
    },
	__showChild: function(dtRow, data) {   
		var settings = this.s;                 
        var slider = settings.slider;

        slider.append(data);
        dtRow.child(slider, settings.childClass).show();

        if (settings.animateShow) {
            this._showChildAnimation(dtRow);
        } else {
            this._showChildNoAnimation(dtRow);
        }   
    },
    _showChildAnimation: function(dtRow) {
        var selectedRow = $(dtRow.node());
        var settings = this.s;
        $(settings.slider, dtRow.child()).slideDown(settings.animationSpeed, function () {
            selectedRow.addClass('shown');
            settings.onShown(dtRow);
        });
    },
    _showChildNoAnimation: function(dtRow) {
        var selectedRow = $(dtRow.node());
        var settings = this.s;
        $(settings.slider, dtRow.child()).show();
        selectedRow.addClass('shown');
        settings.onShown(dtRow);
    },
	_hideChild: function(dtRow, callback) {  
		var settings = this.s;     
        
		if (settings.animateHide) {
            this._hideChildAnimation(dtRow, callback);
        } else {
            this._hideChildNoAnimation(dtRow, callback);
        }
	},
    _hideChildAnimation: function(dtRow, callback) {
        var settings = this.s;
        var showingRow = $(dtRow.node());
        var slider = settings.slider;
        $(slider, dtRow.child()).slideUp(settings.animationSpeed, function () {          
            dtRow.child.remove();            
            showingRow.removeClass('shown');
            slider.empty();            
            settings.onHidden(dtRow);                       
            callback();
		});
    },
    _hideChildNoAnimation: function(dtRow, callback) {
        var settings = this.s;
        var showingRow = $(dtRow.node());
        var slider = settings.slider;
        $(slider, dtRow.child()).hide();   
        dtRow.child.remove();            
        showingRow.removeClass('shown');
        slider.empty();            
        settings.onHidden(dtRow);                       
        callback();
    }
};

SlidingChild.defaults = {
	selector: "tr",
	childClass: 'child',
	source: function() {},
    toggle: true,
    animateShow: true,
    animateHide: true,
	animationSpeed: 200,
	onShown: function() {},
	onHidden: function() {}
};


$.fn.dataTable.SlidingChild = SlidingChild;
$.fn.DataTable.SlidingChild = SlidingChild;

// Automatic initialisation listener
$(document).on( 'init.dt', function ( e, settings ) {	
	if ( e.namespace !== 'dt' ) {
		return;
	}

	var api = new $.fn.dataTable.Api( settings );

	if ( $( api.table().node() ).hasClass( 'slidingChild' ) ||
		 settings.oInit.slidingChild ||
		 $.fn.dataTable.defaults.slidingChild )
	{
		new SlidingChild( api, settings.oInit.slidingChild );
	}
} );


}));
