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
            "first": "Fyrste",
            "last": "Siste",
            "next": "Neste",
            "previous": "Førre"
        }
    },
    "autoFill": {
        "info": ""
    },
    "decimal": "",
    "emptyTable": "Inga data tilgjengeleg i tabellen",
    "info": "Syner _START_ til _END_ av _TOTAL_ linjer",
    "infoEmpty": "Syner 0 til 0 av 0 linjer",
    "infoFiltered": "(filtrert frå _MAX_ totalt antal linjer)",
    "infoPostFix": "",
    "infoThousands": " ",
    "lengthMenu": "Syn _MENU_ linjer",
    "loadingRecords": "Lastar...",
    "processing": "Lastar...",
    "search": "S&oslash;k:",
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
    "zeroRecords": "Inga linjer treff p&aring; s&oslash;ket"
};
}));
