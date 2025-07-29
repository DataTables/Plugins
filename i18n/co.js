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
            "first": "Prima",
            "last": "Ultimu",
            "next": "Seguente",
            "previous": "Precedente"
        }
    },
    "autoFill": {
        "info": ""
    },
    "decimal": "",
    "emptyTable": "Nisunu datu dispunibule in u tavulone",
    "info": "Visualisazione di l'elementu _START_ à _END_ nant'à _TOTAL_ elementi",
    "infoEmpty": "Visualisazione di l'elementu 0 à 0 nant'à 0 elementu",
    "infoFiltered": "staccià à partesi da _MAX_ elementi in tutale",
    "infoPostFix": "",
    "infoThousands": ",",
    "lengthMenu": "Mustrà _MENU_ elementi",
    "loadingRecords": "Carcamentu...",
    "processing": "Trattamentu...",
    "search": "Circà :",
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "0": ""
        },
        "columns": {
            "0": ""
        },
        "rows": {
            "_": "%d linee selezziunate",
            "0": "",
            "1": "1 linea selezziunata"
        }
    },
    "zeroRecords": "Nisunu elementu currispundente trovu"
};
}));
