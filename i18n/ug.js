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
    "autoFill": {
        "cancel": "sazzamu",
        "fill": "juza",
        "fillHorizontal": "juzaObukiika",
        "fillVertical": "juzaObusiimba",
        "info": ""
    },
    "buttons": {
        "colvis": "endabikaYolunyilili",
        "copy": "Koppa"
    },
    "decimal": "",
    "infoPostFix": "",
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
    }
};
}));
