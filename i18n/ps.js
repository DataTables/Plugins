(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory();
    }
    // No browser loader - use JSON, ESM, CJS or AMD
}
(function() {
    return {
        "emptyTable": "جدول خالي دی",
        "info": "د _START_ څخه تر _END_ پورې، له ټولو _TOTAL_ څخه",
        "infoEmpty": "د 0 څخه تر 0 پورې، له ټولو 0 څخه",
        "infoFiltered": "(لټول شوی له ټولو _MAX_ څخه)",
        "infoThousands": ",",
        "lengthMenu": "_MENU_ کتاره وښایاست",
        "loadingRecords": "منتظر اوسئ...",
        "processing": "پر کار دی...",
        "search": "لټون:",
        "zeroRecords": "د لټون مطابق معلومات ونه موندل شول",
        "paginate": {
            "first": "لومړۍ",
            "last": "وروستۍ",
            "next": "بله",
            "previous": "شاته"
        },
        "aria": {
            "sortAscending": ": په صعودي ډول مرتبول",
            "sortDescending": ": په نزولي ډول مرتبول"
        },
        "autoFill": {
            "cancel": "لغو کول",
            "fill": "ټول خلیجونه په <i>%d<\/i> سره ډک کړئ",
            "fillHorizontal": "خلیجونه افقي ډول ډک کړئ",
            "fillVertical": "خلیجونه عمودي ډول ډک کړئ"
        },
        "buttons": {
            "collection": "مجموعه <span class='ui-button-icon-primary ui-icon ui-icon-triangle-1-s'\/>",
            "colvis": "ستونزې ښکاره کړئ",
            "colvisRestore": "د لید حالت بیا راټولول",
            "copy": "کاپي",
            "copyKeys": "Press ctrl or u2318 + C to copy the table data to your system clipboard.<br><br>To cancel, click this message or press escape.",
            "copySuccess": {
                "1": "1 قطعه کاپي شوه",
                "_": "%d قطعې کاپي شوې"
            },
            "copyTitle": "کاپي ته",
            "csv": "CSV",
            "excel": "Excel",
            "pageLength": {
                "-1": "ټول ردیفونه وښایئ",
                "_": "وښایئ %d ردیفونه"
            },
            "pdf": "PDF",
            "print": "چاپ",
            "updateState": "تازه",
            "stateRestore": "حالت %d",
            "savedStates": "خوندي شوي حالات",
            "renameState": "نوې نوم",
            "removeState": "لیرې کول",
            "removeAllStates": "ټول حالات لیرې کړئ",
            "createState": "د حالت جوړول"
        },
        "searchBuilder": {
            "add": "شرط اضافه کړئ",
            "button": {
                "0": "د لټون جوړونکی",
                "_": "د لټون جوړونکی (%d)"
            },
            "clearAll": "ټول پاک کړئ",
            "condition": "شرط",
            "conditions": {
                "date": {
                    "after": "وروسته",
                    "before": "مخکې",
                    "between": "تر منځ",
                    "empty": "خالي",
                    "equals": "برابر",
                    "not": "نه",
                    "notBetween": "تر منځ نه",
                    "notEmpty": "خالي نه"
                },
                "number": {
                    "between": "تر منځ",
                    "empty": "خالي",
                    "equals": "برابر",
                    "gt": "له",
                    "gte": "له برابر",
                    "lt": "کم",
                    "lte": "کم برابر",
                    "not": "نه",
                    "notBetween": "تر منځ نه",
                    "notEmpty": "خالي نه"
                },
                "string": {
                    "contains": "شامل دی",
                    "empty": "خالي",
                    "endsWith": "سره پای ته رسېږي",
                    "equals": "برابر",
                    "not": "نه",
                    "notEmpty": "خالي نه",
                    "startsWith": "سره پیل کیږي",
                    "notContains": "شامل نه دی",
                    "notStartsWith": "سره پیل نه کیږي",
                    "notEndsWith": "سره پای ته نه رسېږي"
                },
                "array": {
                    "without": "بغیر",
                    "notEmpty": "خالي نه",
                    "not": "نه",
                    "contains": "شامل دی",
                    "empty": "خالي",
                    "equals": "برابر"
                }
            },
            "data": "معلومات",
            "deleteTitle": "د فلټر کولو قاعده لیرې کول",
            "leftTitle": "معیارونه منفي کړئ",
            "logicAnd": "او",
            "logicOr": "یا",
            "rightTitle": "معیارونه مثبت کړئ",
            "title": {
                "0": "د لټون جوړونکی",
                "_": "د لټون جوړونکی (%d)"
            },
            "value": "ارزښت"
        },
        "searchPanes": {
            "clearMessage": "ټول پاک کړئ",
            "collapse": {
                "0": "د لټون پین",
                "_": "د لټون پین (%d)"
            },
            "count": "{total}",
            "countFiltered": "{shown} ({total})",
            "emptyPanes": "هیڅ لټون پین نشته",
            "loadMessage": "د لټون پینونه بارول",
            "title": "فلټرونه فعال - %d",
            "showMessage": "ټول وښایئ",
            "collapseMessage": "ټول کم کړئ"
        },
        "select": {
            "cells": {
                "1": "1 خلیج انتخاب شوی",
                "_": "%d خلیجونه انتخاب شوي"
            },
            "columns": {
                "1": "1 کالم انتخاب شوی",
                "_": "%d کالمونه انتخاب شوي"
            },
            "rows": {
                "1": "1 قطعه انتخاب شوې",
                "_": "%d قطعې انتخاب شوې"
            }
        },
        "datetime": {
            "previous": "مخکینی",
            "next": "راتلونکی",
            "hours": "ساعت",
            "minutes": "دقیقه",
            "seconds": "ثانیه",
            "unknown": "-",
            "amPm": [
                "صبا",
                "ماښام"
            ],
            "weekdays": [
                "یکشنبه",
                "دوشنبه",
                "سه‌شنبه",
                "چهارشنبه",
                "پنجشنبه",
                "جمعه",
                "شنبه"
            ],
            "months": [
                "جنوري",
                "فبروري",
                "مارچ",
                "اپریل",
                "می",
                "جون",
                "جولای",
                "اګست",
                "سپتمبر",
                "اکتوبر",
                "نوامبر",
                "دسمبر"
            ]
        },
        "editor": {
            "close": "بندول",
            "create": {
                "button": "نوی",
                "title": "نوې داخله جوړه کړئ",
                "submit": "جوړول"
            },
            "edit": {
                "button": "سمول",
                "title": "د داخله سمول",
                "submit": "نوې کول"
            },
            "remove": {
                "button": "لیرې کول",
                "title": "لیرې کول",
                "submit": "لیرې کول",
                "confirm": {
                    "_": "آیا تاسو یقین لری چې غواړئ %d قطعات لیرې کړئ؟",
                    "1": "آیا تاسو یقین لری چې غواړئ 1 قطعه لیرې کړئ؟"
                }
            },
            "error": {
                "system": "یو سیسټم خطا رامنځته شوی (<a target=\"\\\" rel=\"nofollow\" href=\"\\\">نور معلومات<\/a>)."
            },
            "multi": {
                "title": "متعدد ارزښتونه",
                "info": "انتخاب شوي توکي د دې ان پټ لپاره مختلف ارزښتونه لري. د دې ان پټ لپاره ټول توکي د یوه ارزښت سره سمول، دلته کلیک کړئ یا ټپ کړئ، او که نه، هغوی به خپل انفرادی ارزښتونه وساتي.",
                "restore": "بدلونونه پخواني کړئ",
                "noMulti": "دا ان پټ انفرادی توګه سمول کیدی شي، مګر د ډلې برخه نه ده."
            }
        },
        "stateRestore": {
            "renameTitle": "حالت نومول",
            "renameLabel": "د %s لپاره نوې نوم:",
            "renameButton": "نومول",
            "removeTitle": "حالت لیرې کول",
            "removeSubmit": "لیرې کول",
            "removeJoiner": "او",
            "removeError": "د حالت لیرې کولو کې ناکامي.",
            "removeConfirm": "آیا تاسو یقین لری چې غواړئ %s لیرې کړئ؟",
            "emptyStates": "هیڅ خوندي شوي حالات نشته",
            "emptyError": "نوم خالي نشي کیدی.",
            "duplicateError": "د دې نوم سره یو حالت شتون لري.",
            "creationModal": {
                "toggleLabel": "شامل دي:",
                "title": "نوې حالت جوړه کړئ",
                "select": "انتخاب",
                "searchBuilder": "د لټون جوړونکی",
                "search": "لټون",
                "scroller": "د سکرول موقعیت",
                "paging": "صفحه بندي",
                "order": "ترتیب",
                "name": "نوم:",
                "columns": {
                    "visible": "د کالم لید",
                    "search": "د کالم لټون"
                },
                "button": "جوړول"
            }
        }
    };
}));