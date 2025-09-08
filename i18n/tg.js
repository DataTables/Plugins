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
            "first": "Якум",
            "last": "Охирон",
            "next": "Ба пеш",
            "previous": "Ба қафо"
        }
    },
    "autoFill": {
        "info": ""
    },
    "decimal": "",
    "emptyTable": "Дар ҷадвал маълумот нест",
    "info": "Сабтҳо аз _START_ то _END_ аз _TOTAL_ сабтҳо",
    "infoEmpty": "Сабтҳо аз 0 то 0 аз 0 сабтҳо",
    "infoFiltered": "(филтр карда шудааст аз _MAX_ сабтҳо)",
    "infoPostFix": "",
    "lengthMenu": "Намоиши сабтҳои _MENU_",
    "loadingRecords": "Боргирии сабтҳо...",
    "processing": "Интизор шавед...",
    "search": "Ҷустуҷӯ:",
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "0": ""
        },
        "columns": {
            "0": ""
        },
        "rows": {
            "_": "Сабтҳо интихобшуда: %d",
            "0": "",
            "1": "Як сабт интихоб шудааст"
        }
    },
    "zeroRecords": "Сабтҳо вуҷуд надорад."
};
}));
