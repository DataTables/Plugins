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
        "orderable": "點擊此處進行排序",
        "orderableRemove": "點擊此處取消排序",
        "orderableReverse": "點擊此處進行反向排序",
        "paginate": {
            "first": "第一頁",
            "last": "最後一頁",
            "next": "下一頁",
            "previous": "上一頁"
        }
    },
    "autoFill": {
        "cancel": "取消",
        "fill": "使用「<i>%d<\/i>」填滿所有欄位",
        "fillHorizontal": "填滿所有水平欄位",
        "fillVertical": "填滿所有垂直欄位",
        "info": ""
    },
    "buttons": {
        "collection": "集合 <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span> ",
        "colvis": "顯示欄位",
        "colvisRestore": "重設顯示狀態",
        "copy": "複製",
        "copyKeys": "按 <i>Ctrl+C<\/i> 或 <i>⌘+C<\/i> 鍵即可將表格資料複製到系統剪貼簿。<br \/><br \/>若要取消，請點擊此訊息或按 <i>Esc<\/i> 鍵。",
        "copySuccess": {
            "_": "已複製 %d 列到剪貼簿",
            "1": "已複製 1 列到剪貼簿"
        },
        "copyTitle": "複製到剪貼簿",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "顯示 %d 列",
            "-1": "顯示所有列",
            "1": "顯示 1 列"
        },
        "pdf": "PDF",
        "print": "列印"
    },
    "columnControl": {
        "buttons": {
            "searchClear": "清除搜尋條件"
        },
        "colVisDropdown": "欄位顯示狀態",
        "dropdown": "更多…",
        "list": {
            "all": "全部選擇",
            "none": "全部不選",
            "search": "搜尋…"
        },
        "orderAddAsc": "加入升冪排序",
        "orderAddDesc": "加入降冪排序",
        "orderAsc": "升冪排序",
        "orderClear": "清除排序",
        "orderDesc": "降冪排序",
        "orderRemove": "取消排序",
        "reorder": "重新排序欄位",
        "reorderLeft": "向左移動欄位",
        "reorderRight": "向右移動欄位",
        "search": {
            "datetime": {
                "greater": "之後",
                "less": "之前"
            },
            "number": {
                "empty": "空白",
                "equal": "等於",
                "greater": "大於",
                "greaterOrEqual": "大於等於",
                "less": "小於",
                "lessOrEqual": "小於等於",
                "notEmpty": "非空白",
                "notEqual": "不等於"
            },
            "text": {
                "contains": "包含",
                "ends": "結尾是",
                "equal": "是",
                "notContains": "不包含",
                "notEqual": "不是",
                "starts": "開頭是"
            }
        },
        "searchClear": "清除搜尋"
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
            "submit": "建立",
            "title": "新增資料"
        },
        "edit": {
            "button": "修改",
            "submit": "更新",
            "title": "修改資料"
        },
        "error": {
            "system": "系統發生錯誤（<a target=\"\" rel=\"nofollow\" href=\"\">更多資訊<\/a>）。"
        },
        "multi": {
            "info": "您所選擇的多筆資料中，此欄位包含了不同的值。若您想要將它們都改為同一個值，請點擊此處，要不然它們會保留各自原本的值。",
            "noMulti": "此輸入欄需單獨輸入，不是群組的一部分。",
            "restore": "復原",
            "title": "多重值"
        },
        "remove": {
            "button": "刪除",
            "confirm": {
                "_": "您確定要刪除 %d 筆資料嗎？",
                "1": "您確定要刪除 1 筆資料嗎？"
            },
            "submit": "刪除",
            "title": "刪除資料"
        }
    },
    "emptyTable": "表格中沒有資料",
    "info": "顯示第 _START_ 至 _END_ 筆結果，共 _TOTAL_ 筆",
    "infoEmpty": "顯示第 0 至 0 筆結果，共 0 筆",
    "infoFiltered": "（從 _MAX_ 筆結果中篩選）",
    "infoPostFix": "",
    "infoThousands": ",",
    "lengthLabels": {
        "-1": "全部"
    },
    "lengthMenu": "顯示 _MENU_ 筆資料",
    "loadingRecords": "載入中…",
    "processing": "處理中…",
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
                "after": "在…之後",
                "before": "在…之前",
                "between": "在其中",
                "empty": "為空",
                "equals": "等於",
                "not": "不為",
                "notBetween": "不在其中",
                "notEmpty": "不為空"
            },
            "number": {
                "between": "在…之間",
                "empty": "為空",
                "equals": "等於",
                "gt": "大於",
                "gte": "大於等於",
                "lt": "小於",
                "lte": "小於等於",
                "not": "不為",
                "notBetween": "不在…之間",
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
        "data": "資料",
        "deleteTitle": "刪除篩選條件",
        "leftTitle": "將條件從群組移出",
        "logicAnd": "且",
        "logicOr": "或",
        "rightTitle": "將條件列入群組",
        "search": "搜尋",
        "title": {
            "_": "複合查詢（%d）",
            "0": "複合查詢"
        },
        "value": "值",
        "valueJoiner": "與"
    },
    "searchPanes": {
        "clearMessage": "清空",
        "collapse": {
            "_": "搜尋面版（%d）",
            "0": "搜尋面版"
        },
        "collapseMessage": "摺疊全部",
        "count": "{total}",
        "countFiltered": "{shown}（{total}）",
        "emptyMessage": "<em>空白<\/em>",
        "emptyPanes": "沒有搜尋面版",
        "loadMessage": "正在載入搜尋面版…",
        "showMessage": "顯示全部",
        "title": "生效中的篩選條件數量 - %d"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "已選擇 %d 個儲存格",
            "0": "",
            "1": "已選擇 1 個儲存格"
        },
        "columns": {
            "_": "已選擇 %d 欄",
            "0": "",
            "1": "已選擇 1 欄"
        },
        "rows": {
            "_": "已選擇 %d 列",
            "0": "",
            "1": "已選擇 1 列"
        }
    },
    "stateRestore": {
        "button": {
            "create": "建立暫存狀態",
            "edit": "更新",
            "remove": "移除",
            "statesList": "已暫存的狀態",
            "statesRemoveAll": "移除所有暫存狀態"
        },
        "create": {
            "title": "建立新暫存狀態"
        },
        "remove": {
            "button": "移除",
            "message": {
                "_": "確定要移除 %s 嗎？"
            },
            "title": "移除暫存狀態"
        }
    },
    "thousands": ",",
    "zeroRecords": "沒有符合的資料"
};
}));
