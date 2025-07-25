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
            "first": "Прва",
            "last": "Последња",
            "next": "Следећа",
            "previous": "Претходна"
        }
    },
    "autoFill": {
        "cancel": "Откажи",
        "fill": "Попуни све  <i>%d<\/i>",
        "fillHorizontal": "Попуни ћелије хоризонтално",
        "fillVertical": "Попуни ћелије вертикално",
        "info": ""
    },
    "buttons": {
        "colvis": "Видљивост колона",
        "colvisRestore": "Поврати видљивост",
        "copy": "Копирај",
        "copyKeys": "Притисните &lt;i&gt;ctrl&lt;\/i&gt; или &lt;i&gt;u2318&lt;\/i&gt; + &lt;i&gt;C&lt;\/i&gt; да копирате податке из табеле&lt;br&gt;на ваш клипборд.&lt;br&gt;&lt;br&gt;Да откажете, кликните на ову поруку или стисните тастер \"escape\".",
        "copySuccess": {
            "_": "Копирано %ds ред(ова) у клипборд",
            "1": "Копиран 1 ред у клипборд"
        },
        "copyTitle": "Kopirano u klipboard",
        "csv": "CSV",
        "excel": "Ексел",
        "pageLength": {
            "_": "Прикажи %d редова",
            "-1": "Прикажи све редове"
        },
        "pdf": "PDF",
        "print": "Штампај",
        "removeState": "Уклони",
        "renameState": "Преименуј",
        "savedStates": "Сачувана стања",
        "updateState": "Ажурирај"
    },
    "datetime": {
        "hours": "Сат",
        "minutes": "Минут",
        "months": {
            "0": "Јануар",
            "1": "Фебруар",
            "10": "Новембар",
            "11": "Децембар",
            "2": "Март",
            "3": "Април",
            "4": "Мај",
            "5": "Јун",
            "6": "Јул",
            "7": "Август",
            "8": "Септембар",
            "9": "Октобар"
        },
        "next": "Следећи",
        "previous": "Претходни",
        "seconds": "Секунда",
        "unknown": "-",
        "weekdays": {
            "0": "Нед",
            "1": "Пон",
            "2": "Уто",
            "3": "Сре",
            "4": "Чет",
            "5": "Пет",
            "6": "Суб"
        }
    },
    "decimal": "",
    "editor": {
        "close": "Затвори",
        "create": {
            "button": "Ново",
            "submit": "Направи",
            "title": "Направите нови унос"
        },
        "edit": {
            "button": "Измени",
            "submit": "Измени",
            "title": "Измени унос"
        },
        "remove": {
            "button": "Обриши"
        }
    },
    "emptyTable": "Нема података у табели.",
    "info": "Приказано _START_ до _END_ од _TOTAL_ уноса",
    "infoEmpty": "Приказано 0 до 0 од 0 уноса",
    "infoFiltered": "филтрирано од укупно _MAX_ уноса",
    "infoPostFix": "",
    "infoThousands": ".",
    "lengthMenu": "Прикажи _MENU_ уноса",
    "loadingRecords": "Учитавање...",
    "processing": "Обрада...",
    "search": "Претрага:",
    "searchBuilder": {
        "add": "Додај услов",
        "clearAll": "Почисти све",
        "condition": "Услов",
        "logicAnd": "И",
        "logicOr": "ИЛИ",
        "value": "Вредност"
    },
    "searchPanes": {
        "clearMessage": "Уклони филтере",
        "collapseMessage": "Затвори све",
        "emptyPanes": "Није пронађен ниједан запис",
        "loadMessage": "Учитавање...",
        "showMessage": "Прикажи све",
        "title": "Активни филтери - %d"
    },
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
    "thousands": ",",
    "zeroRecords": "Није пронађен ниједан одговарајући запис"
};
}));
