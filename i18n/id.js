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
            "last": "Terakhir",
            "next": "Selanjutnya",
            "previous": "Sebelumnya"
        }
    },
    "autoFill": {
        "cancel": "Batal",
        "fill": "Isi semua sel dengan <i>%d<\/i>",
        "fillHorizontal": "Isi sel secara horizontal",
        "fillVertical": "Isi sel secara vertikal",
        "info": ""
    },
    "buttons": {
        "collection": "Kumpulan <span class='ui-button-icon-primary ui-icon ui-icon-triangle-1-s'\/>",
        "colvis": "Visibilitas Kolom",
        "colvisRestore": "Kembalikan visibilitas",
        "copy": "Salin",
        "copyKeys": "Tekan ctrl atau u2318 + C untuk menyalin tabel ke papan klip.<br \/><br \/>Untuk membatalkan, klik pesan ini atau tekan esc.",
        "copySuccess": {
            "_": "%d baris disalin ke papan klip",
            "1": "satu baris disalin ke papan klip"
        },
        "copyTitle": "Salin ke Papan klip",
        "createState": "Tambahkan Data",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "Tampilkan %d baris",
            "-1": "Tampilkan semua baris"
        },
        "pdf": "PDF",
        "print": "Cetak",
        "removeAllStates": "Hapus Semua Data",
        "removeState": "Hapus Data",
        "renameState": "Rubah Nama",
        "savedStates": "SImpan Data",
        "stateRestore": "Publihkan Data",
        "updateState": "Perbaharui data"
    },
    "datetime": {
        "amPm": {
            "0": "am",
            "1": "pm"
        },
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
        "next": "Selanjutnya",
        "previous": "Sebelumnya",
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
            "button": "Tambah",
            "submit": "Tambah",
            "title": "Tambah inputan baru"
        },
        "edit": {
            "button": "Edit",
            "submit": "Edit",
            "title": "Edit inputan"
        },
        "error": {
            "system": "Terjadi kesalahan pada system. (<a target=\"\\\" rel=\"\\ nofollow\" href=\"\\\">Informasi Selebihnya<\/a>)."
        },
        "multi": {
            "info": "Item yang dipilih berisi nilai yang berbeda untuk input ini. Untuk mengedit dan mengatur semua item untuk input ini ke nilai yang sama, klik atau tekan di sini, jika tidak maka akan mempertahankan nilai masing-masing.",
            "noMulti": "Masukan ini dapat diubah satu per satu, tetapi bukan bagian dari grup.",
            "restore": "Batalkan Perubahan",
            "title": "Beberapa Nilai"
        },
        "remove": {
            "button": "Hapus",
            "confirm": {
                "_": "Apakah Anda yakin untuk menghapus %d baris?",
                "1": "Apakah Anda yakin untuk menghapus 1 baris?"
            },
            "submit": "Hapus",
            "title": "Hapus inputan"
        }
    },
    "emptyTable": "Tidak ada data yang tersedia pada tabel ini",
    "info": "Menampilkan _START_ sampai _END_ dari _TOTAL_ entri",
    "infoEmpty": "Menampilkan 0 sampai 0 dari 0 entri",
    "infoFiltered": "(disaring dari _MAX_ entri keseluruhan)",
    "infoPostFix": "",
    "infoThousands": ",",
    "lengthMenu": "Tampilkan _MENU_ entri",
    "loadingRecords": "Sedang memuat...",
    "processing": "Sedang memproses...",
    "search": "Cari:",
    "searchBuilder": {
        "add": "Tambah Kondisi",
        "button": {
            "_": "Cari Builder (%d)",
            "0": "Cari Builder"
        },
        "clearAll": "Bersihkan Semua",
        "condition": "Kondisi",
        "conditions": {
            "array": {
                "contains": "Berisi",
                "empty": "Kosong",
                "equals": "Sama dengan",
                "not": "Tidak",
                "notEmpty": "Tidak kosong",
                "without": "Tanpa"
            },
            "date": {
                "after": "Setelah",
                "before": "Sebelum",
                "between": "Diantara",
                "empty": "Kosong",
                "equals": "Sama dengan",
                "not": "Tidak sama",
                "notBetween": "Tidak diantara",
                "notEmpty": "Tidak kosong"
            },
            "number": {
                "between": "Di antara",
                "empty": "Kosong",
                "equals": "Sama dengan",
                "gt": "Lebih besar dari",
                "gte": "Lebih besar atau sama dengan",
                "lt": "Lebih kecil dari",
                "lte": "Lebih kecil atau sama dengan",
                "not": "Tidak sama",
                "notBetween": "Tidak di antara",
                "notEmpty": "Tidak kosong"
            },
            "string": {
                "contains": "Berisi",
                "empty": "Kosong",
                "endsWith": "Diakhiri dengan",
                "equals": "Sama dengan",
                "not": "Tidak sama",
                "notContains": "Tidak Berisi",
                "notEmpty": "Tidak kosong",
                "notEndsWith": "Tidak diakhiri Dengan",
                "notStartsWith": "Tidak diawali Dengan",
                "startsWith": "Diawali dengan"
            }
        },
        "data": "Data",
        "deleteTitle": "Hapus filter",
        "leftTitle": "Ke Kiri",
        "logicAnd": "Dan",
        "logicOr": "Atau",
        "rightTitle": "Ke Kanan",
        "title": {
            "_": "Cari Builder (%d)",
            "0": "Cari Builder"
        },
        "value": "Nilai"
    },
    "searchPanes": {
        "clearMessage": "Bersihkan",
        "collapse": {
            "_": "Panel Pencarian (%d)",
            "0": "Panel Pencarian"
        },
        "collapseMessage": "Ciutkan",
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "Tidak Ada Panel Pencarian",
        "loadMessage": "Memuat Panel Pencarian",
        "showMessage": "Tampilkan",
        "title": "Saringan Aktif - %d"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "%d sel dipilih",
            "0": "",
            "1": "1 sel dipilih"
        },
        "columns": {
            "_": "%d kolom dipilih",
            "0": "",
            "1": "1 kolom dirpilih"
        },
        "rows": {
            "_": "%d baris dipilih",
            "0": "",
            "1": "1 baris dipilih"
        }
    },
    "stateRestore": {
        "creationModal": {
            "button": "Buat",
            "columns": {
                "search": "Pencarian Kolom",
                "visible": "Visibilitas Kolom"
            },
            "name": "Nama:",
            "order": "Penyortiran",
            "paging": "Nomor Halaman",
            "scroller": "Posisi Skrol",
            "search": "Pencarian",
            "searchBuilder": "Cari Builder",
            "select": "Pemilihan",
            "title": "Buat State Baru",
            "toggleLabel": "Termasuk:"
        },
        "duplicateError": "Nama State ini sudah ada.",
        "emptyError": "Nama tidak boleh kosong.",
        "emptyStates": "Tidak ada State yang disimpan.",
        "removeConfirm": "Apakah Anda yakin ingin menghapus %s?",
        "removeError": "Gagal menghapus State.",
        "removeJoiner": "dan",
        "removeSubmit": "Hapus",
        "removeTitle": "Penghapusan State",
        "renameButton": "Ganti Nama",
        "renameLabel": "Nama Baru untuk %s:",
        "renameTitle": "Ganti nama State"
    },
    "thousands": ".",
    "zeroRecords": "Tidak ditemukan data yang sesuai"
};
}));
