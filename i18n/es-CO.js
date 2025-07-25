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
            "first": "Primero",
            "last": "Último",
            "next": "Siguiente",
            "previous": "Anterior"
        }
    },
    "autoFill": {
        "cancel": "Cancelar",
        "fill": "Llenar",
        "fillHorizontal": "Llenar celdas horizontalmente",
        "fillVertical": "Llenar celdas verticalemente",
        "info": ""
    },
    "buttons": {
        "collection": "Colección",
        "colvis": "Visibilidad Columna",
        "colvisRestore": "Restaurar Visibilidad",
        "copy": "Copiar",
        "copyKeys": "Presione Inicio + C para copiar la información de la tabla.  Para Cancelar hacer click en este mensaje para o ESC",
        "copySuccess": {
            "_": "Copiado con exito",
            "1": "Fila copiada con exito"
        },
        "copyTitle": "Tabla Copiada",
        "createState": "Crear estado",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "ver %d filas",
            "-1": "Ver todas las Filas"
        },
        "pdf": "PDF",
        "print": "Imprimir",
        "removeAllStates": "Eliminar todos los estados",
        "removeState": "Eliminar",
        "renameState": "Renombrar",
        "savedStates": "Estados Guardados",
        "stateRestore": "Estado %d",
        "updateState": "Actualizar"
    },
    "datetime": {
        "amPm": {
            "0": "am",
            "1": "pm"
        },
        "hours": "Hora",
        "minutes": "Minuto",
        "months": {
            "0": "Enero",
            "1": "Febrero",
            "10": "Noviembre",
            "11": "Diciembre",
            "2": "Marzo",
            "3": "Abril",
            "4": "Mayo",
            "5": "Junio",
            "6": "Julio",
            "7": "Agosto",
            "8": "Septiembre",
            "9": "Octubre"
        },
        "next": "Siguiente",
        "previous": "Anterior",
        "seconds": "Segundo",
        "unknown": "Desconocido",
        "weekdays": {
            "0": "Dom",
            "1": "Lun",
            "2": "Mar",
            "3": "Mié",
            "4": "Jue",
            "5": "Vie",
            "6": "Sáb"
        }
    },
    "decimal": "",
    "editor": {
        "close": "Cerrar",
        "create": {
            "button": "Nuevo",
            "submit": "Crear",
            "title": "Crear nueva entrada"
        },
        "edit": {
            "button": "Editar",
            "submit": "Actualizar",
            "title": "Editar Registro"
        },
        "error": {
            "system": "Ha ocurrido un error del sistema ( Mas Información)"
        },
        "multi": {
            "info": "Los elementos seleccionados contienen diferentes valores para esta entrada. Para editar y configurar todos los elementos de esta entrada en el mismo valor, haga clic o toque aquí, de lo contrario, conservar sus valores individuales.",
            "noMulti": "Múltiples valores",
            "restore": "Deshacer cambios",
            "title": "Valores multiples"
        },
        "remove": {
            "button": "Borrar",
            "confirm": {
                "_": "Esta seguro de eliminar %d registros",
                "1": "Esta seguro de eliminar 1 registro"
            },
            "submit": "Borrar",
            "title": "Borrar"
        }
    },
    "emptyTable": "Tabla Vacia",
    "info": "Mostrando _START_ a _END_ de _TOTAL_ entradas",
    "infoEmpty": "Sin informacion",
    "infoFiltered": "filtrado de _MAX_ entradas totales",
    "infoPostFix": "",
    "infoThousands": ",",
    "lengthMenu": "Mostrando _MENU_ Entradas",
    "loadingRecords": "Cargando...",
    "processing": "Procesando...",
    "search": "Buscar:",
    "searchBuilder": {
        "add": "Agragar condición",
        "button": {
            "_": "Creador de búsquedas (%d)",
            "0": "Creador de búsquedas"
        },
        "clearAll": "Quitar filtro",
        "condition": "Condición",
        "conditions": {
            "array": {
                "contains": "Contiene",
                "empty": "Vacío",
                "equals": "Iguales",
                "not": "No",
                "notEmpty": "No Vacío",
                "without": "Con"
            },
            "date": {
                "after": "Después",
                "before": "Antes",
                "between": "Entre",
                "empty": "Vacío",
                "equals": "Igual",
                "not": "No",
                "notBetween": "No Entre",
                "notEmpty": "No Vacío"
            },
            "number": {
                "between": "Entre",
                "empty": "Vacío",
                "equals": "Igual",
                "gt": "Mayor",
                "gte": "Mayor o Igual",
                "lt": "Menor",
                "lte": "Menor o Igual",
                "not": "No",
                "notBetween": "No Entre",
                "notEmpty": "No vacío"
            },
            "string": {
                "contains": "Contine",
                "empty": "Vacío",
                "endsWith": "Termina en",
                "equals": "Iguales",
                "not": "No",
                "notContains": "No Contiene",
                "notEmpty": "No Vacío",
                "notEndsWith": "No finaliza en",
                "notStartsWith": "No empieza en",
                "startsWith": "Empieza en"
            }
        },
        "data": "Datos",
        "deleteTitle": "Eliminar regla",
        "leftTitle": "Izquierda",
        "logicAnd": "Y",
        "logicOr": "O",
        "rightTitle": "Derecha",
        "title": {
            "_": "Generador de Consultas (%d)",
            "0": "Generador de Consultas"
        },
        "value": "Valor"
    },
    "searchPanes": {
        "clearMessage": "Borrar Filtro",
        "collapse": {
            "_": "Paneles de Búsqueda (%d)",
            "0": "Paneles de Búsqueda"
        },
        "collapseMessage": "desplegar todo",
        "count": "Cuenta",
        "countFiltered": "Cuenta Filtro",
        "emptyPanes": "No hay información",
        "loadMessage": "Cargando informacion",
        "showMessage": "Mostrar todos",
        "title": "Filtros Activos - %d"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "%d celdas seleccionadas",
            "0": "",
            "1": "1 celda seleccionada"
        },
        "columns": {
            "_": "%d columnas seleccionadas",
            "0": "",
            "1": "1 columna seleccionada"
        },
        "rows": {
            "_": "Filas Seleccionadas",
            "0": "",
            "1": "Fila seleccionada"
        }
    },
    "stateRestore": {
        "creationModal": {
            "button": "Crear",
            "columns": {
                "search": "Búsqueda columnas",
                "visible": "Visibilidad de columa"
            },
            "name": "Nombre:",
            "order": "Ordenar",
            "paging": "Paginado",
            "scroller": "Posición desplazamiento",
            "search": "Buscar",
            "searchBuilder": "Generador de Consultas",
            "select": "Seleccionar",
            "title": "Crear Nuevo Estado",
            "toggleLabel": "Incluir:"
        },
        "duplicateError": "Ya existe un estado con este nombre",
        "emptyError": "El nombre no puede estar vacío",
        "emptyStates": "Estado sin Guardar",
        "removeConfirm": "Esta seguro de eliminar el estado %d?",
        "removeError": "Error al eliminar el estado",
        "removeJoiner": "y",
        "removeSubmit": "Eliminar",
        "removeTitle": "Eliminar Estado",
        "renameButton": "Eliminar",
        "renameLabel": "Nuevo nombre para %s",
        "renameTitle": "Renombrar Estado"
    },
    "thousands": ",",
    "zeroRecords": "No se encontro información"
};
}));
