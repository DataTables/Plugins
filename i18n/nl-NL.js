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
            "first": "Eerste",
            "last": "Laatste",
            "next": "Volgende",
            "previous": "Vorige"
        }
    },
    "autoFill": {
        "cancel": "Annuleren",
        "fill": "Vul alle cellen met <i>%d<\/i>",
        "fillHorizontal": "Vul cellen horizontaal",
        "fillVertical": "Vul cellen verticaal",
        "info": ""
    },
    "buttons": {
        "collection": "Verzameling",
        "colvis": "Kolom zichtbaarheid",
        "colvisRestore": "Herstel zichtbaarheid",
        "copy": "Kopieer",
        "copyKeys": "Klik ctrl of u2318 + C om de tabeldata to kopiëren naar je klembord. Om te annuleren klik hier of klik op escape.",
        "copySuccess": {
            "_": "%ds regels naar klembord gekopieerd",
            "1": "1 regel naar klembord gekopieerd"
        },
        "copyTitle": "Kopieer naar klembord",
        "createState": "Maak staat",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "Toon %d regels",
            "-1": "Toon alle regels"
        },
        "pdf": "PDF",
        "print": "Print",
        "removeAllStates": "Verwijder alle",
        "removeState": "Verwijder",
        "renameState": "Hernoem",
        "savedStates": "Opgeslagen",
        "stateRestore": "Preset %d",
        "updateState": "Bijwerken"
    },
    "datetime": {
        "amPm": {
            "0": "vm",
            "1": "nm"
        },
        "hours": "Uur",
        "minutes": "Minuut",
        "months": {
            "0": "Januari",
            "1": "Februari",
            "10": "November",
            "11": "December",
            "2": "Maart",
            "3": "April",
            "4": "Mei",
            "5": "Juni",
            "6": "Juli",
            "7": "Augustus",
            "8": "September",
            "9": "Oktober"
        },
        "next": "Volgende",
        "previous": "Vorige",
        "seconds": "Seconde",
        "unknown": "Onbekend",
        "weekdays": {
            "0": "Zo",
            "1": "Ma",
            "2": "Di",
            "3": "Wo",
            "4": "Do",
            "5": "Vr",
            "6": "Za"
        }
    },
    "decimal": "",
    "editor": {
        "close": "Sluiten",
        "create": {
            "button": "Nieuw",
            "submit": "Toevoegen",
            "title": "Voeg nieuwe gegevens toe"
        },
        "edit": {
            "button": "Wijzigen",
            "submit": "Wijzigen",
            "title": "Wijzig gegevens"
        },
        "error": {
            "system": "Er is een fout gebeurd"
        },
        "multi": {
            "info": "De geselecteerde items bevatten verschillende waarden voor deze invoer. Om alle items voor deze invoer op dezelfde waarde te zetten, klik of tik hier, zoniet zullen de individuele waarden behouden blijven.",
            "noMulti": "Deze invoer kan individueel gewijzigd worden, maar niet als deel van een groep.",
            "restore": "Wijzigingen ongedaan maken",
            "title": "Meerdere waarden"
        },
        "remove": {
            "button": "Verwijderen",
            "confirm": {
                "_": "Bent u zeker dat u %d rijen wil verwijderen?",
                "1": "Bent u zeker dat u 1 rij wil verwijderen?"
            },
            "submit": "Verwijder",
            "title": "Verwijder"
        }
    },
    "emptyTable": "Geen resultaten aanwezig in de tabel",
    "info": "_START_ tot _END_ van _TOTAL_ resultaten",
    "infoEmpty": "Geen resultaten om weer te geven",
    "infoFiltered": " (gefilterd uit _MAX_ resultaten)",
    "infoPostFix": "",
    "infoThousands": ".",
    "lengthMenu": "_MENU_ resultaten weergeven",
    "loadingRecords": "Een moment geduld aub - bezig met laden...",
    "processing": "Verwerken...",
    "search": "Zoeken:",
    "searchBuilder": {
        "add": "Toevoegen",
        "button": {
            "_": "Zoekwizard (%d)",
            "0": "Zoekwizard"
        },
        "clearAll": "Verwijder alles",
        "condition": "Conditie",
        "conditions": {
            "array": {
                "contains": "Bevat",
                "empty": "Leeg",
                "equals": "Gelijk aan",
                "not": "Niet",
                "notEmpty": "Niet leeg",
                "without": "Zonder"
            },
            "date": {
                "after": "Na",
                "before": "Voor",
                "between": "Tussen",
                "empty": "Leeg",
                "equals": "Gelijk aan",
                "not": "Niet",
                "notBetween": "Niet tussen",
                "notEmpty": "Niet leeg"
            },
            "number": {
                "between": "Tussen",
                "empty": "Leeg",
                "equals": "Gelijk aan",
                "gt": "Groter dan",
                "gte": "Groter dan of gelijk aan",
                "lt": "Kleiner dan",
                "lte": "kleiner dan of gelijk aan",
                "not": "Niet",
                "notBetween": "Niet tussen",
                "notEmpty": "Niet leeg"
            },
            "string": {
                "contains": "Bevat",
                "empty": "Leeg",
                "endsWith": "Eindigt met",
                "equals": "Gelijk aan",
                "not": "Niet",
                "notContains": "Zonder",
                "notEmpty": "Niet leeg",
                "notEndsWith": "Eindigt niet met",
                "notStartsWith": "Begint niet met",
                "startsWith": "Start met"
            }
        },
        "data": "Data",
        "deleteTitle": "Verwijder",
        "leftTitle": "Afwijkende criteria",
        "logicAnd": "En",
        "logicOr": "Of",
        "rightTitle": "Criteria inspringen",
        "title": {
            "_": "Zoekwizard (%d) ",
            "0": "Zoekwizard"
        },
        "value": "Waarde"
    },
    "searchPanes": {
        "clearMessage": "Alles leegmaken",
        "collapse": {
            "_": "Zoekpanelen (%d)",
            "0": "Zoekpanelen"
        },
        "collapseMessage": "Instorten",
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "Geen zoekpanelen",
        "loadMessage": "Zoekpanelen laden...",
        "showMessage": "Alles weergeven",
        "title": "%d filters actief"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "%d cellen geselecteerd",
            "0": "",
            "1": "1 cel geselecteerd"
        },
        "columns": {
            "_": "%d kolommen geselecteerd",
            "0": "",
            "1": "1 kolom geselecteerd"
        },
        "rows": {
            "_": "%d rijen geselecteerd",
            "0": "",
            "1": "1 rij geselecteerd"
        }
    },
    "stateRestore": {
        "creationModal": {
            "button": "Aanmaken",
            "columns": {
                "search": "Zoeken in kolom",
                "visible": "Kolom tonen"
            },
            "name": "Naam",
            "order": "Sorteervolgorde",
            "paging": "Paginering",
            "scroller": "Meescrollen",
            "search": "Zoeken",
            "searchBuilder": "SearchBuilder",
            "select": "Selecteer",
            "title": "Nieuwe staat aanmaken",
            "toggleLabel": "Bevat"
        },
        "duplicateError": "Staat bestaat al",
        "emptyError": "Naam kan niet leeg zijn",
        "emptyStates": "Geen beschikbare staten",
        "removeConfirm": "Weet u zeker dat u deze wil verwijderen:",
        "removeError": "De verwijdering is mislukt",
        "removeJoiner": "en",
        "removeSubmit": "Verwijder",
        "removeTitle": "Verwijder staat",
        "renameButton": "Hernoem",
        "renameLabel": "Nieuwe naam voor staat",
        "renameTitle": "Hernoem staat"
    },
    "thousands": ".",
    "zeroRecords": "Geen resultaten gevonden"
};
}));
