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
        "orderable": "Activar per ordenar",
        "orderableRemove": "Activar per llevar l'ordenació",
        "orderableReverse": "Activar per ordenar de forma inversa",
        "paginate": {
            "first": "Primer",
            "last": "Darrer",
            "next": "Següent",
            "previous": "Anterior"
        }
    },
    "autoFill": {
        "cancel": "Cancel·lar",
        "fill": "Omple totes les cel·les amb <i>%d<\/i>",
        "fillHorizontal": "Omple les cel·les horitzontalment",
        "fillVertical": "Omple les cel·les verticalment",
        "info": ""
    },
    "buttons": {
        "collection": "Col·lecció",
        "colvis": "Columnes",
        "colvisRestore": "Restaurar visibilitat",
        "copy": "Copia",
        "copyKeys": "Pressiona ctrl o poma + C per copiar les dades de la tabla al teu portapaper",
        "copySuccess": {
            "_": "%d files copiades",
            "1": "1 fila copiada"
        },
        "copyTitle": "Copia al portapapers",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "Mostra %d files",
            "-1": "Mostra totes les files",
            "1": "Mostra 1 fila"
        },
        "pdf": "PDF",
        "print": "Imprimeix"
    },
    "columnControl": {
        "buttons": {
            "searchClear": "Neteja la cerca"
        },
        "colVis": "Visibilitat",
        "colVisDropdown": "Visibilidad de la columna",
        "dropdown": "Més...",
        "list": {
            "all": "Selecciona-ho tot",
            "empty": "Buida",
            "none": "Deselecciona-ho tot",
            "search": "Cerca..."
        },
        "orderAddAsc": "Afegeix a ordenació ascendent",
        "orderAddDesc": "Afegeix a ordenació descendent",
        "orderAsc": "Ordenar ascendentment",
        "orderClear": "Neteja l'ordanació",
        "orderDesc": "Ordenar descendentment",
        "orderRemove": "Borrar de l'ordenació",
        "reorder": "Reordenar columnes",
        "reorderLeft": "Mou la columna cap a l'esquerra",
        "reorderRight": "Mou la columna cap a la dreta",
        "search": {
            "number": {
                "empty": "Buit",
                "equal": "Igual a",
                "greater": "Major que",
                "greaterOrEqual": "Major o igual",
                "less": "Menor que",
                "lessOrEqual": "Menor o igual",
                "notEmpty": "No buit",
                "notEqual": "Diferent de"
            },
            "text": {
                "contains": "Conté",
                "ends": "Acaba amb",
                "notContains": "No conté",
                "starts": "Comença amb"
            }
        },
        "searchClear": "Borrar al cerca",
        "searchDropdown": "Cerca"
    },
    "datetime": {
        "amPm": {
            "0": "am",
            "1": "pm"
        },
        "hours": "Hora",
        "minutes": "Minuts",
        "months": {
            "0": "Gener",
            "1": "Febrer",
            "10": "Novembre",
            "11": "Desembre",
            "2": "Març",
            "3": "Abril",
            "4": "Maig",
            "5": "Juny",
            "6": "Juliol",
            "7": "Agost",
            "8": "Setembre",
            "9": "Octubre"
        },
        "next": "Següent",
        "previous": "Anterior",
        "seconds": "Segons",
        "unknown": "Desconegut",
        "weekdays": {
            "0": "Dg",
            "1": "Dl",
            "2": "Dt",
            "3": "Dc",
            "4": "Dj",
            "5": "Dv",
            "6": "Ds"
        }
    },
    "decimal": "",
    "editor": {
        "close": "Tancar",
        "create": {
            "button": "Nou",
            "submit": "Crear",
            "title": "Crear nova entrada"
        },
        "edit": {
            "button": "Editar",
            "submit": "Actualitzar",
            "title": "Editar entrada"
        },
        "error": {
            "system": "S'ha produït un error al sistema (<a target=\"\\\" rel=\"\\ nofollow\" href=\"\\\">Més informació&lt;\\\/a&gt;).<\/a>"
        },
        "multi": {
            "info": "El ítems seleccionats contenen diferents valors per aquesta entrada. Per editar i configurar tots els ítems per a aquesta entrada al mateix valor, prem o clica tabular aquí, sino, mantindran els seus valors individuals",
            "noMulti": "Aquest camp pot ser editat individualment; però no com a part d'un grup",
            "restore": "Desfer els canvis",
            "title": "Múltiples valors"
        },
        "remove": {
            "button": "Eliminar",
            "confirm": {
                "_": "Està segur de voler eliminar %d files?",
                "1": "Està segur de voler eliminar 1 fila?"
            },
            "submit": "Eliminar",
            "title": "Eliminar"
        }
    },
    "emptyTable": "No hi ha registres disponibles en aquesta taula",
    "info": "Mostrant del _START_ al _END_ d'un total de _TOTAL_ registres",
    "infoEmpty": "No hi ha registres disponibles",
    "infoFiltered": "(filtrat de _MAX_ registres)",
    "infoPostFix": "",
    "infoThousands": ".",
    "lengthLabels": {
        "-1": "Totes"
    },
    "lengthMenu": "Mostra _MENU_ registres",
    "loadingRecords": "Carregant...",
    "orderClear": "Netejar ordenació de toda la taula",
    "processing": "Processant...",
    "search": "Cerca:",
    "searchBuilder": {
        "add": "Afegir condició",
        "button": {
            "_": "Constructor de cerca (%d)",
            "0": "Constructor de cerca"
        },
        "clearAll": "Eliminar tot",
        "condition": "Condició",
        "conditions": {
            "array": {
                "contains": "Conté",
                "empty": "Buit",
                "equals": "Iguals",
                "not": "No",
                "notEmpty": "No buit",
                "without": "Sense"
            },
            "date": {
                "after": "Després",
                "before": "Abans",
                "between": "Entre",
                "empty": "Buit",
                "equals": "Iguals",
                "not": "No",
                "notBetween": "No entre",
                "notEmpty": "No buit"
            },
            "number": {
                "between": "Entre",
                "empty": "Buit",
                "equals": "Iguals",
                "gt": "Major que",
                "gte": "Major o igual a",
                "lt": "Menor que",
                "lte": "Menor o igual a",
                "not": "No",
                "notBetween": "No entre",
                "notEmpty": "No buit"
            },
            "string": {
                "contains": "Conté",
                "empty": "Buit",
                "endsWith": "Finalitza amb",
                "equals": "Iguals",
                "not": "No",
                "notContains": "No inclou",
                "notEmpty": "No buit",
                "notEndsWith": "No acaba amb",
                "notStartsWith": "No comença amb",
                "startsWith": "Comença amb"
            }
        },
        "data": "Dades",
        "deleteTitle": "Esborrar regla de filtrat",
        "leftTitle": "Criteri de desindentació",
        "logicAnd": "I",
        "logicOr": "O",
        "rightTitle": "Criteri d'indentació",
        "search": "Cercar",
        "title": {
            "_": "Constructor de cerca (%d)",
            "0": "Constructor de cerca"
        },
        "value": "Valor",
        "valueJoiner": "i"
    },
    "searchPanes": {
        "clearMessage": "Esborrar tot",
        "collapse": {
            "_": "Panells de cerca (%d)",
            "0": "Panells de cerca"
        },
        "collapseMessage": "Tancar-ho tot",
        "count": "{total}",
        "countFiltered": "{mostrat} ({total})",
        "emptyMessage": "&lt;em&gt;Buit&lt;\/em&gt;",
        "emptyPanes": "No hi ha panells de cerca",
        "loadMessage": "Carregant panells de cerca",
        "showMessage": "Mostrar-ho tot",
        "title": "Filtres actius - %d"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "%d cel·les seleccionades",
            "0": "",
            "1": "S'ha seleccionat 1 cel·la"
        },
        "columns": {
            "_": "%d columnes seleccionades",
            "0": "",
            "1": "1 columna seleccionada"
        },
        "rows": {
            "_": "%d files seleccionades",
            "0": "",
            "1": "1 fila seleccionada"
        }
    },
    "stateRestore": {
        "button": {
            "create": "Crear Estat",
            "edit": "Actualitza",
            "remove": "Borra",
            "statesList": "Estats gravats",
            "statesRemoveAll": "Borrar tots els Estats"
        },
        "create": {
            "title": "Crear nou Estat"
        },
        "remove": {
            "button": "Eliminar",
            "message": {
                "_": "Segur que vol eliminar %s?"
            },
            "title": "Borrar Estat"
        }
    },
    "thousands": ".",
    "zeroRecords": "No s'han trobat registres"
};
}));
