(function( factory ) {
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( [], factory);
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = factory();
	}
	// No browser loader - use JSON, ESM, CJS or AMD
}
(function() {
    return {
    "aria": {
        "paginate": {
            "first": "Unang",
            "last": "Huli",
            "next": "Susunod",
            "previous": "Nakaraan"
        }
    },
    "autoFill": {
        "info": ""
    },
    "decimal": "",
    "info": "Ipinapakita ang  _START_  sa _END_ ng _TOTAL_ entries",
    "infoEmpty": "Ipinapakita ang 0-0 ng 0 entries",
    "infoFiltered": "(na-filter mula _MAX_ kabuuang entries)",
    "infoPostFix": "",
    "lengthMenu": "Ipakita _MENU_ entries",
    "processing": "Pagproseso...",
    "search": "Paghahanap:",
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "0": ""
        },
        "columns": {
            "0": ""
        },
        "rows": {
            "0": ""
        }
    },
    "zeroRecords": "Walang katugmang  mga talaan  na natagpuan"
};
}));
