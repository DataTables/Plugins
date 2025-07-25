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
            "first": "ໜ້າທຳອິດ",
            "last": "ໜ້າສຸດທ້າຍ",
            "next": "ໜ້າຕໍ່ໄປ",
            "previous": "ກ່ອນໜ້ານີ້"
        }
    },
    "autoFill": {
        "info": ""
    },
    "decimal": "",
    "emptyTable": "ບໍ່ພົບຂໍ້ມູນໃນຕາຕະລາງ",
    "info": "ສະແດງ _START_ ເຖິງ _END_ ຈາກ _TOTAL_ ແຖວ",
    "infoEmpty": "ສະແດງ 0 ເຖິງ 0 ຈາກ 0 ແຖວ",
    "infoFiltered": "(ກັ່ນຕອງຂໍ້ມູນ _MAX_ ທຸກແຖວ)",
    "infoPostFix": "",
    "infoThousands": ",",
    "lengthMenu": "ສະແດງ _MENU_ ແຖວ",
    "loadingRecords": "ກຳລັງໂຫຼດຂໍ້ມູນ...",
    "processing": "ກຳລັງດຳເນີນການ...",
    "search": "ຄົ້ນຫາ: ",
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
    "zeroRecords": "ບໍ່ພົບຂໍ້ມູນ"
};
}));
