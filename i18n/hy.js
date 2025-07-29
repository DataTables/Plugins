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
            "first": "Առաջին էջ",
            "last": "Վերջին էջ",
            "next": "Հաջորդ էջ",
            "previous": "Նախորդ էջ"
        }
    },
    "autoFill": {
        "info": ""
    },
    "decimal": "",
    "emptyTable": "Տվյալները բացակայում են",
    "info": "Ցուցադրված են _START_-ից _END_ արդյունքները ընդհանուր _TOTAL_-ից",
    "infoEmpty": "Արդյունքներ գտնված չեն",
    "infoFiltered": "(ֆիլտրվել է ընդհանուր _MAX_ արդյունքներից)",
    "infoPostFix": "",
    "infoThousands": ",",
    "lengthMenu": "Ցուցադրել _MENU_ արդյունքներ մեկ էջում",
    "loadingRecords": "Բեռնվում է ...",
    "processing": "Կատարվում է...",
    "search": "Փնտրել",
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
    "zeroRecords": "Հարցմանը համապատասխանող արդյունքներ չկան"
};
}));
