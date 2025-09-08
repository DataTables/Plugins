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
            "first": "ਪਹਿਲਾ",
            "last": "ਅਖੀਰਲਾ",
            "next": "ਅਗਲਾ",
            "previous": "ਪਿਛਲਾ"
        }
    },
    "autoFill": {
        "info": ""
    },
    "buttons": {
        "colvis": "ਕਾਲਮ ਦਿੱਖ"
    },
    "datetime": {
        "amPm": {
            "0": "ਸਵੇਰੇ",
            "1": "ਸ਼ਾਮ"
        },
        "hours": "ਘੰਟੇ",
        "minutes": "ਮਿੰਟ",
        "next": "ਅਗਲਾ",
        "previous": "ਪਿਛਲਾ",
        "seconds": "ਸਕਿੰਟ"
    },
    "decimal": "",
    "editor": {
        "close": "ਬੰਦ"
    },
    "emptyTable": "ਸੂਚੀ ਵਿੱਚ ਕੋਈ ਕਤਾਰ ਉਪਲਬਧ ਨਹੀਂ ਹੈ",
    "info": "_TOTAL_ ਵਿੱਚੋਂ _START_ ਤੋਂ _END_ ਐਂਟਰੀਆਂ ਦਿੱਖ ਰਹੀਆਂ ਹਨ",
    "infoEmpty": "0 ਵਿੱਚੋਂ 0 ਤੋਂ 0 ਕਤਾਰਾਂ ਦਿੱਖ ਰਹੀਆਂ ਹਨ",
    "infoFiltered": "(ਕੁੱਲ _MAX_ ਵਿਚੋਂ ਛਾਂਟੀਆਂ ਗਈਆਂ ਕਤਾਰਾਂ)",
    "infoPostFix": "",
    "infoThousands": ",",
    "lengthMenu": "ਕੁੱਲ _MENU_ ਕਤਾਰਾਂ",
    "loadingRecords": "ਸੂਚੀ ਲੋਡ ਹੋ ਰਹੀ ਹੈ...",
    "processing": "ਕਾਰਵਾਈ ਚੱਲ ਰਹੀ ਹੈ...",
    "search": "ਖੋਜ ਕਰੋ:",
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
    "zeroRecords": "ਕੋਈ ਕਤਾਰ ਨਹੀਂ ਮਿਲੀ"
};
}));
