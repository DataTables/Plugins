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
            "first": "第一頁",
            "last": "最後一頁",
            "next": "下一頁",
            "previous": "上一頁"
        }
    },
    "autoFill": {
        "cancel": "取消",
        "info": ""
    },
    "buttons": {
        "collection": "更多",
        "colvis": "欄位顯示",
        "colvisRestore": "重置欄位顯示",
        "copy": "複製",
        "copySuccess": {
            "_": "複製了 %d 筆資料",
            "1": "複製了 1 筆資料"
        },
        "copyTitle": "已經複製到剪貼簿",
        "createState": "建立狀態",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "顯示 %d 筆",
            "-1": "顯示全部"
        },
        "pdf": "PDF",
        "print": "列印",
        "removeAllStates": "移除所有狀態",
        "removeState": "移除",
        "renameState": "重新命名",
        "savedStates": "儲存狀態",
        "stateRestore": "狀態 %d",
        "updateState": "更新"
    },
    "datetime": {
        "amPm": {
            "0": "上午",
            "1": "下午"
        },
        "hours": "時",
        "minutes": "分",
        "months": {
            "0": "一月",
            "1": "二月",
            "10": "十一月",
            "11": "十二月",
            "2": "三月",
            "3": "四月",
            "4": "五月",
            "5": "六月",
            "6": "七月",
            "7": "八月",
            "8": "九月",
            "9": "十月"
        },
        "next": "下一頁",
        "previous": "上一頁",
        "seconds": "秒",
        "unknown": "未知",
        "weekdays": {
            "0": "週日",
            "1": "週一",
            "2": "週二",
            "3": "週三",
            "4": "週四",
            "5": "週五",
            "6": "週六"
        }
    },
    "decimal": "",
    "editor": {
        "close": "關閉",
        "create": {
            "button": "新增",
            "submit": "送出新增",
            "title": "新增資料"
        },
        "edit": {
            "button": "修改",
            "submit": "送出修改",
            "title": "修改資料"
        },
        "error": {
            "system": "系統發生錯誤(更多資訊)"
        },
        "multi": {
            "info": "您所選擇的多筆資料中，此欄位包含了不同的值。若您想要將它們都改為同一個值，可以在此輸入，要不然它們會保留各自原本的值。",
            "noMulti": "此輸入欄需單獨輸入，不容許多筆資料一起修改",
            "restore": "復原",
            "title": "多重值"
        },
        "remove": {
            "button": "刪除",
            "confirm": {
                "_": "您確定要刪除您所選取的 %d 筆資料嗎？",
                "1": "您確定要刪除您所選取的 1 筆資料嗎？"
            },
            "submit": "送出刪除",
            "title": "刪除資料"
        }
    },
    "emptyTable": "目前沒有資料",
    "info": "顯示第 _START_ 至 _END_ 筆結果，共 _TOTAL_ 筆",
    "infoEmpty": "顯示第 0 至 0 筆結果，共 0 筆",
    "infoFiltered": "(從 _MAX_ 筆結果中篩選)",
    "infoPostFix": "",
    "infoThousands": ",",
    "lengthMenu": "顯示 _MENU_ 筆結果",
    "loadingRecords": "載入中...",
    "processing": "處理中...",
    "search": "搜尋：",
    "searchBuilder": {
        "add": "新增條件",
        "button": {
            "_": "複合查詢 (%d)",
            "0": "複合查詢"
        },
        "clearAll": "清空",
        "condition": "條件",
        "conditions": {
            "array": {
                "contains": "含有",
                "empty": "空值",
                "equals": "等於",
                "not": "不等於",
                "notEmpty": "非空值",
                "without": "不含"
            },
            "date": {
                "after": "大於",
                "before": "小於",
                "between": "在其中",
                "empty": "為空",
                "equals": "等於",
                "not": "不為",
                "notBetween": "不在其中",
                "notEmpty": "不為空"
            },
            "number": {
                "between": "在其中",
                "empty": "為空",
                "equals": "等於",
                "gt": "大於",
                "gte": "大於等於",
                "lt": "小於",
                "lte": "小於等於",
                "not": "不為",
                "notBetween": "不在其中",
                "notEmpty": "不為空"
            },
            "string": {
                "contains": "含有",
                "empty": "為空",
                "endsWith": "字尾為",
                "equals": "等於",
                "not": "不為",
                "notContains": "不含",
                "notEmpty": "不為空",
                "notEndsWith": "結尾不是",
                "notStartsWith": "開頭不是",
                "startsWith": "字首為"
            }
        },
        "data": "欄位",
        "deleteTitle": "刪除篩選條件",
        "leftTitle": "群組條件",
        "logicAnd": "且",
        "logicOr": "或",
        "rightTitle": "取消群組",
        "title": {
            "_": "複合查詢 (%d)",
            "0": "複合查詢"
        },
        "value": "內容"
    },
    "searchPanes": {
        "clearMessage": "清空",
        "collapse": {
            "_": "搜尋面版 (%d)",
            "0": "搜尋面版"
        },
        "collapseMessage": "摺疊全部",
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "沒搜尋面版",
        "loadMessage": "載入搜尋面版中...",
        "showMessage": "顯示全部",
        "title": "篩選條件 - %d"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "選擇了 %d 格資料",
            "0": "",
            "1": "選擇了 1 格資料"
        },
        "columns": {
            "_": "選擇了 %d 欄資料",
            "0": "",
            "1": "選擇了 1 欄資料"
        },
        "rows": {
            "_": "選擇了 %d 筆資料",
            "0": "",
            "1": "選擇了 1 筆資料"
        }
    },
    "stateRestore": {
        "creationModal": {
            "button": "建立",
            "columns": {
                "search": "欄位搜尋",
                "visible": "欄位顯示"
            },
            "name": "名稱：",
            "order": "排序",
            "paging": "分頁",
            "scroller": "卷軸位置",
            "search": "搜尋",
            "searchBuilder": "複合查詢",
            "select": "選擇",
            "title": "建立新狀態",
            "toggleLabel": "包含："
        },
        "duplicateError": "此狀態名稱已經存在。",
        "emptyError": "名稱不能空白。",
        "emptyStates": "名稱不可空白。",
        "removeConfirm": "確定要移除 %s 嗎？",
        "removeError": "移除狀態失敗。",
        "removeJoiner": "和",
        "removeSubmit": "移除",
        "removeTitle": "移除狀態",
        "renameButton": "重新命名",
        "renameLabel": "%s 的新名稱：",
        "renameTitle": "重新命名狀態"
    },
    "thousands": ",",
    "zeroRecords": "沒有符合的資料"
};
}));
