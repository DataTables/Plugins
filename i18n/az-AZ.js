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
            "first": "İlk",
            "last": "Axırıncı",
            "next": "Sonrakı",
            "previous": "Öncəki"
        }
    },
    "autoFill": {
        "cancel": "Ləğv et",
        "fill": "Bütün hücrələri <i>%d<\/i> ile doldur",
        "fillHorizontal": "Hücrələri üfiqi olaraq doldur",
        "fillVertical": "Hücrələri şaquli olara1 doldur",
        "info": ""
    },
    "buttons": {
        "collection": "Kolleksiya <span class=\"\\\"><\/span>",
        "colvis": "Sütun baxışı",
        "colvisRestore": "Baxışı əvvəlki vəziyyətinə gətir",
        "copy": "Kopyala",
        "copyKeys": "Cədvəldəki qeydi kopyalamaq üçün CTRL və ya u2318 + C düymələrinə basın. Ləğv etmək üçün bu mesajı vurun və ya ESC düyməsini vurun.",
        "copySuccess": {
            "_": "%ds sətir panoya kopyalandı",
            "1": "1 sətir panoya kopyalandı"
        },
        "copyTitle": "Panoya kopyala",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "%d sətir göstər",
            "-1": "Bütün sətirlari göstər"
        },
        "pdf": "PDF",
        "print": "Çap Et"
    },
    "datetime": {
        "amPm": {
            "0": "am",
            "1": "pm"
        },
        "hours": "Saat",
        "minutes": "Dəqiqə",
        "next": "Növbəti",
        "previous": "Öncəki",
        "seconds": "Saniyə",
        "unknown": "Naməlum"
    },
    "decimal": "",
    "editor": {
        "close": "Bağla",
        "create": {
            "button": "Təzə",
            "submit": "Qeyd Et",
            "title": "Yeni qeyd yarat"
        },
        "edit": {
            "button": "Redaktə Et",
            "submit": "Yeniləyin",
            "title": "Qeydi Redaktə Et"
        },
        "error": {
            "system": "Sistem xətası baş verdi (Ətraflı Məlumat)"
        },
        "multi": {
            "info": "Seçilmiş qeydlər bu sahədə fərqli dəyərlər ehtiva edir. Bütün seçilmiş qeydlər üçün bu sahəyə eyni dəyəri təyin etmək üçün buraya vurun; əks halda hər qeyd öz dəyərini saxlayacaqdır.",
            "noMulti": "Bu sahə qrup şəklində deyil, ayrı-ayrılıqda təşkil edilə bilər.",
            "restore": "Dəyişiklikləri geri qaytarın",
            "title": "Çox dəyər"
        },
        "remove": {
            "button": "Sil",
            "confirm": {
                "_": "%d ədəd qeydi silmək istədiyinizə əminsiniz?",
                "1": "Bu qeydi silmək istədiyinizə əminsiniz?"
            },
            "submit": "Sil",
            "title": "Qeydləri sil"
        }
    },
    "emptyTable": "Cədvəldə heç bir məlumat yoxdur",
    "info": "_TOTAL_ Nəticədən _START_ - _END_ Arası Nəticələr",
    "infoEmpty": "Nəticə Yoxdur",
    "infoFiltered": "( _MAX_ Nəticə İçindən Tapılanlar)",
    "infoPostFix": "",
    "infoThousands": ".",
    "lengthMenu": "Səhifədə _MENU_ nəticə göstər",
    "loadingRecords": "Yüklənir...",
    "processing": "Gözləyin...",
    "search": "Axtarış:",
    "searchBuilder": {
        "add": "Koşul Ekle",
        "button": {
            "_": "Axtarış Yaradıcı (%d)",
            "0": "Axtarış Yaradıcı"
        },
        "clearAll": "Filtrləri Təmizlə",
        "condition": "Şərt",
        "conditions": {
            "array": {
                "contains": "Tərkibində",
                "empty": "Boş",
                "equals": "Bərabərdir",
                "not": "Deyildir",
                "notEmpty": "Dolu",
                "without": "Xaric"
            },
            "date": {
                "after": "Növbəti",
                "before": "Öncəki",
                "between": "Arasında",
                "empty": "Boş",
                "equals": "Bərabərdir",
                "not": "Deyildir",
                "notBetween": "Xaricində",
                "notEmpty": "Dolu"
            },
            "number": {
                "between": "Arasında",
                "empty": "Boş",
                "equals": "Bərabərdir",
                "gt": "Böyükdür",
                "gte": "Böyük bərabərdir",
                "lt": "Kiçikdir",
                "lte": "Kiçik bərabərdir",
                "not": "Deyildir",
                "notBetween": "Xaricində",
                "notEmpty": "Dolu"
            },
            "string": {
                "contains": "Tərkibində",
                "empty": "Boş",
                "endsWith": "İlə bitər",
                "equals": "Bərabərdir",
                "not": "Deyildir",
                "notEmpty": "Dolu",
                "startsWith": "İlə başlayar"
            }
        },
        "data": "Qeyd",
        "deleteTitle": "Filtrləmə qaydasını silin",
        "leftTitle": "Meyarı xaricə çıxarmaq",
        "logicAnd": "və",
        "logicOr": "vəya",
        "rightTitle": "Meyarı içəri al",
        "title": {
            "_": "Axtarış Yaradıcı (%d)",
            "0": "Axtarış Yaradıcı"
        },
        "value": "Değer"
    },
    "searchPanes": {
        "clearMessage": "Hamısını Təmizlə",
        "collapse": {
            "_": "Axtarış Bölməsi (%d)",
            "0": "Axtarış Bölməsi"
        },
        "count": "{total}",
        "countFiltered": "{shown}\/{total}",
        "emptyPanes": "Axtarış Bölməsi yoxdur",
        "loadMessage": "Axtarış Bölməsi yüklənir ...",
        "title": "Aktiv filtrlər - %d"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "%d hücrə seçildi",
            "0": "",
            "1": "1 hücrə seçildi"
        },
        "columns": {
            "_": "%d sütun seçildi",
            "0": "",
            "1": "1 sütun seçildi"
        },
        "rows": {
            "_": "%d qeyd seçildi",
            "0": "",
            "1": "1 qeyd seçildi"
        }
    },
    "thousands": ".",
    "zeroRecords": "Nəticə Tapılmadı."
};
}));
