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
        "orderable": "ترتيب ",
        "orderableRemove": "الغاء الترتيب",
        "orderableReverse": "ترتيب تنازلي",
        "paginate": {
            "first": "الأول",
            "last": "الأخير"
        }
    },
    "autoFill": {
        "cancel": "إلغاء",
        "fill": "ملء كل الخلايا بـ <i>%d&lt;\\\/i&gt;<\/i>",
        "fillHorizontal": "ملء الخلايا أفقيًا",
        "fillVertical": "ملء الخلايا عموديا",
        "info": ""
    },
    "buttons": {
        "collection": "مجموعة",
        "colvis": "إظهار الأعمدة",
        "colvisRestore": "عرض الأعمدة",
        "copy": "نسخ",
        "copyKeys": "أضغط زر  <i>ctrl&lt;\\\/i&gt; أو <i>⌘&lt;\\\/i&gt; + <i>C&lt;\\\/i&gt; من الجدول<br \/>ليتم نسخها إلى الحافظة<br \/><br \/>للإلغاء اضغط على الرسالة أو اضغط على زر الخروج.<\/i><\/i><\/i>",
        "copySuccess": {
            "_": "تم نسخ %ds سجلات الى الحافظة",
            "1": "تم نسخ سجل واحد إلى الذاكرة"
        },
        "copyTitle": "نسخ إلى الذاكرة",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "عرض %d سجلا",
            "-1": "عرض جميع السجلات",
            "1": "عرض سجل واحد"
        },
        "pdf": "PDF",
        "print": "طباعة"
    },
    "columnControl": {
        "buttons": {
            "searchClear": "الغاء نتائج البحث"
        },
        "colVis": "اظهار الاعمدة",
        "colVisDropdown": "اظهار الأعمدة",
        "dropdown": "عرض المزيد..",
        "list": {
            "all": "عرض الجميع",
            "none": "الغاء التحديد",
            "search": "بحث..."
        },
        "orderAddAsc": "اضافة ترتيب تصاعدي",
        "orderAddDesc": "اضافة ترتيب تنازلي",
        "orderAsc": "ترتيب تصاعدي",
        "orderDesc": "تريبت تنازلي",
        "orderRemove": "ازالة من الترتيب",
        "reorder": "اعادة ترتيب الاعمدة",
        "reorderLeft": "تحريك العمود لليسار",
        "reorderRight": "تحريك العمود لليمين",
        "search": {
            "datetime": {
                "greater": "بعد",
                "less": "قبل"
            },
            "number": {
                "empty": "خالي",
                "equal": "يساوي",
                "greater": " أكبر من",
                "greaterOrEqual": "أكبر او يساوي",
                "less": "أصغر من",
                "lessOrEqual": "أصغر او يساوي",
                "notEmpty": "غير خالي",
                "notEqual": "لا يساوي"
            },
            "text": {
                "contains": "يتضمن",
                "ends": "ينتهي",
                "equal": "يقابل",
                "notContains": "لا يتضمن",
                "notEqual": "لا يقابل",
                "starts": "يبدأ"
            }
        },
        "searchClear": "الغاء البحث"
    },
    "datetime": {
        "amPm": {
            "0": "صباحا",
            "1": "مساءا"
        },
        "hours": "الساعة",
        "minutes": "الدقيقة",
        "months": {
            "0": "كانون الثاني",
            "1": "شباط",
            "10": "تشرين الثاني",
            "11": "كانون الأول",
            "2": "آذار",
            "3": "نيسان",
            "4": "أيار",
            "5": "حزيران",
            "6": "تموز",
            "7": "آب",
            "8": "إيلول",
            "9": "تشرين الأول"
        },
        "next": "التالي",
        "previous": "السابق",
        "seconds": "الثانية",
        "unknown": "-",
        "weekdays": {
            "0": "أحد",
            "1": "اثنين",
            "2": "ثلاثاء",
            "3": "أربعاء",
            "4": "خميس",
            "5": "جمعة",
            "6": "سبت"
        }
    },
    "decimal": "",
    "editor": {
        "close": "اغلاق",
        "create": {
            "button": "جديد",
            "title": "انشاء سجل جديد"
        },
        "edit": {
            "button": "تعديل",
            "submit": "تحديث",
            "title": "تعديل سجل"
        },
        "error": {
            "system": "حصل خطأ في النظام (&lt;a target=\"\\\" rel=\"nofollow\" href=\"\\\"&gt;More information&lt;\/a&gt;)."
        },
        "multi": {
            "info": "تحتوي السجلات المختارة قيم متباينة لهذا المدخل. لتعدي او ضبط جميع السجلات لهذا المدخل الى قيمة موحدة اضغط هنا، والا ستحتفظ هذه السجلات بقيمها الحالية",
            "noMulti": "يمكن تعديل هذا المدخل بشكل منفصل وليس كعنصر من مجموعة",
            "restore": "الغاء التعديلات",
            "title": "عدة مدخلات"
        },
        "remove": {
            "confirm": {
                "_": "هل أنت متأكد من رغبتك في حذف السجلات %d المحددة؟",
                "1": "هل أنت متأكد من رغبتك في حذف السجل المحدد؟"
            },
            "submit": "حذف"
        }
    },
    "emptyTable": " لا يوجد بيانات  لعرضها",
    "info": "عرض_START_ إلى _END_ من أصل _TOTAL_ سجل",
    "infoEmpty": "عرض 0  من أصل 0 سجل",
    "infoFiltered": "سجل مختار من مجموع _MAX_ سجل",
    "infoPostFix": "",
    "lengthLabels": {
        "-1": "الكل"
    },
    "lengthMenu": "عرض_MENU_ سجل",
    "loadingRecords": "جارٍ التحميل...",
    "orderClear": "إلغاء الترتيب",
    "processing": "تتم المعالجة...",
    "search": "بحث:",
    "searchBuilder": {
        "add": "اضافة شرط",
        "clearAll": "الغاء الجميع",
        "condition": "الشرط",
        "conditions": {
            "array": {
                "contains": "يحتوي",
                "empty": "فارغ",
                "equals": "يكافئ",
                "not": "ليس",
                "notEmpty": "ليس خاليا",
                "without": "بدون"
            },
            "date": {
                "notEmpty": "ليس فارغ"
            },
            "number": {
                "between": "بين",
                "gt": "أكبر من",
                "lt": "أقل من",
                "lte": "أقل أو يساوي ",
                "notBetween": "ليس بين",
                "notEmpty": "ليس صفرا"
            },
            "string": {
                "endsWith": "ينتهي بـ",
                "notContains": "لا يحتوي",
                "notEndsWith": "لا ينتهي بـ",
                "notStartsWith": "لا يبدأ بـ",
                "startsWith": "يبدأ بـ"
            }
        },
        "data": "البيانات",
        "deleteTitle": "حذف المرشحات",
        "leftTitle": "زيادة المسافة البادئة",
        "logicOr": "أو",
        "rightTitle": "انقاص المسافة البادئة",
        "search": "بحث",
        "title": {
            "_": "إنشاء البحث (%d)",
            "0": "إنشاء البحث"
        },
        "value": "القيمة",
        "valueJoiner": "و"
    },
    "searchPanes": {
        "clearMessage": "الغاء الكل",
        "collapse": {
            "_": "نتيجة (%d)",
            "0": "نتيجة بحث"
        },
        "collapseMessage": "إخفاء الكل",
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyMessage": "&lt;em&gt;لا توجد بيانات&lt;\\\/em&gt;",
        "emptyPanes": "لا يوجد صندوق بحث",
        "loadMessage": "تحميل نتائج البحث...",
        "showMessage": "عرض الكل",
        "title": "الفلاتر النشطة - %d"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "تم اختيار %d خلايا",
            "0": "",
            "1": "تم اختيار خلية واحدة"
        },
        "columns": {
            "_": "تم اختيار %d عمودا",
            "0": "",
            "1": "تم اختيار عمود واحد"
        },
        "rows": {
            "_": "تم اختيار %d سطرا",
            "0": "",
            "1": "تم اختيار سطر واحد"
        }
    },
    "stateRestore": {
        "button": {
            "create": "تكوين حالة",
            "edit": "تحديث الحالة",
            "remove": "ازالة الحالة",
            "statesList": "الحالات المحفوظة",
            "statesRemoveAll": "ازالة جميع الحالات"
        },
        "create": {
            "title": "انشاء حالة جديدة"
        },
        "remove": {
            "button": "أزل",
            "message": {
                "_": "%s ؟هل انت متأكد انك تريد ازالة "
            },
            "title": "أزل الحالة"
        }
    },
    "thousands": ",",
    "zeroRecords": "لم يعثر على أية سجلات"
};
}));
