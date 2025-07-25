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
            "first": "Prva",
            "last": "Zadnja",
            "next": "Naslednja",
            "previous": "Predhodna"
        }
    },
    "autoFill": {
        "cancel": "prekliči",
        "fill": "napolni",
        "fillHorizontal": "napolni vodoravno",
        "fillVertical": "napolni navpično",
        "info": ""
    },
    "buttons": {
        "collection": "Zbirka",
        "colvis": "Vidni stolpci",
        "colvisRestore": "Ponastavi vidne stolpce",
        "copy": "Kopiraj",
        "copyKeys": "Pritisni Ctrl ali u2318 + C za kopiranje podatkov tabele v odložišče sistema. Za preklic klikni na to sporočilo ali pritisni Escape.",
        "copySuccess": {
            "_": "%ds vrstic prekopiranih na odložišče.",
            "1": "1 vrstica prekopirana na odložišče."
        },
        "copyTitle": "Kopiraj na odložišče",
        "createState": "Izdelaj stanje",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "Prikaži %ds vrstic",
            "-1": "Prikaži vse vrstice"
        },
        "pdf": "PDF",
        "print": "Natisni",
        "removeAllStates": "Odstrani vsa stanja",
        "removeState": "Odstrani stanje",
        "renameState": "Preimenuj stanje",
        "savedStates": "Shranjena stanja",
        "stateRestore": "Obnovi stanje",
        "updateState": "Posodobi stranje"
    },
    "datetime": {
        "amPm": {
            "0": "am",
            "1": "pm"
        },
        "hours": "Ure",
        "minutes": "Minute",
        "months": {
            "0": "Januar",
            "1": "Februar",
            "10": "November",
            "11": "December",
            "2": "Marec",
            "3": "April",
            "4": "Maj",
            "5": "Junij",
            "6": "Julij",
            "7": "Avgust",
            "8": "September",
            "9": "Oktober"
        },
        "next": "Naslednji",
        "previous": "Prejšnji",
        "seconds": "Sekunde",
        "unknown": "Neznano",
        "weekdays": {
            "0": "Ned",
            "1": "Pon",
            "2": "Tor",
            "3": "Sre",
            "4": "Čez",
            "5": "Pet",
            "6": "Sob"
        }
    },
    "decimal": "",
    "editor": {
        "close": "Prekliči",
        "create": {
            "button": "Dodaj",
            "submit": "Shrani",
            "title": "Dodaj nov vnos"
        },
        "edit": {
            "button": "Uredi",
            "submit": "Shrani",
            "title": "Uredi vnos"
        },
        "error": {
            "system": "Prišlo je do napake (Več informacij)."
        },
        "multi": {
            "info": "Izbrani elementi vsebujejo različne vrednosti za ta vnos. Če želite vse elemente za ta vnos urediti in nastaviti na enako vrednost, kliknite ali tapnite tukaj, sicer bodo ohranili svoje posamezne vrednosti.",
            "noMulti": "Ta vnos lahko urejate posamično, vendar ne del skupine.",
            "restore": "Razveljavi spremembe",
            "title": "Več vrednosti"
        },
        "remove": {
            "button": "Izbriši",
            "confirm": {
                "_": "Si prepričan, da želiš izbrisati %d vrstic?",
                "1": "Si prepričan, da želiš izbrisati 1 vrstico?"
            },
            "submit": "Izbriši",
            "title": "Izbriši"
        }
    },
    "emptyTable": "Nobenih podatkov ni na voljo",
    "info": "Prikazujem _START_ do _END_ od _TOTAL_ zapisov",
    "infoEmpty": "Prikazujem 0 do 0 od 0 zapisov",
    "infoFiltered": "(filtrirano od _MAX_ vseh zapisov)",
    "infoPostFix": "",
    "infoThousands": ".",
    "lengthMenu": "Prikaži _MENU_ zapisov",
    "loadingRecords": "Nalagam...",
    "processing": "Obdelujem ...",
    "search": "Išči:",
    "searchBuilder": {
        "add": "Dodaj pogoj",
        "button": {
            "_": "Kriteriji iskanja (%d)",
            "0": "Kriteriji iskanja"
        },
        "clearAll": "Izbriši vse",
        "condition": "Pogoj",
        "conditions": {
            "array": {
                "contains": "Vsebuje",
                "empty": "Prazno",
                "equals": "Je enako",
                "not": "Ni",
                "notEmpty": "Ni prazno",
                "without": "Brez"
            },
            "date": {
                "after": "Od",
                "before": "Do",
                "between": "Med",
                "empty": "Prazno",
                "equals": "Je enako",
                "not": "Ni enako",
                "notBetween": "Ni med",
                "notEmpty": "Ni prazno"
            },
            "number": {
                "between": "Med",
                "empty": "Prazno",
                "equals": "Je enako",
                "gt": "Večje kot",
                "gte": "Večje ali enako kot",
                "lt": "Manjše kot",
                "lte": "Manjše ali enako kot",
                "not": "Ni",
                "notBetween": "Ni med",
                "notEmpty": "Ni prazno"
            },
            "string": {
                "contains": "Vsebuje",
                "empty": "Prazno",
                "endsWith": "Se konča z",
                "equals": "Je enako",
                "not": "Ni",
                "notContains": "Ne vsebuje",
                "notEmpty": "Ni prazno",
                "notEndsWith": "Se ne konča z",
                "notStartsWith": "Se ne začne z",
                "startsWith": "Se začne z"
            }
        },
        "data": "Podatki",
        "deleteTitle": "Izbriši pravilo za filtriranje",
        "leftTitle": "Zamik v levo",
        "logicAnd": "in",
        "logicOr": "ali",
        "rightTitle": "Zamik v desno",
        "title": {
            "_": "Kriteriji iskanja (%d)",
            "0": "Kriteriji iskanja"
        },
        "value": "Vrednost"
    },
    "searchPanes": {
        "clearMessage": "Izbriši vse",
        "collapse": {
            "_": "Iskalnik (%d)",
            "0": "Iskalnik"
        },
        "collapseMessage": "Poklopi vse",
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "Ni vnosnega polja za iskanje",
        "loadMessage": "Nalagam iskalnik ...",
        "showMessage": "Prikaži vse",
        "title": "Aktivni filtri - %d"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "%d izbrana polja",
            "0": "",
            "1": "1 izbrano polje"
        },
        "columns": {
            "_": "%d izbrani stolpci",
            "0": "",
            "1": "1 izbran stolpec"
        },
        "rows": {
            "_": "2 izbrane vrstice",
            "0": "",
            "1": "1 izbrana vrstica"
        }
    },
    "stateRestore": {
        "creationModal": {
            "button": "Ustvari",
            "columns": {
                "search": "Iskanje po kolonah",
                "visible": "Vidnost kolon"
            },
            "name": "Ime:",
            "order": "Razvrščanje",
            "paging": "Trent",
            "scroller": "Pozicija drsnika",
            "search": "Iskanje",
            "searchBuilder": "Gradnik iskanja",
            "select": "Izbrano",
            "title": "Ustvari novo stanje",
            "toggleLabel": "Vključuje:"
        },
        "duplicateError": "Stanje s tem imenom že obstaja.",
        "emptyError": "Ime ne sme biti prazno.",
        "emptyStates": "Ni shranjenih stanj",
        "removeConfirm": "Ali ste prepričani, da želite odstraniti %s?",
        "removeError": "Napaka pri odstranjevanju stanja.",
        "removeJoiner": "in",
        "removeSubmit": "Odstrani",
        "removeTitle": "Odstrani stanje",
        "renameButton": "Preimenuj",
        "renameLabel": "Novo ime za %s:",
        "renameTitle": "Preimenuj stanje"
    },
    "thousands": ".",
    "zeroRecords": "Nobeden zapis ne ustreza"
};
}));
