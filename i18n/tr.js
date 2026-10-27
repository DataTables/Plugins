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
        "orderable": "Sıralamayı etkinleştirmek için tıklayın",
        "orderableRemove": "Sıralamayı kaldırmak için etkinleştirin.",
        "orderableReverse": "Sıralamayı tersine çevirmek için etkinleştirin",
        "paginate": {
            "first": "İlk",
            "last": "Son",
            "next": "Sonraki",
            "previous": "Önceki"
        }
    },
    "autoFill": {
        "cancel": "İptal",
        "fill": "Bütün hücreleri <i>%d<\/i> ile doldur",
        "fillHorizontal": "Hücreleri yatay olarak doldur",
        "fillVertical": "Hücreleri dikey olarak doldur",
        "info": ""
    },
    "buttons": {
        "collection": "Koleksiyon <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
        "colvis": "Sütun görünürlüğü",
        "colvisRestore": "Görünürlüğü eski haline getir",
        "copy": "Kopyala",
        "copyKeys": "Tablodaki veriyi kopyalamak için CTRL veya u2318 + C tuşlarına basınız. İptal etmek için bu mesaja tıklayın veya escape tuşuna basın.",
        "copySuccess": {
            "_": "%ds satır panoya kopyalandı",
            "1": "1 satır panoya kopyalandı"
        },
        "copyTitle": "Panoya kopyala",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "%d satır göster",
            "-1": "Bütün satırları göster",
            "1": "1 Satır Göster"
        },
        "pdf": "PDF",
        "print": "Yazdır"
    },
    "columnControl": {
        "buttons": {
            "searchClear": "Aramayı temizle"
        },
        "colVisDropdown": "Sütun görünürlüğü",
        "dropdown": "Daha fazla",
        "list": {
            "all": "Tümünü seç",
            "none": "Seçimi kaldır",
            "search": "Ara..."
        },
        "orderAddAsc": "Artan Sıralama Ekle",
        "orderAddDesc": "Azalan Sıralama Ekle",
        "orderAsc": "Artan Sırala",
        "orderClear": "Sıralamayı temizle",
        "orderDesc": "Azalan Sırala",
        "orderRemove": "Sıralamadan kaldır",
        "reorder": "Sütunları yeniden sıralayın",
        "reorderLeft": "Sütunu sola taşı",
        "reorderRight": "Sütunu sağa taşı",
        "search": {
            "datetime": {
                "greater": "Sonra",
                "less": "Önce"
            },
            "number": {
                "empty": "Boş",
                "equal": "Eşittir",
                "greater": "Bundan daha büyük",
                "greaterOrEqual": "Büyük veya eşit",
                "less": "Daha az",
                "lessOrEqual": "Daha az veya eşit",
                "notEmpty": "Boş değil",
                "notEqual": "Eşit değil"
            },
            "text": {
                "contains": "İçerir",
                "ends": "Son",
                "notContains": "İçermez",
                "starts": "Başlangıç"
            }
        }
    },
    "datetime": {
        "amPm": {
            "0": "öö",
            "1": "ös"
        },
        "hours": "Saat",
        "minutes": "Dakika",
        "months": {
            "0": "Ocak",
            "1": "Şubat",
            "10": "Kasım",
            "11": "Aralık",
            "2": "Mart",
            "3": "Nisan",
            "4": "Mayıs",
            "5": "Haziran",
            "6": "Temmuz",
            "7": "Ağustos",
            "8": "Eylül",
            "9": "Ekim"
        },
        "next": "Sonraki",
        "previous": "Önceki",
        "seconds": "Saniye",
        "unknown": "Bilinmeyen",
        "weekdays": {
            "0": "Pzt",
            "1": "Sal",
            "2": "Çar",
            "3": "Per",
            "4": "Cum",
            "5": "Cmt",
            "6": "Paz"
        }
    },
    "decimal": "",
    "editor": {
        "close": "Kapat",
        "create": {
            "button": "Yeni",
            "submit": "Kaydet",
            "title": "Yeni kayıt oluştur"
        },
        "edit": {
            "button": "Düzenle",
            "submit": "Güncelle",
            "title": "Kaydı düzenle"
        },
        "error": {
            "system": "Bir sistem hatası oluştu (Ayrıntılı bilgi)"
        },
        "multi": {
            "info": "Seçili kayıtlar bu alanda farklı değerler içeriyor. Seçili kayıtların hepsinde bu alana aynı değeri atamak için buraya tıklayın; aksi halde her kayıt bu alanda kendi değerini koruyacak.",
            "noMulti": "Bu alan bir grup olarak değil ancak tekil olarak düzenlenebilir.",
            "restore": "Değişiklikleri geri al",
            "title": "Çoklu değer"
        },
        "remove": {
            "button": "Sil",
            "confirm": {
                "_": "%d adet kaydı silmek istediğinize emin misiniz?",
                "1": "Bu kaydı silmek istediğinizden emin misiniz?"
            },
            "submit": "Sil",
            "title": "Kayıtları sil"
        }
    },
    "emptyTable": "Tabloda veri bulunmuyor",
    "info": "_TOTAL_ kayıttan _START_ - _END_ arasındaki kayıtlar gösteriliyor",
    "infoEmpty": "Kayıt yok",
    "infoFiltered": "(_MAX_ kayıt içerisinden bulunan)",
    "infoPostFix": "",
    "infoThousands": ".",
    "lengthLabels": {
        "-1": "Tümü"
    },
    "lengthMenu": "Sayfada _MENU_ kayıt göster",
    "loadingRecords": "Yükleniyor...",
    "processing": "İşleniyor...",
    "search": "Ara:",
    "searchBuilder": {
        "add": "Koşul Ekle",
        "button": {
            "_": "Arama Oluşturucu (%d)",
            "0": "Arama Oluşturucu"
        },
        "clearAll": "Filtreleri Temizle",
        "condition": "Koşul",
        "conditions": {
            "array": {
                "contains": "İçerir",
                "empty": "Boş",
                "equals": "Eşittir",
                "not": "Değildir",
                "notEmpty": "Dolu",
                "without": "Hariç"
            },
            "date": {
                "after": "Sonra",
                "before": "Önce",
                "between": "Arasında",
                "empty": "Boş",
                "equals": "Eşittir",
                "not": "Değildir",
                "notBetween": "Dışında",
                "notEmpty": "Dolu"
            },
            "number": {
                "between": "Arasında",
                "empty": "Boş",
                "equals": "Eşittir",
                "gt": "Büyüktür",
                "gte": "Büyük eşittir",
                "lt": "Küçüktür",
                "lte": "Küçük eşittir",
                "not": "Değildir",
                "notBetween": "Dışında",
                "notEmpty": "Dolu"
            },
            "string": {
                "contains": "İçerir",
                "empty": "Boş",
                "endsWith": "İle biter",
                "equals": "Eşittir",
                "not": "Değildir",
                "notContains": "İçermeyen",
                "notEmpty": "Dolu",
                "notEndsWith": "Bitmeyen",
                "notStartsWith": "Başlamayan",
                "startsWith": "İle başlar"
            }
        },
        "data": "Veri",
        "deleteTitle": "Filtreleme kuralını silin",
        "leftTitle": "Kriteri dışarı çıkart",
        "logicAnd": "ve",
        "logicOr": "veya",
        "rightTitle": "Kriteri içeri al",
        "search": "Ara",
        "title": {
            "_": "Arama Oluşturucu (%d)",
            "0": "Arama Oluşturucu"
        },
        "value": "Değer",
        "valueJoiner": "Ve"
    },
    "searchPanes": {
        "clearMessage": "Hepsini Temizle",
        "collapse": {
            "_": "Arama Bölmesi (%d)",
            "0": "Arama Bölmesi"
        },
        "collapseMessage": "Tümünü Gizle",
        "count": "{total}",
        "countFiltered": "{shown}\/{total}",
        "emptyPanes": "Arama Bölmesi yok",
        "loadMessage": "Arama Bölmeleri yükleniyor ...",
        "showMessage": "Tümünü Göster",
        "title": "Etkin filtreler - %d"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "%d hücre seçildi",
            "0": "",
            "1": "1 hücre seçildi"
        },
        "columns": {
            "_": "%d sütun seçildi",
            "0": "",
            "1": "1 sütun seçildi"
        },
        "rows": {
            "_": "%d kayıt seçildi",
            "0": "",
            "1": "1 kayıt seçildi"
        }
    },
    "stateRestore": {
        "button": {
            "create": "Şuanki Görünümü Kaydet",
            "edit": "Aktif Görünümün Güncelle",
            "remove": "Aktif Görünümü Sil",
            "statesList": "Kaydedilmiş Görünümler",
            "statesRemoveAll": "Tüm Görünümleri Sil"
        },
        "create": {
            "title": "Yeni Görünüm Oluştur"
        },
        "remove": {
            "button": "Sil",
            "message": {
                "_": "Görünümü silmek istediğinize emin misiniz?"
            },
            "title": "Görünüm Sil"
        }
    },
    "thousands": ".",
    "zeroRecords": "Eşleşen kayıt bulunamadı"
};
}));
