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
        "orderable": "Aktivovať triedenie",
        "orderableRemove": "Aktivovať odstránenie triedenia",
        "orderableReverse": "Aktivovať inverzné triedenie",
        "paginate": {
            "first": "Prvá",
            "last": "Posledná",
            "next": "Nasledujúca",
            "previous": "Predchádzajúca"
        }
    },
    "autoFill": {
        "cancel": "Zrušiť",
        "fill": "Vyplniť všetky bunky s <i>%d<i><\/i><\/i>",
        "fillHorizontal": "Vyplniť bunky horizontálne",
        "fillVertical": "Vyplniť bunky vertikálne",
        "info": ""
    },
    "buttons": {
        "collection": "Kolekcia <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
        "colvis": "Viditeľnosť stĺpcov",
        "colvisRestore": "Obnoviť viditeľnosť",
        "copy": "Kopírovať",
        "copyKeys": "Stlačte CTRL alebo u2318 + C pre kopírovanie dát tabuľky do systémovej schránky. Pre zrušenie kliknite na túto správu alebo stlačte ESC.",
        "copySuccess": {
            "_": "Skopírovaných %d riadkov do schránky",
            "1": "Skopírovaný 1 riadok do schránky"
        },
        "copyTitle": "Kopírovať do schránky",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "Zobraziť %d riadkov",
            "-1": "Zobraziť všetky riadky"
        },
        "pdf": "PDF",
        "print": "Tlačiť"
    },
    "datetime": {
        "amPm": {
            "0": "Dopoludnia",
            "1": "Popoludní"
        },
        "hours": "Hodiny",
        "minutes": "Minúty",
        "months": {
            "0": "Január",
            "1": "Feburár",
            "10": "November",
            "11": "December",
            "2": "Marec",
            "3": "Apríl",
            "4": "Máj",
            "5": "Jún",
            "6": "Júl",
            "7": "August",
            "8": "September",
            "9": "Október"
        },
        "next": "Ďalší",
        "previous": "Predchádzajúci",
        "seconds": "Sekundy",
        "unknown": "Neznámy",
        "weekdays": {
            "0": "Nedeľa",
            "1": "Pondelok",
            "2": "Utorok",
            "3": "Streda",
            "4": "Štvrtok",
            "5": "Piatok",
            "6": "Sobota"
        }
    },
    "decimal": "",
    "editor": {
        "close": "Zavrieť",
        "create": {
            "button": "Nový",
            "submit": "Vytvoriť",
            "title": "Vytvoriť nový záznam"
        },
        "edit": {
            "button": "Editovať",
            "submit": "Aktualizovať",
            "title": "Editovať záznam"
        },
        "error": {
            "system": "Vyskytla sa systémová chyba."
        },
        "multi": {
            "info": "Zvolený prvok obsahuje rozdielne hodnoty pre tento vstup. Na editovanie a nastavenie všetkých prvkov pre tento vstup na rovnakú hodnotu, kliknite alebo klepnite tu, inak si zachovajú individuálne hodnoty.",
            "noMulti": "Tento vstup môže byť editovaný samostatne, ale nie ako súčasť skupiny.",
            "restore": "Vrátiť späť zmeny",
            "title": "Niekoľko hodnôt"
        },
        "remove": {
            "button": "Vymazať",
            "confirm": {
                "_": "Určite chcete vymazať %d riadkov?",
                "1": "Určite chcete vymazať 1 riadok?"
            },
            "submit": "Vymazať",
            "title": "Vymazať"
        }
    },
    "emptyTable": "Nie sú k dispozícii žiadne dáta.",
    "info": "Záznamy _START_ až _END_ z celkom _TOTAL_",
    "infoEmpty": "Záznamy 0 až 0 z celkom 0 ",
    "infoFiltered": "(vyfiltrované spomedzi _MAX_ záznamov)",
    "infoPostFix": "",
    "infoThousands": " ",
    "lengthMenu": "Zobraz _MENU_ záznamov",
    "loadingRecords": "Načítavam...",
    "orderClear": "Zrušiť zoradenie",
    "processing": "Spracúvam...",
    "search": "Hľadať:",
    "searchBuilder": {
        "add": "Pridať Podmienku",
        "button": {
            "_": "Rozšírený filter (%d)",
            "0": "Rozšírený filter"
        },
        "clearAll": "Zmazať všetko",
        "condition": "Podmienka",
        "conditions": {
            "array": {
                "contains": "Obsahuje",
                "empty": "Prázdne",
                "equals": "Rovná sa",
                "not": "Nie je",
                "notEmpty": "Nie je prázdne",
                "without": "Bez"
            },
            "date": {
                "after": "Po",
                "before": "Pred",
                "between": "Medzi",
                "empty": "Prázdne",
                "equals": "Rovná sa",
                "not": "Nie je",
                "notBetween": "Nie je medzi",
                "notEmpty": "Nie je prázdne"
            },
            "number": {
                "between": "Medzi",
                "empty": "Prázdne",
                "equals": "Rovná sa",
                "gt": "Väčšie ako",
                "gte": "Väčšie alebo rovnaké ako",
                "lt": "Menšie ako",
                "lte": "Menšie alebo rovnaké ako",
                "not": "Nie",
                "notBetween": "Nie medzi",
                "notEmpty": "Nie prázdne"
            },
            "string": {
                "contains": "Obsahuje",
                "empty": "Prázdne",
                "endsWith": "Končí s",
                "equals": "Rovná sa",
                "not": "Nie je",
                "notContains": "Neobsahuje",
                "notEmpty": "Nie je prázdne",
                "notEndsWith": "Nekončí s",
                "notStartsWith": "Nezačína s",
                "startsWith": "Začína s"
            }
        },
        "data": "Dáta",
        "deleteTitle": "Vymazať filtrovacie pravidlo",
        "leftTitle": "Podmienky odseku",
        "logicAnd": "A",
        "logicOr": "Alebo",
        "rightTitle": "Podmienky v odseku",
        "title": {
            "_": "Rozšírený filter (%d)",
            "0": "Rozšírený filter"
        },
        "value": "Hodnota"
    },
    "searchPanes": {
        "clearMessage": "Vymazať všetko",
        "collapse": {
            "_": "Vyhľadávacie Panely (%d)",
            "0": "Vyhľadávacie Panely"
        },
        "collapseMessage": "Zbaliť všetko",
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "Žiadne Vyhľadávacie Panely",
        "loadMessage": "Načítavam Vyhľadávacie Panely",
        "showMessage": "Zobraziť všetko",
        "title": "Aktívnych Filtrov - %"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "%d vybraných buniek",
            "0": "",
            "1": "1 zvolená bunka"
        },
        "columns": {
            "_": "%d vybraných stĺpcov",
            "0": "",
            "1": "1 vybraný stĺpec"
        },
        "rows": {
            "0": ""
        }
    },
    "stateRestore": {
        "button": {
            "create": "Vytvoriť stav",
            "edit": "Aktualizovať",
            "remove": "Odstrániť",
            "statesList": "Uložené stavy",
            "statesRemoveAll": "Vymazať všetky stavy"
        },
        "create": {
            "title": "Vytvoriť nový stav"
        },
        "remove": {
            "button": "Odstrániť",
            "message": {
                "_": "Ste si istí, že chcete odstrániť stav %s?"
            },
            "title": "Odstrániť stav"
        }
    },
    "thousands": " ",
    "zeroRecords": "Nenašli sa žiadne vyhovujúce záznamy"
};
}));
