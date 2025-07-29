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
            "first": "Awal",
            "last": "Akhir",
            "next": "Lanjut",
            "previous": "Balik"
        }
    },
    "autoFill": {
        "cancel": "Batalkan",
        "fill": "Isi semua sel dengan <i>%d<i><\/i><\/i>",
        "fillHorizontal": "isi sel secara horizontal",
        "fillVertical": "isi sel secara vertikal",
        "info": ""
    },
    "buttons": {
        "collection": "Koleksi <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
        "colvis": "Visibilitas kolom",
        "colvisRestore": "Kembalikan visibilitas",
        "copy": "Salin",
        "copyKeys": "Tekan ctrl atau u2318 + C untuk menyalin tabel data ke papan klip sistem",
        "copySuccess": {
            "_": "%d row berhasil disalin ke papan klip",
            "1": "1 row berhasil disalin"
        },
        "copyTitle": "Salin ke Papan Klip",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "Tampilkan %d row",
            "-1": "Tampilkan semua row"
        },
        "pdf": "PDF",
        "print": "Cetak"
    },
    "datetime": {
        "hours": "Jam",
        "minutes": "Menit",
        "months": {
            "0": "Januari",
            "1": "Februari",
            "10": "November",
            "11": "Desember",
            "2": "Maret",
            "3": "April",
            "4": "Mei",
            "5": "Juni",
            "6": "Juli",
            "7": "Agustus",
            "8": "September",
            "9": "Oktober"
        },
        "next": "Lanjut",
        "previous": "Kembali",
        "seconds": "Detik",
        "unknown": "-",
        "weekdays": {
            "0": "Min",
            "1": "Sen",
            "2": "Sel",
            "3": "Rab",
            "4": "Kam",
            "5": "Jum",
            "6": "Sab"
        }
    },
    "decimal": "",
    "editor": {
        "close": "Tutup",
        "create": {
            "button": "Baru",
            "submit": "Kirim",
            "title": "Buat entri baru"
        },
        "edit": {
            "button": "Ubah",
            "submit": "Kirim",
            "title": "Ubah entri"
        },
        "error": {
            "system": "Kesalahan sistem terdeteksi (<a rel=\"nofollow\" href=\"\">Informasi Selengkapnya<\/a>)"
        },
        "multi": {
            "info": "Item yang dipilih mengandung nilai yang berbeda untuk masukkan ini. Untuk mengubah dan mengaturnya semua item untuk masukkan ini untuk nilai yang sama, klik atau sentuh disini, jika tidak, mereka akan mempertahankan nilai-nilai individual mereka.",
            "noMulti": "Mauskkan ini tidak dapat diubah sendirian, tetapi bukan bagian di grup ini.",
            "restore": "Batalkan Perubahan",
            "title": "Beberapa nilai"
        },
        "remove": {
            "button": "Hapus",
            "confirm": {
                "_": "Kamu mau hapus %d baris?",
                "1": "Kamu mau hapus 1 baris?"
            },
            "submit": "Kirim",
            "title": "Hapus"
        }
    },
    "emptyTable": "Tidak ada data di tabel",
    "info": "Tampilan _START_ sampai _END_ dari _TOTAL_ entri",
    "infoEmpty": "Menampilkan 0 entri",
    "infoFiltered": "(disaring dari _MAX_ entri keseluruhan)",
    "infoPostFix": "",
    "infoThousands": ".",
    "lengthMenu": "Tampilkan _MENU_ entri",
    "loadingRecords": "Memuat . . .",
    "processing": "Sedang memproses...",
    "search": "Cari:",
    "searchBuilder": {
        "add": "Tambah Kondisi",
        "clearAll": "Hapus Semua",
        "condition": "Kondisi",
        "data": "Data"
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
    "thousands": ".",
    "zeroRecords": "Tidak ditemukan data yang sesuai"
};
}));
