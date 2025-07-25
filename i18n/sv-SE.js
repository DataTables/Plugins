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
            "first": "Första",
            "last": "Sista",
            "next": "Nästa",
            "previous": "Föregående"
        }
    },
    "autoFill": {
        "cancel": "Avbryt",
        "fill": "Fyll alla celler med <i>%d<\/i>",
        "fillHorizontal": "Fyll celler horisontalt",
        "fillVertical": "Fyll celler vertikalt",
        "info": ""
    },
    "buttons": {
        "collection": "Samling <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
        "colvis": "Kolumn synlighet",
        "colvisRestore": "Återställ synlighet",
        "copy": "Kopiera",
        "copyKeys": "Tryck ctrl eller u2318 + C för att kopiera tabellens data till systemets Urklipp.  Tryck på det är meddelanden eller Escape för att avbryta.",
        "copySuccess": {
            "_": "Kopierade %ds rader till Urklipp",
            "1": "Kopierade 1 rad till Urklipp"
        },
        "copyTitle": "Kopiera till Urklipp",
        "createState": "Skapa urval",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "Visa %d rader",
            "-1": "Visa alla rader"
        },
        "pdf": "PDF",
        "print": "Skriv ut",
        "removeAllStates": "Sparade urval",
        "removeState": "Ta bort",
        "renameState": "Döp om",
        "savedStates": "Sparade urval",
        "stateRestore": "Urval",
        "updateState": "Uppdatera"
    },
    "datetime": {
        "amPm": {
            "0": "fm",
            "1": "em"
        },
        "hours": "Timmar",
        "minutes": "Minuter",
        "months": {
            "0": "Januari",
            "1": "Februari",
            "10": "November",
            "11": "December",
            "2": "Mars",
            "3": "April",
            "4": "Maj",
            "5": "Juni",
            "6": "Juli",
            "7": "Augusti",
            "8": "September",
            "9": "Oktober"
        },
        "next": "Nästa",
        "previous": "Föregående",
        "seconds": "Sekunder",
        "unknown": "-",
        "weekdays": {
            "0": "Sön",
            "1": "Mån",
            "2": "Tis",
            "3": "Ons",
            "4": "Tor",
            "5": "Fre",
            "6": "Lör"
        }
    },
    "decimal": "",
    "editor": {
        "close": "Stäng",
        "create": {
            "button": "Ny",
            "submit": "Skapa",
            "title": "Skapa ny post"
        },
        "edit": {
            "button": "Redigera",
            "submit": "Uppdatera",
            "title": "Redigera post"
        },
        "error": {
            "system": "Ett systemfel har inträffat (<a target=\"\\\" rel=\"nofollow\" href=\"\\\">Mer information<\/a>)."
        },
        "multi": {
            "info": "De valda objekten har olika värden för detta fält. För att redigera och sätta alla objekt för detta fält till samma värde, klicka eller tryck här, annars behåller de sina individuella värden.",
            "noMulti": "Detta fält kan redigeras individuellt, men inte som en del av en grupp.",
            "restore": "Ångra ändringar",
            "title": "Flera värden"
        },
        "remove": {
            "button": "Radera",
            "confirm": {
                "_": "Är du säker på att du vill ta bort %d rader?",
                "1": "Är du säker på att du vill ta bort 1 rad?"
            },
            "submit": "Radera",
            "title": "Radera"
        }
    },
    "emptyTable": "Tabellen innehåller ingen data",
    "info": "Visar _START_ till _END_ av totalt _TOTAL_ rader",
    "infoEmpty": "Visar 0 till 0 av totalt 0 rader",
    "infoFiltered": "(filtrerade från totalt _MAX_ rader)",
    "infoPostFix": "",
    "infoThousands": " ",
    "lengthMenu": "Visa _MENU_ rader",
    "loadingRecords": "Laddar …",
    "processing": "Bearbetar …",
    "search": "Sök:",
    "searchBuilder": {
        "add": "Nytt Villkor",
        "button": {
            "_": "Avancerad sökning (%d)",
            "0": "Avancerad sökning"
        },
        "clearAll": "Rensa",
        "condition": "Villkor",
        "conditions": {
            "array": {
                "contains": "Innehåller",
                "empty": "Tom",
                "equals": "Lika med",
                "not": "Inte",
                "notEmpty": "Inte Tom",
                "without": "Utan"
            },
            "date": {
                "after": "Efter",
                "before": "Före",
                "between": "Mellan",
                "empty": "Tom",
                "equals": "Lika med",
                "not": "Inte",
                "notBetween": "Inte Mellan",
                "notEmpty": "Inte Tom"
            },
            "number": {
                "between": "Mellan",
                "empty": "Tom",
                "equals": "Lika med",
                "gt": "Större än",
                "gte": "Större eller lika med",
                "lt": "Mindre än",
                "lte": "Mindre eller lika med",
                "not": "Inte",
                "notBetween": "Inte Mellan",
                "notEmpty": "Inte Tom"
            },
            "string": {
                "contains": "Innehåller",
                "empty": "Tom",
                "endsWith": "Slutar med",
                "equals": "Lika med",
                "not": "Inte",
                "notContains": "Innehåller inte",
                "notEmpty": "Inte Tom",
                "notEndsWith": "Slutar ej med",
                "notStartsWith": "Börjar ej med",
                "startsWith": "Börjar med"
            }
        },
        "data": "Data",
        "deleteTitle": "Ta bort filtreringsregel",
        "leftTitle": "Omvänt indragskriterier",
        "logicAnd": "Och",
        "logicOr": "Eller",
        "rightTitle": "Indragskriterier",
        "title": {
            "_": "Avancerad sökning (%d)",
            "0": "Avancerad sökning"
        },
        "value": "Värde"
    },
    "searchPanes": {
        "clearMessage": "Rensa",
        "collapse": {
            "_": "Sökrutor (%d)",
            "0": "Sökrutor"
        },
        "collapseMessage": "Dölj alla",
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "Sökrutor saknas",
        "loadMessage": "Laddar Sökrutor...",
        "showMessage": "Visa alla",
        "title": "Aktiva Filter - %d"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "%d celler markerade",
            "0": "",
            "1": "1 cell markerad"
        },
        "columns": {
            "_": "%d kolumner markerade",
            "0": "",
            "1": "1 kolumn markerad"
        },
        "rows": {
            "_": "%d rader valda",
            "0": "",
            "1": "1 rad vald"
        }
    },
    "stateRestore": {
        "creationModal": {
            "button": "Skapa",
            "columns": {
                "search": "Sök kolumn",
                "visible": "Visa kolumn"
            },
            "name": "Namn:",
            "order": "Sortera",
            "paging": "Sidor",
            "scroller": "Skroll position",
            "search": "Sök",
            "searchBuilder": "Sökbyggare",
            "select": "Välj",
            "title": "Skapa Nytt Urval",
            "toggleLabel": "Innehåller:"
        },
        "duplicateError": "Ett urval med detta namn finns redan",
        "emptyError": "Namn måste anges",
        "emptyStates": "Inga sparade urval",
        "removeConfirm": "Är du säker på att du vill ta bort %s?",
        "removeError": "Misslyckades radera urval.",
        "removeJoiner": "Är du säker på att du vill ta bort urval %s och %s?",
        "removeSubmit": "Är du säker på att du vill ta bort %s?",
        "removeTitle": "Radera Urval",
        "renameButton": "Byt namn",
        "renameLabel": "Nytt namn för %s:",
        "renameTitle": "Byt namn på urval"
    },
    "thousands": " ",
    "zeroRecords": "Hittade inga matchande resultat"
};
}));
