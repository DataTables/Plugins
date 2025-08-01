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
            "first": "Birinchi",
            "last": "Oxirgi",
            "next": "Keyingi",
            "previous": "Oldingi"
        }
    },
    "autoFill": {
        "cancel": "Bekor qilish",
        "fill": "Barcha kataklarni &lt;i&gt;%d&lt;i&gt;&lt;\/i&gt;&lt;\/i&gt; bilan to'ldirish",
        "fillHorizontal": "Kataklarni gorizontal to‘ldirish",
        "fillVertical": "Kataklarni vertikal to‘ldirish",
        "info": ""
    },
    "buttons": {
        "collection": "To‘plam",
        "colvis": "Ustun ko‘rinishi",
        "colvisRestore": "Tiklash ko‘rinishi",
        "copy": "Nusxalash",
        "copyKeys": "Ma‘lumotlarni vaqtinchalik xotiraga ko‘chirib olish uchun &lt;i&gt;ctrl&lt;\/i&gt; ni yoki &lt;i&gt;u2318&lt;\/i&gt; + &lt;i&gt;C&lt;\/i&gt; ni bosing.&lt;br&gt;&lt;br&gt; Bekor qilish uchun xabarni bosing yoki esc tugmasini bosing.",
        "copySuccess": {
            "_": "%d ta qator vaqtinchalik xotiraga ko‘chirib olindi",
            "1": "1 ta qator vaqtinchalik xotiraga ko‘chirib olindi"
        },
        "copyTitle": "Vaqtinchalik xotiraga ko‘chirib olish",
        "createState": "Holat yaratish",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "%d ta qatorni ko‘rsatish",
            "-1": "Barcha qatorlarni ko‘rsatish"
        },
        "pdf": "PDF",
        "print": "Chop etish",
        "removeAllStates": "Barcha holatlarni o‘chirish",
        "removeState": "O‘chirish",
        "renameState": "Qayta nomlash",
        "savedStates": "Saqlangan holatlar",
        "stateRestore": "Holat %d",
        "updateState": "Yangilash"
    },
    "datetime": {
        "hours": "Soat",
        "minutes": "Daqiqa",
        "months": {
            "0": "Yanvar",
            "1": "Fevral",
            "10": "Noyabr",
            "11": "Dekabr",
            "2": "Mart",
            "3": "Aprel",
            "4": "May",
            "5": "Iyun",
            "6": "Iyul",
            "7": "Avgust",
            "8": "Sentabr",
            "9": "Oktabr"
        },
        "next": "Keyingi",
        "previous": "Oldingi",
        "seconds": "Soniya",
        "unknown": "-",
        "weekdays": {
            "0": "Yak",
            "1": "Du",
            "2": "Se",
            "3": "Chor",
            "4": "Pay",
            "5": "Ju",
            "6": "Shan"
        }
    },
    "decimal": "",
    "editor": {
        "close": "Yopish",
        "create": {
            "button": "Yangi",
            "submit": "Yaratish",
            "title": "Yangi ma‘lumot yaratish"
        },
        "edit": {
            "button": "O‘zgartirish",
            "submit": "Yangilash",
            "title": "Ma‘lumotni o‘zgartirish"
        },
        "error": {
            "system": "Tizimda xatolik yuz berdi (&lt;a target=\"\\\" rel=\"nofollow\" href=\"\\\"&gt;To'liqroq ma'lumot&lt;\/a&gt;)."
        },
        "multi": {
            "info": "Tanlangan elementlarda ushbu kiritish uchun turli qiymatlar mavjud. Ushbu kiritish uchun barcha elementlarni tahrirlash va bir xil qiymatga oʻrnatish uchun bu yerni bosing, aks holda ular oʻzlarining shaxsiy qiymatlarini saqlab qoladilar.",
            "noMulti": "Bu kiritish alohida tahrirlanishi mumkin, lekin guruhning bir qismi emas.",
            "restore": "O‘zgarishlarni bekor qilish",
            "title": "Bir nechta ma‘lumot"
        },
        "remove": {
            "button": "O‘chirish",
            "confirm": {
                "_": "Ushbu %d ta ma‘lumotlarni o‘chirishni hohlaysizmi?",
                "1": "Ushbu 1 ta ma‘lumotni o‘chirishni hohlaysizmi?"
            },
            "submit": "O‘chirish",
            "title": "O‘chirish"
        }
    },
    "emptyTable": "Jadvalda ma‘lumot mavjud emas",
    "info": "Umumiy _TOTAL_ yozuvlarlardan _START_ dan _END_ gachasi ko‘rsatilmoqda",
    "infoEmpty": "Umumiy 0 yozuvlardan 0 dan 0 gachasi ko‘rsatilmoqda",
    "infoFiltered": "(_MAX_ yozuvlardan filtrlandi)",
    "infoPostFix": "",
    "infoThousands": ",",
    "lengthMenu": "_MENU_ ta yozuvlarni ko‘rsatish",
    "loadingRecords": "Yuklanmoqda...",
    "processing": "Yuklanmoqda...",
    "search": "Izlash:",
    "searchBuilder": {
        "add": "Holat qo‘shish",
        "clearAll": "Barchasini tozalash",
        "condition": "Holat",
        "conditions": {
            "array": {
                "contains": "Tarkibida",
                "empty": "Bo‘sh",
                "equals": "Teng",
                "not": "Yo‘q",
                "notEmpty": "Bo‘sh emas"
            },
            "date": {
                "after": "Keyin",
                "before": "Oldin",
                "between": "Orasida",
                "empty": "Bo‘sh",
                "equals": "Teng",
                "not": "Yo‘q",
                "notBetween": "Orasida emas",
                "notEmpty": "Bo‘sh emas"
            },
            "number": {
                "between": "Orasida",
                "empty": "Bo‘sh",
                "equals": "Teng",
                "gt": "Kattaroq",
                "gte": "Kattaroq yoki teng",
                "lt": "Kamroq",
                "lte": "Kamroq yoki teng",
                "not": "Yo‘q",
                "notBetween": "Orasida emas",
                "notEmpty": "Bo‘sh emas"
            },
            "string": {
                "contains": "Tarkibida",
                "empty": "Bo‘sh",
                "equals": "Teng",
                "not": "Tugaydi",
                "notContains": "Tarkibiga kirmaydi",
                "notEmpty": "Bo‘sh emas",
                "notEndsWith": "Bilan tugamaydi",
                "notStartsWith": "Bilan boshlanmaydi",
                "startsWith": "Boshlanadi"
            }
        },
        "data": "Ma‘lumot",
        "deleteTitle": "Filtrlash qoidalarini tozalash",
        "logicAnd": "Va",
        "logicOr": "Yoki",
        "value": "Qiymat"
    },
    "searchPanes": {
        "clearMessage": "Barchasini tozalash",
        "collapseMessage": "Barchasini yopish",
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "showMessage": "Barchasini ko‘rsatish",
        "title": "Faol filtrlar - %d"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "%d ta kataklar tanlandi",
            "0": "",
            "1": "1 ta katak tanlandi"
        },
        "columns": {
            "_": "%d ta ustunlar tanlandi",
            "0": "",
            "1": "1 ta ustun tanlandi"
        },
        "rows": {
            "_": "%d ta qatorlar tanlandi",
            "0": "",
            "1": "1 ta qator tanlandi"
        }
    },
    "stateRestore": {
        "creationModal": {
            "button": "Yaratish",
            "columns": {
                "search": "Ustundan qidirish",
                "visible": "Ustun ko‘rinishi"
            },
            "name": "Nomi:",
            "order": "Tartiblash",
            "paging": "Sahifalash",
            "search": "Qidirish",
            "select": "Tanlash",
            "title": "Yangi holat yaratish",
            "toggleLabel": "Shularni o‘z ichiga oladi:"
        },
        "duplicateError": "Ushbu nomdagi holat mavjud.",
        "emptyError": "Nomi bo‘sh bo‘lishi mumkin emas.",
        "emptyStates": "Saqlangan holatlar mavjud emas",
        "removeConfirm": "%s ni o‘chirmoqchimisiz?",
        "removeError": "Holatni o‘chirishda xatolik yuz berdi.",
        "removeJoiner": "va",
        "removeSubmit": "O‘chirish",
        "removeTitle": "O‘chirish holati",
        "renameButton": "Qayta nomlash",
        "renameLabel": "%s uchun yangi nom:",
        "renameTitle": "Qayta nomlash holati"
    },
    "thousands": ",",
    "zeroRecords": "Mos keladigan ma‘lumotlar topilmadi"
};
}));
