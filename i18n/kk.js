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
    "emptyTable": "Кестеде деректер жоқ",
    "info": "_TOTAL_ жазбадан _START_ - _END_ дейінгі жазбалар көрсетілуде",
    "infoEmpty": "0-ден 0-ге дейінгі 0 жазба көрсетілуде",
    "infoFiltered": "(_MAX_ жалпы жазбадан сүзгіленген)",
    "infoThousands": " ",
    "lengthMenu": "_MENU_ жазбаны көрсету",
    "loadingRecords": "Жүктелуде...",
    "processing": "Өңделуде...",
    "search": "Іздеу:",
    "zeroRecords": "Сәйкес келетін жазбалар табылған жоқ",
    "thousands": " ",
    "paginate": {
        "first": "Бірінші",
        "last": "Соңғы",
        "next": "Келесі",
        "previous": "Алдыңғы"
    },
    "aria": {
        "sortAscending": ": бағанды өсу бойынша сұрыптау үшін белсендіру",
        "sortDescending": ": бағанды азаю бойынша сұрыптау үшін белсендіру"
    },
    "autoFill": {
        "cancel": "Болдырмау",
        "fill": "Барлық ұяшықтарды <i>%d</i> мәнімен толтыру",
        "fillHorizontal": "Ұяшықтарды көлденеңінен толтыру",
        "fillVertical": "Ұяшықтарды тігінен толтыру"
    },
    "buttons": {
        "collection": "Жинақ <span class='ui-button-icon-primary ui-icon ui-icon-triangle-1-s'\/>",
        "colvis": "Бағандардың көрінуі",
        "colvisRestore": "Көрінуді қалпына келтіру",
        "copy": "Көшіру",
        "copyKeys": "Жүйелік буферге көшіру үшін ctrl немесе u2318 + C пернелерін басыңыз.<br><br>Болдырмау үшін осы хабарламаны басыңыз немесе escape пернесін басыңыз.",
        "copySuccess": {
            "1": "Буферге 1 жол көшірілді",
            "_": "Буферге %d жол көшірілді"
        },
        "copyTitle": "Буферге көшіру",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "-1": "Барлық жолдарды көрсету",
            "_": "%d жолды көрсету"
        },
        "pdf": "PDF",
        "print": "Баспа",
        "updateState": "Жаңарту",
        "stateRestore": "Күй %d",
        "savedStates": "Сақталған күйлер",
        "renameState": "Атын өзгерту",
        "removeState": "Жою",
        "removeAllStates": "Барлық күйлерді жою",
        "createState": "Күй жасау"
    },
    "searchBuilder": {
        "add": "Шарт қосу",
        "button": {
            "0": "Іздеу құрастырғышы",
            "_": "Іздеу құрастырғышы (%d)"
        },
        "clearAll": "Барлығын тазарту",
        "condition": "Шарт",
        "conditions": {
            "date": {
                "after": "Кейін",
                "before": "Бұрын",
                "between": "Арасында",
                "empty": "Бос",
                "equals": "Тең",
                "not": "Тең емес",
                "notBetween": "Арасында емес",
                "notEmpty": "Бос емес"
            },
            "number": {
                "between": "Арасында",
                "empty": "Бос",
                "equals": "Тең",
                "gt": "Үлкен",
                "gte": "Үлкен немесе тең",
                "lt": "Кіші",
                "lte": "Кіші немесе тең",
                "not": "Тең емес",
                "notBetween": "Арасында емес",
                "notEmpty": "Бос емес"
            },
            "string": {
                "contains": "Қамтиды",
                "empty": "Бос",
                "endsWith": "Аяқталады",
                "equals": "Тең",
                "not": "Тең емес",
                "notEmpty": "Бос емес",
                "startsWith": "Басталады",
                "notContains": "Қамтымайды",
                "notStartsWith": "Басталмайды",
                "notEndsWith": "Аяқталмайды"
            },
            "array": {
                "without": "Сыз",
                "notEmpty": "Бос емес",
                "not": "Тең емес",
                "contains": "Қамтиды",
                "empty": "Бос",
                "equals": "Тең"
            }
        },
        "data": "Деректер",
        "deleteTitle": "Сүзгілеу ережесін жою",
        "leftTitle": "Критерийді солға жылжыту",
        "logicAnd": "Және",
        "logicOr": "Немесе",
        "rightTitle": "Критерийді оңға жылжыту",
        "title": {
            "0": "Іздеу құрастырғышы",
            "_": "Іздеу құрастырғышы (%d)"
        },
        "value": "Мән"
    },
    "searchPanes": {
        "clearMessage": "Барлығын тазарту",
        "collapse": {
            "0": "Іздеу тақтасы",
            "_": "Іздеу тақтасы (%d)"
        },
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "Іздеу тақтасы жоқ",
        "loadMessage": "Іздеу тақтасы жүктелуде",
        "title": "Белсенді сүзгілер - %d",
        "showMessage": "Барлығын көрсету",
        "collapseMessage": "Барлығын жабу"
    },
    "select": {
        "cells": {
            "1": "1 ұяшық таңдалды",
            "_": "%d ұяшық таңдалды"
        },
        "columns": {
            "1": "1 баған таңдалды",
            "_": "%d баған таңдалды"
        },
        "rows": {
            "1": "1 жол таңдалды",
            "_": "%d жол таңдалды"
        }
    },
    "datetime": {
        "previous": "Алдыңғы",
        "next": "Келесі",
        "hours": "Сағат",
        "minutes": "Минут",
        "seconds": "Секунд",
        "unknown": "-",
        "amPm": [
            "таңертеңгі",
            "кешкі"
        ],
        "weekdays": [
            "Жексенбі",
            "Дүйсенбі",
            "Сейсенбі",
            "Сәрсенбі",
            "Бейсенбі",
            "Жұма",
            "Сенбі"
        ],
        "months": [
            "Қаңтар",
            "Ақпан",
            "Наурыз",
            "Сәуір",
            "Мамыр",
            "Маусым",
            "Шілде",
            "Тамыз",
            "Қыркүйек",
            "Қазан",
            "Қараша",
            "Желтоқсан"
        ]
    },
    "editor": {
        "close": "Жабу",
        "create": {
            "button": "Жаңа",
            "title": "Жаңа жазба жасау",
            "submit": "Жасау"
        },
        "edit": {
            "button": "Өңдеу",
            "title": "Жазбаны өңдеу",
            "submit": "Жаңарту"
        },
        "remove": {
            "button": "Жою",
            "title": "Жою",
            "submit": "Жою",
            "confirm": {
                "_": "%d жолды жоюды растайсыз ба?",
                "1": "1 жолды жоюды растайсыз ба?"
            }
        },
        "error": {
            "system": "Жүйелік қате орын алды (<a target=\"\\\" rel=\"nofollow\" href=\"\\\">Толық ақпарат<\/a>)."
        },
        "multi": {
            "title": "Бірнеше мәндер",
            "info": "Таңдалған элементтердің осы енгізуде түрлі мәндері бар. Барлық элементтердің бірдей мәнін орнату үшін осында басыңыз, әйтпесе олар жеке мәндерін сақтайды.",
            "restore": "Өзгерістерді болдырмау",
            "noMulti": "Бұл енгізу жеке түрде өңделуі мүмкін, бірақ топтың бөлігі ретінде емес."
        }
    },
    "stateRestore": {
        "renameTitle": "Күйдің атын өзгерту",
        "renameLabel": "%s үшін жаңа атау:",
        "renameButton": "Атын өзгерту",
        "removeTitle": "Күйді жою",
        "removeSubmit": "Жою",
        "removeJoiner": " және ",
        "removeError": "Күйді жою сәтсіз аяқталды.",
        "removeConfirm": "%s күйін жоюды растайсыз ба?",
        "emptyStates": "Сақталған күйлер жоқ",
        "emptyError": "Атау бос болмауы керек.",
        "duplicateError": "Бұл атаулы күй бұрыннан бар.",
        "creationModal": {
            "toggleLabel": "Қамтиды:",
            "title": "Жаңа күй жасау",
            "select": "Таңдау",
            "searchBuilder": "Іздеу құрастырушысы",
            "search": "Іздеу",
            "scroller": "Айналдыру позициясы",
            "paging": "Беттеу",
            "order": "Сұрыптау",
            "name": "Атауы:",
            "columns": {
                "visible": "Бағандардың көрінуі",
                "search": "Бағандарды іздеу"
            },
            "button": "Жасау"
        }
    }
};
}));
