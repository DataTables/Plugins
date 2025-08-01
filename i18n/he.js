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
            "first": "ראשון",
            "last": "אחרון",
            "next": "הבא",
            "previous": "קודם"
        }
    },
    "autoFill": {
        "cancel": "ביטול",
        "fill": "מלא את כל התאים עם  <i>%d<i><\/i><\/i>",
        "fillHorizontal": "מלא תאים במאוזן",
        "fillVertical": "מלא תאים במאונך",
        "info": ""
    },
    "buttons": {
        "collection": "אוסף",
        "colvis": "נראות עמודות",
        "colvisRestore": "שחזור נראות",
        "copy": "העתק",
        "copyKeys": "לחץ ctrl או u2318 + C על מנת להעתיק את תוכן הטבלה.",
        "copySuccess": {
            "_": "%ds רשומות הועתקו",
            "1": "רשומה 1 הועתקה"
        },
        "copyTitle": "העתקת תוכן",
        "createState": "צור מצב",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "הצג %d רשומות",
            "-1": "הצג את כל הרשומות"
        },
        "pdf": "PDF",
        "print": "הדפס",
        "removeAllStates": "הסר את כל המצבים",
        "removeState": "הסר",
        "renameState": "שנה שם",
        "savedStates": "מצבים שמורים",
        "stateRestore": "מצב %d",
        "updateState": "עדכן"
    },
    "datetime": {
        "amPm": {
            "0": "לפנה\"צ",
            "1": "אחה\"צ"
        },
        "hours": "שעה",
        "minutes": "דקה",
        "months": {
            "0": "ינואר",
            "1": "פברואר",
            "10": "נובמבר",
            "11": "דצמבר",
            "2": "מרץ",
            "3": "אפריל",
            "4": "מאי",
            "5": "יוני",
            "6": "יולי",
            "7": "אוגוסט",
            "8": "ספטמבר",
            "9": "אוקטובר"
        },
        "next": "הבא",
        "previous": "הקודם",
        "seconds": "שניה",
        "unknown": "-",
        "weekdays": {
            "0": "א",
            "1": "ב",
            "2": "ג",
            "3": "ד",
            "4": "ה",
            "5": "ו",
            "6": "ש"
        }
    },
    "decimal": "",
    "editor": {
        "close": "סגור",
        "create": {
            "button": "חדש",
            "submit": "צור",
            "title": "צור רשומה חדשה"
        },
        "edit": {
            "button": "ערוך",
            "submit": "עדכן",
            "title": "עריכת רשומה"
        },
        "error": {
            "system": "אירעה שגיאת מערכת (פרטים נוספים)."
        },
        "multi": {
            "info": "הרשומות שנבחרו מכילים מישע שונה עבור שדה זה. על מנת להגדיר את ששדה זה בכל הרשומות יכיל ערך זהה, לחץ כאן. אחרת הם יישארו עם אותו ערך שהתקבל",
            "noMulti": "שדה זה יכול ליות מוגדר בנפרד אך לא כקבוצה",
            "restore": "בטל שינוי",
            "title": "מגוון ערכים שונים"
        },
        "remove": {
            "button": "מחק",
            "confirm": {
                "_": "האם אתה בטוח שברצונך למחוק %d רשומות?",
                "1": "האם אתה בטוח שברצונך למחוק רשומה אחת?"
            },
            "submit": "מחק",
            "title": "מחיקה"
        }
    },
    "emptyTable": "לא נמצאו רשומות מתאימות",
    "info": "מציג _START_ עד _END_ מתוך _TOTAL_ רשומות",
    "infoEmpty": "0 עד 0 מתוך 0 רשומות",
    "infoFiltered": "(מסונן מסך _MAX_  רשומות)",
    "infoPostFix": "",
    "infoThousands": ",",
    "lengthMenu": "הצג _MENU_ פריטים",
    "loadingRecords": "טוען...",
    "processing": "מעבד...",
    "search": "חפש:",
    "searchBuilder": {
        "add": "הוסף תנאי",
        "button": {
            "_": "בניית חיפוש (%d)",
            "0": "בניית חיפוש"
        },
        "clearAll": "נקה הכל",
        "condition": "תנאי",
        "conditions": {
            "array": {
                "contains": "מכיל",
                "empty": "ריק",
                "equals": "שווה",
                "not": "לא",
                "notEmpty": "לא ריק",
                "without": "ללא"
            },
            "date": {
                "after": "אחרי",
                "before": "לפני",
                "between": "בין",
                "empty": "ריק",
                "equals": "שווה ל",
                "not": "לא",
                "notBetween": "לא בין",
                "notEmpty": "לא ריק"
            },
            "number": {
                "between": "בין",
                "empty": "ריק",
                "equals": "שווה ל",
                "gt": "גדול מ",
                "gte": "גדול או שווה ל",
                "lt": "קטן מ",
                "lte": "קטן או שווה ל",
                "not": "לא",
                "notBetween": "לא בין",
                "notEmpty": "לא ריק"
            },
            "string": {
                "contains": "מכיל",
                "empty": "ריק",
                "endsWith": "נגמר ב",
                "equals": "שווה ל",
                "not": "לא",
                "notContains": "לא מכיל",
                "notEmpty": "לא ריק",
                "notEndsWith": "לא מסתיים ב",
                "notStartsWith": "לא מתחיל ב",
                "startsWith": "מתחיל ב"
            }
        },
        "data": "תוכן",
        "deleteTitle": "מחיקת חוק סינון",
        "leftTitle": "הזח קריטריונים החוצה",
        "logicAnd": "וגם",
        "logicOr": "או",
        "rightTitle": "הזח קריטריונים פנימה",
        "title": {
            "_": "בניית חיפוש (%d)",
            "0": "בניית חיפוש"
        },
        "value": "ערך"
    },
    "searchPanes": {
        "clearMessage": "איפוס מסננים",
        "collapse": {
            "_": "מסנני חיפוש (%d)",
            "0": "מסנני חיפוש"
        },
        "collapseMessage": "מוטט הכל",
        "count": "ספירה",
        "countFiltered": "{מוצג} ({סה\"כ})",
        "emptyPanes": "אין מסנני חיפוש",
        "loadMessage": "מסנני חיפוש בטעינה",
        "showMessage": "הצג הכל",
        "title": "מסננים פעילים - %d"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "%d תאים נבחרו",
            "0": "",
            "1": "תא אחד נבחר"
        },
        "columns": {
            "_": "%d עמודות נבחרו",
            "0": "",
            "1": "עמודה אחת נבחרה"
        },
        "rows": {
            "_": "%d שורות נבחרו",
            "0": "",
            "1": "שורה אחת נבחרה"
        }
    },
    "stateRestore": {
        "creationModal": {
            "button": "צור",
            "columns": {
                "search": "חיפוש עמודות",
                "visible": "נראות עמודות"
            },
            "name": "שם:",
            "order": "מיון",
            "paging": "דפדוף",
            "scroller": "מיקום גלילה",
            "search": "חיפוש",
            "searchBuilder": "בניית חיפוש",
            "select": "בחירה",
            "title": "צור מצב חדש",
            "toggleLabel": "כולל:"
        },
        "duplicateError": "מצב עם השם הזה כבר קיים.",
        "emptyError": "השם לא יכול להיות ריק.",
        "emptyStates": "אין מצבים שמורים",
        "removeConfirm": "האם אתה בטוח שברצונך להסיר %s?",
        "removeError": "כשל בהסרת מצב.",
        "removeJoiner": " וגם ",
        "removeSubmit": "הסר",
        "removeTitle": "הסר מצב",
        "renameButton": "שנה שם",
        "renameLabel": "שם חדש עבור %s:",
        "renameTitle": "שינוי שם מצב"
    },
    "thousands": ",",
    "zeroRecords": "לא נמצאו רשומות מתאימות"
};
}));
