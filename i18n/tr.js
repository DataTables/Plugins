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
        "createState": "Şuanki Görünümü Kaydet",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "%d satır göster",
            "-1": "Bütün satırları göster"
        },
        "pdf": "PDF",
        "print": "Yazdır",
        "removeAllStates": "Tüm Görünümleri Sil",
        "removeState": "Aktif Görünümü Sil",
        "renameState": "Aktif Görünümün Adını Değiştir",
        "savedStates": "Kaydedilmiş Görünümler",
        "stateRestore": "Görünüm -&gt; %d",
        "updateState": "Aktif Görünümün Güncelle"
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
        "title": {
            "_": "Arama Oluşturucu (%d)",
            "0": "Arama Oluşturucu"
        },
        "value": "Değer"
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
        "creationModal": {
            "button": "Kaydet",
            "columns": {
                "search": "Kolon Araması",
                "visible": "Kolon Görünümü"
            },
            "name": "Görünüm İsmi",
            "order": "Sıralama",
            "paging": "Sayfalama",
            "scroller": "Kaydırma (Scrool)",
            "search": "Arama",
            "searchBuilder": "Arama Oluşturucu",
            "select": "Seçimler",
            "title": "Yeni Görünüm Oluştur",
            "toggleLabel": "Kaydedilecek Olanlar"
        },
        "duplicateError": "Bu Görünüm Daha Önce Tanımlanmış",
        "emptyError": "Görünüm Boş Olamaz",
        "emptyStates": "Herhangi Bir Görünüm Yok",
        "removeConfirm": "Görünümü silmek istediğinize emin misiniz?",
        "removeError": "Görünüm silinemedi",
        "removeJoiner": "ve",
        "removeSubmit": "Sil",
        "removeTitle": "Görünüm Sil",
        "renameButton": "Değiştir",
        "renameLabel": "Görünüme Yeni İsim Ver -&gt; %s:",
        "renameTitle": "Görünüm İsmini Değiştir"
    },
    "thousands": ".",
    "zeroRecords": "Eşleşen kayıt bulunamadı"
};
}));
