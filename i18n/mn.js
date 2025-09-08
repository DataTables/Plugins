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
            "first": "Эхнийх",
            "last": "Сүүлийнх",
            "next": "Дараах",
            "previous": "Өмнөх"
        }
    },
    "autoFill": {
        "info": ""
    },
    "decimal": "",
    "emptyTable": "Хүснэгт хоосон байна",
    "info": "Нийт _TOTAL_ бичлэгээс _START_ - _END_ харуулж байна",
    "infoEmpty": "Тохирох үр дүн алга",
    "infoFiltered": "(нийт _MAX_ бичлэгээс шүүв)",
    "infoPostFix": "",
    "infoThousands": ",",
    "lengthMenu": "Дэлгэцэд _MENU_ бичлэг харуулна",
    "loadingRecords": "Ачааллаж байна...",
    "processing": "Боловсруулж байна...",
    "search": "Хайлт:",
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
    "zeroRecords": "Тохирох бичлэг олдсонгүй"
};
}));
