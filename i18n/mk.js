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
            "first": "Почетна",
            "last": "Последна",
            "next": "Следна",
            "previous": "Претходна"
        }
    },
    "autoFill": {
        "cancel": "Откажи",
        "fill": "Пополни ги сите келии со <i>$d<\/i>",
        "fillHorizontal": "Пополни ги хоризонталните ќелии",
        "fillVertical": "Пополни ги вертикалните ќелии",
        "info": ""
    },
    "buttons": {
        "colvis": "Видливост на колони",
        "copySuccess": {
            "_": "Копирани се %ds редови во складот",
            "1": "Еден ред е копиран во складот"
        },
        "excel": "excel",
        "pageLength": {
            "_": "Прикажи %d редови",
            "-1": "Прикажи ги сите редови"
        },
        "pdf": "pdf",
        "print": "Печати"
    },
    "decimal": "",
    "emptyTable": "Нема податоци во табелата",
    "info": "Прикажани _START_ до _END_ од _TOTAL_ записи",
    "infoEmpty": "Прикажани 0 до 0 од 0 записи",
    "infoFiltered": "(филтрирано од вкупно _MAX_ записи)",
    "infoPostFix": "",
    "lengthMenu": "Прикажи _MENU_ записи",
    "loadingRecords": "Вчитување...",
    "processing": "Процесирање...",
    "search": "Барај",
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
    "zeroRecords": "Не се пронајдени записи"
};
}));
