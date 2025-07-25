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
            "first": "प्रथम",
            "last": "अंतिम",
            "next": "अगला",
            "previous": "पिछला"
        }
    },
    "autoFill": {
        "cancel": "रद्द करें",
        "fill": "भरें",
        "fillHorizontal": "क्षैतिज भरें",
        "fillVertical": "लंबवत भरें",
        "info": ""
    },
    "buttons": {
        "collection": "संग्रह",
        "colvis": "स्तंभ दृश्यता",
        "colvisRestore": "दृश्यता बहाल करें",
        "copy": "प्रतिलिपि",
        "copyTitle": "शीर्षक प्रतिलिपि",
        "csv": "सीएसवी",
        "excel": "एक्सेल",
        "pdf": "पीडीएफ",
        "print": "छपाई"
    },
    "datetime": {
        "hours": "घंटे",
        "minutes": "मिनट",
        "next": "अगला",
        "previous": "पहले का",
        "seconds": "सेकंड"
    },
    "decimal": "",
    "editor": {
        "error": {
            "system": "त्रुटि प्रणाली"
        },
        "multi": {
            "title": "बहु शीर्षक"
        }
    },
    "emptyTable": "तालिका में आंकड़े उपलब्ध नहीं है",
    "info": "_START_ to _END_ of _TOTAL_ प्रविष्टियां दिखा रहे हैं",
    "infoEmpty": "0 में से 0 से 0 प्रविष्टियां दिखा रहे हैं",
    "infoFiltered": "(_MAX_ कुल प्रविष्टियों में से छठा हुआ)",
    "infoPostFix": "",
    "lengthMenu": " _MENU_ प्रविष्टियां दिखाएं ",
    "loadingRecords": "प्रगति पे हैं ...",
    "processing": "प्रगति पे हैं ...",
    "search": "खोजें:",
    "searchBuilder": {
        "add": "जोड़ना",
        "clearAll": "सभी साफ करें",
        "condition": "शर्त",
        "data": "जानकारी",
        "leftTitle": "बायां शीर्षक",
        "rightTitle": "सही शीर्षक",
        "value": "कीमत"
    },
    "searchPanes": {
        "count": "गिनती करना",
        "showMessage": "संदेश दिखाओ",
        "title": "शीर्षक"
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
    "thousands": "हज़ार",
    "zeroRecords": "रिकॉर्ड्स का मेल नहीं मिला"
};
}));
