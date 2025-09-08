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
            "first": "Першая",
            "last": "Апошняя",
            "next": "Наступная",
            "previous": "Папярэдняя"
        }
    },
    "autoFill": {
        "info": ""
    },
    "decimal": "",
    "info": "Запісы з _START_ па _END_ з _TOTAL_ запісаў",
    "infoEmpty": "Запісы з 0 па 0 з 0 запісаў",
    "infoFiltered": "(адфільтравана з _MAX_ запісаў)",
    "infoPostFix": "",
    "lengthMenu": "Паказваць _MENU_ запісаў",
    "processing": "Пачакайце...",
    "search": "Пошук:",
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
    "zeroRecords": "Запісы адсутнічаюць."
};
}));
