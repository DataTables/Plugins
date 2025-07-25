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
            "first": "Mwanzo",
            "last": "Mwisho",
            "next": "Ijayo",
            "previous": "Kabla"
        }
    },
    "autoFill": {
        "cancel": "Ghairi",
        "fill": "Jaza",
        "fillHorizontal": "Jaza kwa usawa",
        "fillVertical": "Jaza kwa wima",
        "info": ""
    },
    "buttons": {
        "collection": "Makusanyiko",
        "colvis": "Muonekano wa safu",
        "colvisRestore": "Rejesha muonekano",
        "copy": "Nakili",
        "copySuccess": {
            "_": "Safu %ds zimenakiliwa kwenye clipboard",
            "1": "Safu moja imenakili "
        },
        "copyTitle": "Nakili kwenye Clipboard",
        "createState": "Ongeza Jimbo",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "Onyesha safu %d",
            "-1": "Onyesha safu zote"
        },
        "pdf": "PDF",
        "print": "Chapisha",
        "removeAllStates": "Ondosha Majimbo yote",
        "removeState": "Ondosha",
        "renameState": "Sasiha Jina",
        "savedStates": "Majimbo Yaliyohifadhiwa",
        "updateState": "sasisha"
    },
    "datetime": {
        "amPm": {
            "0": "AM",
            "1": "PM"
        },
        "hours": "Saa",
        "minutes": "Dakika",
        "months": {
            "0": "Januari",
            "1": "Febuari",
            "10": "Novemba",
            "11": "Disemba",
            "2": "Machi",
            "3": "Aprili",
            "4": "Mei",
            "5": "Juni",
            "6": "Julai",
            "7": "Agosti",
            "8": "Septemba",
            "9": "Oktoba"
        },
        "next": "Kesho",
        "previous": "Jana",
        "seconds": "Sekunde",
        "unknown": "-",
        "weekdays": {
            "0": "J3",
            "1": "J4",
            "2": "J5",
            "3": "Alh",
            "4": "Ij",
            "5": "J1",
            "6": "J2"
        }
    },
    "decimal": "",
    "editor": {
        "close": "Funga",
        "create": {
            "button": "Mpya",
            "submit": "Ongeza",
            "title": "Ongeza rekodi mpya"
        },
        "edit": {
            "button": "Sasisha",
            "submit": "Sasisha",
            "title": "Sasisha rekodi"
        },
        "remove": {
            "button": "Futa",
            "submit": "Futa",
            "title": "Futa"
        }
    },
    "emptyTable": "Hakuna data iliyo patikana",
    "info": "Inaonyesha _START_ mpaka _END_ ya matokeo _TOTAL_",
    "infoEmpty": "Inaonyesha 0 hadi 0 ya matokeo 0",
    "infoFiltered": "(uschujo kutoka matokeo idadi _MAX_)",
    "infoPostFix": "",
    "infoThousands": ",",
    "lengthMenu": "Onyesha _MENU_ matokeo",
    "loadingRecords": "Inapakia...",
    "processing": "Processing...",
    "search": "Tafuta:",
    "searchBuilder": {
        "add": "Weka Sharti",
        "clearAll": "Ondoa zote",
        "condition": "Sharti",
        "data": "Data",
        "deleteTitle": "Futa sheria ya kuchuja",
        "leftTitle": "Vigezo vya zamani",
        "logicAnd": "Pamoja na",
        "logicOr": "Au",
        "value": "Thamani"
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
    "zeroRecords": "Rekodi vinavyolingana haziku patikana"
};
}));
