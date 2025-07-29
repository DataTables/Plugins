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
            "first": "Prima pagină",
            "last": "Ultima pagină",
            "next": "Pagina următoare",
            "previous": "Pagina precedentă"
        }
    },
    "autoFill": {
        "cancel": "Anulează",
        "fill": "Completează toate celulele cu <i>%d<\/i>",
        "fillHorizontal": "Completeză celulele orizonal",
        "fillVertical": "Completează celulele vertical",
        "info": ""
    },
    "buttons": {
        "collection": "Colecție <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
        "colvis": "Vizibilitate coloane",
        "colvisRestore": "Resetare vizibilitate",
        "copy": "Copie",
        "copyKeys": "Apasă ctrl sau u2318 + C pentru a copia datele din tabel în clipboard-ul sistemului.<br \/><br \/>Pentru a anula, dați clic pe acest mesaj sau apăsați pe Escape.",
        "copySuccess": {
            "_": "Copiat %ds rânduri în clipboard",
            "1": "Copiat un rând în clipboard"
        },
        "copyTitle": "Copie în Clipboard",
        "createState": "Creează Stare",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "Arată %d rânduri",
            "-1": "Arată toate rândurile"
        },
        "pdf": "PDF",
        "print": "Imprimă",
        "removeAllStates": "Înlătură Toate Stările",
        "removeState": "Înlătură",
        "renameState": "Redenumește",
        "savedStates": "Salvează Stări",
        "stateRestore": "Starea %d",
        "updateState": "Reincarcă"
    },
    "datetime": {
        "amPm": {
            "0": "AM",
            "1": "PM"
        },
        "hours": "Ore",
        "minutes": "Minute",
        "months": {
            "0": "Ianuarie",
            "1": "Februarie",
            "10": "Noiembrie",
            "11": "Decembrie",
            "2": "Martie",
            "3": "Aprilie",
            "4": "Mai",
            "5": "Iunie",
            "6": "Iulie",
            "7": "August",
            "8": "Septembrie",
            "9": "Octombrie"
        },
        "next": "Următoare",
        "previous": "Precedentă",
        "seconds": "Secunde",
        "unknown": "Necunoscut",
        "weekdays": {
            "0": "Lun",
            "1": "Mar",
            "2": "Mie",
            "3": "Joi",
            "4": "Vin",
            "5": "Sâm",
            "6": "Dum"
        }
    },
    "decimal": "",
    "editor": {
        "close": "Închide",
        "create": {
            "button": "Nou",
            "submit": "Creează",
            "title": "Creează o intrare nouă"
        },
        "edit": {
            "button": "Editează",
            "submit": "Editează",
            "title": "Editează rândul"
        },
        "error": {
            "system": "A apărut o eroare de sistem (Mai multe informatii)."
        },
        "multi": {
            "info": "Elementele selectate conțin valori diferite pentru această intrare. Pentru a edita și a seta toate elementele pentru această intrare la aceeași valoare, faceți clic sau atingeți aici, altfel își vor păstra valorile individuale.",
            "noMulti": "Această intrare poate fi editată individual, dar nu face parte dintr-un grup.",
            "restore": "Anulează modificările",
            "title": "Valori multiple"
        },
        "remove": {
            "button": "Șterge",
            "confirm": {
                "_": "Sigur doriți să ștergeți %d rânduri?",
                "1": "Sigur doriți să ștergeți 1 rând?"
            },
            "submit": "Șterge",
            "title": "Șterge"
        }
    },
    "emptyTable": "Nu există date în tabel",
    "info": "Afișate de la _START_ la _END_ din _TOTAL_ înregistrări",
    "infoEmpty": "Afișate de la 0 la 0 din 0 înregistrări",
    "infoFiltered": "(filtrate dintr-un total de _MAX_ înregistrări)",
    "infoPostFix": "",
    "infoThousands": ".",
    "lengthMenu": "Afișează _MENU_ înregistrări pe pagină",
    "loadingRecords": "Încarcă...",
    "processing": "Procesează...",
    "search": "Caută:",
    "searchBuilder": {
        "add": "Adaugă condiție",
        "button": {
            "_": "Generator de căutare (%d)",
            "0": "Generator de căutare"
        },
        "clearAll": "Șterge tot",
        "condition": "Condiție",
        "conditions": {
            "array": {
                "contains": "Conține",
                "empty": "Gol",
                "equals": "Egal cu",
                "not": "Nu este",
                "notEmpty": "Nu este gol",
                "without": "Fără"
            },
            "date": {
                "after": "După",
                "before": "Înainte de",
                "between": "Între",
                "empty": "Gol",
                "equals": "Egal",
                "not": "Nu este",
                "notBetween": "Nu este între",
                "notEmpty": "Nu este goală"
            },
            "number": {
                "between": "Între",
                "empty": "Gol",
                "equals": "Egal",
                "gt": "Mai mare de",
                "gte": "Mai mare sau egal cu",
                "lt": "Mai puțin de",
                "lte": "Mai pușin sau egal cu",
                "not": "Nu este",
                "notBetween": "Nu este între",
                "notEmpty": "Nu este gol"
            },
            "string": {
                "contains": "Conține",
                "empty": "Este gol",
                "endsWith": "Se termină cu",
                "equals": "Este la fel cu",
                "not": "Nu este",
                "notContains": "Nu conține",
                "notEmpty": "Nu este gol",
                "notEndsWith": "Nu se termină cu",
                "notStartsWith": "Nu începe cu",
                "startsWith": "Începe cu"
            }
        },
        "data": "Data",
        "deleteTitle": "Ștergeți regula de filtrare",
        "leftTitle": "Criterii Outdent",
        "logicAnd": "Și",
        "logicOr": "Sau",
        "rightTitle": "Criterii de indentare",
        "title": {
            "_": "Generator de căutare (%d)",
            "0": "Generator de căutare"
        },
        "value": "Valoare"
    },
    "searchPanes": {
        "clearMessage": "Șterge tot",
        "collapse": {
            "_": "Panou căutare (%d)",
            "0": "Panou căutare"
        },
        "collapseMessage": "Închide toate",
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "Fără panouri de căutare",
        "loadMessage": "Ăncarcă panouri de căutare",
        "showMessage": "Arată toate",
        "title": "Filtre Activ - %d"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "%d celule selectate",
            "0": "",
            "1": "1 celulă selectată"
        },
        "columns": {
            "_": "%d coloane selectate",
            "0": "",
            "1": "1 coloană selectată"
        },
        "rows": {
            "_": "%d rânduri selectate",
            "0": "",
            "1": "1 rând selectat"
        }
    },
    "stateRestore": {
        "creationModal": {
            "button": "Creează",
            "columns": {
                "search": "Căutare în coloană",
                "visible": "Vizibilitate coloană"
            },
            "name": "Nume:",
            "order": "Ordonare",
            "paging": "Paginație",
            "scroller": "Poziție Scroll",
            "search": "Căutare",
            "searchBuilder": "Creează Căutare",
            "select": "Selectări",
            "title": "Creează o nouă Stare",
            "toggleLabel": "Include:"
        },
        "duplicateError": "O stare cu acest nume există deja.",
        "emptyError": "Numele nu poate fi gol.",
        "emptyStates": "Stare nesalvată",
        "removeConfirm": "Sunteți sigur că vreți sa ștergeți %s?",
        "removeError": "Ștergere stare eșuată.",
        "removeJoiner": "și",
        "removeSubmit": "Șterge",
        "removeTitle": "Sterge Starea",
        "renameButton": "Redenumește",
        "renameLabel": "Nume nou pentru %s:",
        "renameTitle": "Redenumește Starea"
    },
    "thousands": ".",
    "zeroRecords": "Nu am găsit nimic - ne pare rău"
};
}));
