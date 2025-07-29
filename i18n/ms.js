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
            "first": "Pertama",
            "last": "Akhir",
            "next": "Seterusnya",
            "previous": "Sebelum"
        }
    },
    "autoFill": {
        "cancel": "batal",
        "fill": "Isi semua sel dengan <i>%d<\/i>",
        "fillHorizontal": "Isi sel secara mendatar",
        "fillVertical": "Isi sel secara menegak",
        "info": ""
    },
    "buttons": {
        "collection": "Koleksi <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
        "colvis": "Kolum Pilihan",
        "colvisRestore": "Kembalikan Penglihatan",
        "copy": "Salin",
        "copyKeys": "Tekan &lt;i&gt;ctrl&lt;\/i&gt; atau &lt;i&gt;u2318&lt;\/i&gt; + &lt;i&gt;C&lt;\/i&gt; untuk menyalin maklumat jadual ke papan keratan sistem anda.&lt;br&gt;&lt;br&gt;Untuk batak, tekan mesej ini atau tekan escape.",
        "copySuccess": {
            "_": "%ds baris disalin ke papan keratan",
            "1": "1 baris disalian ke papan keratan"
        },
        "copyTitle": "Salin ke Papan Klip",
        "pageLength": {
            "_": "Paparkan %d baris",
            "-1": "Paparkan semua baris"
        },
        "print": "Cetak"
    },
    "datetime": {
        "hours": "Jam",
        "minutes": "Minit",
        "months": {
            "0": "Januari",
            "1": "Februari",
            "10": "November",
            "11": "Disember",
            "2": "Mac",
            "3": "April",
            "4": "Mei",
            "5": "Jun",
            "6": "Julai",
            "7": "Ogos",
            "8": "September",
            "9": "Oktober"
        },
        "next": "Seterusnya",
        "previous": "Sebelum",
        "seconds": "Saat",
        "weekdays": {
            "0": "Ahd",
            "1": "Isn",
            "2": "Sel",
            "3": "Rab",
            "4": "Kha",
            "5": "Jum",
            "6": "Sab"
        }
    },
    "decimal": "",
    "editor": {
        "close": "Tutup",
        "create": {
            "button": "Tambah",
            "submit": "Cipta",
            "title": "Cipta entri baru"
        },
        "edit": {
            "button": "Pinda",
            "submit": "Kemaskini",
            "title": "Pinda entri"
        },
        "error": {
            "system": "Terdapat ralat sistem berlaku (&lt;a target=\"\\\" rel=\"nofollow\" href=\"\\\"&gt;Maklumat Lanjut&lt;\/a&gt;)."
        },
        "multi": {
            "info": "Item ini mengandungi pelbagai nilai untuk input ini. Untuk pinda and setkan kesemua item untuk input ini kepada nilai yang sama, tekan sini, sebaliknya, maklumat setiap satu akan dikekalkan",
            "noMulti": "Input ini boleh di ubah setiap satu, tetapi bukan sebahagian daripada kumpulan",
            "restore": "Buat Asal",
            "title": "Pelbagai nilai"
        },
        "remove": {
            "button": "Padam",
            "confirm": {
                "_": "Adakah anda pasti untuk menghapus %d baris?",
                "1": "Adakah anda pasti untuk menghapus 1 baris?"
            },
            "submit": "Padam",
            "title": "Padam"
        }
    },
    "emptyTable": "Tiada data",
    "info": "Paparan dari _START_ hingga _END_ dari _TOTAL_ rekod",
    "infoEmpty": "Paparan 0 hingga 0 dari 0 rekod",
    "infoFiltered": "(Ditapis dari jumlah _MAX_ rekod)",
    "infoPostFix": "",
    "infoThousands": ",",
    "lengthMenu": "Papar _MENU_ rekod",
    "loadingRecords": "Diproses...",
    "processing": "Sedang diproses...",
    "search": "Carian:",
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "%d sel terpilih",
            "0": "",
            "1": "1 sel terpilih"
        },
        "columns": {
            "_": "%d kolum terpilih",
            "0": "",
            "1": "1 kolum terpilih"
        },
        "rows": {
            "_": "%d baris terpilih",
            "0": "",
            "1": "1 baris terpilih"
        }
    },
    "thousands": ",",
    "zeroRecords": "Tiada padanan rekod yang dijumpai."
};
}));
