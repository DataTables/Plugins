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
            "first": "પ્રથમ",
            "last": "અંતિમ",
            "next": "આગામી",
            "previous": "ગત"
        }
    },
    "autoFill": {
        "info": ""
    },
    "decimal": "",
    "emptyTable": "કોષ્ટકમાં કોઈ ડેટા ઉપલબ્ધ નથી",
    "info": "કુલ _TOTAL_ માંથી _START_ થી  _END_ પ્રવેશો દર્શાવે છે",
    "infoEmpty": "કુલ 0 પ્રવેશ માંથી 0 થી 0 બતાવી રહ્યું છે",
    "infoFiltered": "(_MAX_ કુલ પ્રવેશો માંથી ફિલ્ટર)",
    "infoPostFix": "",
    "infoThousands": ",",
    "lengthMenu": "બતાવો _MENU_ પ્રવેશો",
    "loadingRecords": "લોડ કરી રહ્યું છે ...",
    "processing": "પ્રક્રિયા ...",
    "search": "શોધો:",
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
    "zeroRecords": "કોઈ મેળ ખાતા રેકોર્ડ મળ્યા નથી "
};
}));
