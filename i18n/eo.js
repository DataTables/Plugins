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
            "first": "Unua",
            "last": "Lasta",
            "next": "Venonta",
            "previous": "Antaŭa"
        }
    },
    "autoFill": {
        "info": ""
    },
    "decimal": "",
    "emptyTable": "Neniuj datumoj en tabelo",
    "info": "Montras _START_ ĝis _END_ el _TOTAL_ vicoj",
    "infoEmpty": "Montras 0 ĝis 0 el 0 vicoj",
    "infoFiltered": "(filtrita el entute _MAX_ vicoj)",
    "infoPostFix": "",
    "infoThousands": ".",
    "lengthMenu": "Montri _MENU_ vicojn",
    "loadingRecords": "Ŝarĝas ...",
    "processing": "Pretigas ...",
    "search": "Serĉi:",
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
    "zeroRecords": "Neniuj rezultoj trovitaj"
};
}));
