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
        "orderable": "Ordenatzeko prest",
        "orderableRemove": "Ordenazioa kentzeko prest",
        "orderableReverse": "Alderantziz ordenatzeko prest",
        "paginate": {
            "first": "Lehenengoa",
            "last": "Azkena",
            "next": "Hurrengoa",
            "previous": "Aurrekoa"
        }
    },
    "autoFill": {
        "cancel": "Utzi",
        "fill": "Bete gelaxkak balio honekin <i>%d<i><\/i><\/i>",
        "fillHorizontal": "Bete gelaxkak horizontalki",
        "fillVertical": "Bete gelaxkak bertikalki",
        "info": ""
    },
    "buttons": {
        "collection": "Bilduma <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
        "colvis": "Zutabeen ikusgaitasuna",
        "colvisRestore": "Berrezarri ikusgaitasuna",
        "copy": "Kopiatu",
        "copyKeys": "Sakatu ctrl edo u2313 + C taularen datuak zure sistemaren arbelera kopiatuzeko. Sakatu mezu hau edo escape bertan behera uztekao, sa",
        "copySuccess": {
            "_": "%ds lerro arbelera kopiatu dira",
            "1": "Lerro bat arbelera kopiatu da"
        },
        "copyTitle": "Kopiatu arbelera",
        "createState": "Sortu egoera",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "Erakutsi %d lerro",
            "-1": "Erakutsi lerro guztiak",
            "1": "Lerro bat erakutsi"
        },
        "pdf": "PDF",
        "print": "Inprimatu",
        "removeAllStates": "Ezabatu egoera guztiak",
        "removeState": "Ezabatu",
        "renameState": "Berrizendatu",
        "savedStates": "Gordetako egoerak",
        "stateRestore": "%d egoera",
        "updateState": "Eguneratu"
    },
    "columnControl": {
        "buttons": {
            "searchClear": "Bilaketa garbitu"
        },
        "colVis": "Ikusgaitasuna",
        "colVisDropdown": "Ikusgaitasun menu zabalgarria",
        "dropdown": "menu zabalgarria",
        "list": {
            "all": "Gehitu",
            "empty": "Hustu",
            "none": "Bat ere ez",
            "search": "Bilatu..."
        },
        "orderAddAsc": "Gehitu goranzko ordenazioari",
        "orderAddDesc": "Gehitu beheranzko ordenazioari",
        "orderAsc": "Goranzka ordenatu",
        "orderClear": "Ordenazioa garbitu",
        "orderDesc": "Beheranzka ordenatu",
        "orderRemove": "Ordenazioa ezabatu",
        "reorder": "Berordenatu",
        "reorderLeft": "Ezkerrera mugitu",
        "reorderRight": "Eskumara mugitu",
        "search": {
            "datetime": {
                "empty": "Hutsik",
                "equal": "Berdina da",
                "greater": "Handiagoa",
                "less": "Txikiagoa",
                "notEmpty": "Ez dago hutsik",
                "notEqual": "Ezberdina da"
            },
            "number": {
                "empty": "Hutsik",
                "equal": "berdina da",
                "greater": "Handiagoa",
                "greaterOrEqual": "Handiago edo berdina",
                "less": "Txikiagoa",
                "lessOrEqual": "Txikiagoa edo berdina",
                "notEmpty": "Ez dago hutsik",
                "notEqual": "Ezberdina da"
            },
            "text": {
                "contains": "Hau dauka",
                "empty": "Hutsik",
                "ends": "Honekin amaitze da",
                "equal": "Berdina da",
                "notContains": "ez dauka hau",
                "notEmpty": "Ez dago hutsik",
                "notEqual": "Ezberdina da",
                "starts": "Honekin hasten da"
            }
        },
        "searchClear": "Bilaketa ezabatu",
        "searchDropdown": "Bilatu"
    },
    "datetime": {
        "amPm": {
            "0": "am",
            "1": "pm"
        },
        "hours": "Orduak",
        "minutes": "Minutu",
        "months": {
            "0": "Urtarril",
            "1": "Otsail ",
            "10": "Azaro ",
            "11": "Abendu ",
            "2": "Martxo ",
            "3": "Apiril ",
            "4": "Maiatz ",
            "5": "Ekain ",
            "6": "Uztail ",
            "7": "Abuztu ",
            "8": "Irail ",
            "9": "Urri "
        },
        "next": "Hurrengoa",
        "previous": "Aurrekoa",
        "seconds": "Segundoak",
        "unknown": "-",
        "weekdays": {
            "0": "Iga",
            "1": "Asl",
            "2": "Asr",
            "3": "Asz",
            "4": "Osg",
            "5": "Osr",
            "6": "Lar"
        }
    },
    "decimal": "",
    "editor": {
        "close": "Itxi",
        "create": {
            "button": "Berria",
            "submit": "Sortu",
            "title": "Sarrera berria sortu"
        },
        "edit": {
            "button": "Aldatu",
            "submit": "Gorde",
            "title": "Sarrera aldatu"
        },
        "error": {
            "system": "Sistemaren errorea gertatu da (&lt;a target=\"\\\" rel=\"nofollow\" href=\"\\\"&gt;More information&lt;\/a&gt;)."
        },
        "multi": {
            "info": "Aukeratutako elementuek hainbat balio dituzte eremu honentzat. Balio hori aldatu eta elementu guztiei berbera jartzeko egin klik edo sakatu hemen, bestela beren jatorrizko balioa gordeko dute.",
            "noMulti": "Elementu hau bakarka aldatu daiteke baina ez talde baten parte gisa.",
            "restore": "Desegin aldaketak",
            "title": "Balio asko"
        },
        "remove": {
            "button": "Ezabatu",
            "confirm": {
                "_": "Ziur zaude %d lerro ezabatu nahi dituzula?",
                "1": "Ziur zaude lerro 1 ezabatu nahi duzula?"
            },
            "submit": "Ezabatu",
            "title": "Ezabatu"
        }
    },
    "emptyTable": "Taula honetan ez dago datu erabilgarririk",
    "info": "_TOTAL_ erregistrotik _START_ - _END_ ikusgai",
    "infoEmpty": "Ez dago elementurik",
    "infoFiltered": "(guztira _MAX_ erregistrotik iragazita)",
    "infoPostFix": "",
    "infoThousands": ".",
    "lengthLabels": {
        "-1": "denak"
    },
    "lengthMenu": "Erakutsi _MENU_ erregistro",
    "loadingRecords": "Abiarazten...",
    "orderClear": "Garbitu ordenazioa guztiak",
    "processing": "Prozesatzen...",
    "search": "Bilatu:",
    "searchBuilder": {
        "add": "Gehitu baldintza",
        "button": {
            "_": "Bilaketa eraikitzailea (%d)",
            "0": "Bilaketa eraikitzailea"
        },
        "clearAll": "Garbitu",
        "condition": "Baldintza",
        "conditions": {
            "array": {
                "contains": "hau dauka",
                "empty": "hutsik",
                "equals": "da",
                "not": "ez da",
                "notEmpty": "ez dago hutsik",
                "without": "ez du hau"
            },
            "date": {
                "after": "Ondoren",
                "before": "Aurretik",
                "between": "Tartean",
                "empty": "Hutsik",
                "equals": "berdina da",
                "not": "ez da ",
                "notBetween": "ez dago tartean",
                "notEmpty": "ez dago hutsik"
            },
            "number": {
                "between": "Tartean",
                "empty": "Hutsik",
                "equals": "berdina da",
                "gt": "handiagoa",
                "gte": "handiagoa edo berdina",
                "lt": "txikiagoa",
                "lte": "txikiagoa edo berdina",
                "not": "ez da",
                "notBetween": "ez dago tartean",
                "notEmpty": "ez dago hutsik"
            },
            "string": {
                "contains": "Hau dauka",
                "empty": "Hutsik",
                "endsWith": "Honekin amaitzen da",
                "equals": "berdina da",
                "not": "ez da",
                "notContains": "ez dauka hau",
                "notEmpty": "ez dago hutsik",
                "notEndsWith": "ez da honekin amaitzen",
                "notStartsWith": "ez da honekin hasten",
                "startsWith": "Honekin hasten da"
            }
        },
        "data": "Datua",
        "deleteTitle": "Ezabatu iragazkiaren erregela",
        "leftTitle": "Irizpideari koska kendu",
        "logicAnd": "eta",
        "logicOr": "edo",
        "rightTitle": "Irizpideari koska handitu",
        "search": "Bilatu",
        "title": {
            "_": "Bilaketa eraikitzailea (%d)",
            "0": "Bilaketa eraikitzailea"
        },
        "value": "Balioa"
    },
    "searchPanes": {
        "clearMessage": "Garbitu",
        "collapse": {
            "_": "Bilaketa panelak (%d)",
            "0": "Bilaketa panelak"
        },
        "collapseMessage": "Itxi guztiak",
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyMessage": "Hutsik",
        "emptyPanes": "Ez dago bilaketa panelik",
        "loadMessage": "Bilaketa panelak kargatzen...",
        "showMessage": "Erakutsi guztiak",
        "title": "Aktibo dauden filtroak - %d"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "%d gelaxka aukeratuta",
            "0": "",
            "1": "Gelaxka 1 aukeratuta"
        },
        "columns": {
            "_": "%d zutabe aukeratuta",
            "0": "",
            "1": "Zutabe 1 aukeratuta"
        },
        "rows": {
            "_": "%d lerro aukeratuta",
            "0": "",
            "1": "Lerro bat aukeratuta"
        }
    },
    "stateRestore": {
        "creationModal": {
            "button": "Sortu",
            "columns": {
                "search": "Zutabe bilaketa",
                "visible": "Zutabe ikusgaitasuna"
            },
            "name": "Izena",
            "order": "Ordenazioa",
            "paging": "Orrikatzea",
            "scroller": "Desplazamentu posizioa",
            "search": "Bilaketa",
            "searchBuilder": "Bilaketa aurreratua",
            "select": "Aukeraketa",
            "title": "Egoera berria sortu",
            "toggleLabel": "Gehitu:"
        },
        "duplicateError": "Izen berdina duen egoera bat existitzen da jada",
        "emptyError": "Izena ezin da hutsik egon",
        "emptyStates": "Ez daude Egoerarik gordeta",
        "removeConfirm": "Ziur al zaude %s hau ezabatu nahi duzula?",
        "removeError": "Lerroa ezabatzean errorea",
        "removeJoiner": "eta",
        "removeSubmit": "Ezabatu",
        "removeTitle": "Egoera ezabatu",
        "renameButton": "Izena aldatu",
        "renameLabel": "%s egoerarentzako izen berria",
        "renameTitle": "Egoerari izena aldatu"
    },
    "thousands": ".",
    "zeroRecords": "Ez da emaitzarik aurkitu"
};
}));
