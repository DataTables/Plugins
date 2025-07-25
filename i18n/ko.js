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
            "first": "처음",
            "last": "마지막",
            "next": "다음",
            "previous": "이전"
        }
    },
    "autoFill": {
        "cancel": "취소",
        "fill": "모든 셀에서 <i>%d<i>을(를) 삽입<\/i><\/i>",
        "fillHorizontal": "수평 셀에서 값을 삽입",
        "fillVertical": "수직 설에서 값을 삽입",
        "info": ""
    },
    "buttons": {
        "collection": "집합 <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
        "colvis": "컬럼 보기",
        "colvisRestore": "보기 복원",
        "copy": "복사",
        "copyKeys": "ctrl키 나 u2318 + C키로 테이블 데이터를 시스텝 복사판에서 복사하고 취소하려면 이 메시지를 클릭하거나 ESC키를 누르면됩니다. to copy the table data to your system clipboard. To cancel, click this message or press escape.",
        "copySuccess": {
            "_": "%d행을 복사판에서 복사됨",
            "1": "1행을 복사판에서 복사됨"
        },
        "copyTitle": "복사판에서 복사",
        "csv": "CSV",
        "excel": "엑셀",
        "pageLength": {
            "_": "%d행 보기",
            "-1": "모든 행 보기"
        },
        "pdf": "PDF",
        "print": "인쇄"
    },
    "datetime": {
        "amPm": {
            "0": "오전",
            "1": "오후"
        },
        "hours": "시",
        "minutes": "분",
        "months": {
            "0": "1월",
            "1": "2월",
            "10": "11월",
            "11": "12월",
            "2": "3월",
            "3": "4월",
            "4": "5월",
            "5": "6월",
            "6": "7월",
            "7": "8월",
            "8": "9월",
            "9": "10월"
        },
        "next": "다음",
        "previous": "이전",
        "seconds": "초",
        "unknown": "-",
        "weekdays": {
            "0": "일",
            "1": "월",
            "2": "화",
            "3": "수",
            "4": "목",
            "5": "금",
            "6": "토"
        }
    },
    "decimal": "",
    "editor": {
        "close": "닫기",
        "create": {
            "button": "추가",
            "submit": "완료",
            "title": "항목 추가"
        },
        "edit": {
            "button": "수정",
            "submit": "완료",
            "title": "항목 수정"
        },
        "error": {
            "system": "에러가 발생하였습니다 (&lt;a target=\"\\\" rel=\"nofollow\" href=\"\\\"&gt;자세한 정보&lt;\/a&gt;)."
        },
        "remove": {
            "button": "삭제",
            "submit": "완료",
            "title": "항목 삭제"
        }
    },
    "emptyTable": "데이터가 없습니다",
    "info": "_START_ - _END_ \/ _TOTAL_",
    "infoEmpty": "0 - 0 \/ 0",
    "infoFiltered": "(총 _MAX_ 개)",
    "infoPostFix": "",
    "infoThousands": ",",
    "lengthMenu": "페이지당 줄수 _MENU_",
    "loadingRecords": "읽는중...",
    "processing": "처리중...",
    "search": "검색:",
    "searchBuilder": {
        "add": "조건 추가",
        "button": {
            "_": "빌더 조회(%d)",
            "0": "빌더 조회"
        },
        "clearAll": "모두 지우기",
        "condition": "조건",
        "data": "데이터",
        "deleteTitle": "필터 규칙을 삭제",
        "logicAnd": "And",
        "logicOr": "Or",
        "title": {
            "_": "빌더 조회(%d)",
            "0": "빌더 조회"
        },
        "value": "값"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "0": ""
        },
        "columns": {
            "0": ""
        },
        "rows": {
            "0": ""
        }
    },
    "zeroRecords": "검색 결과가 없습니다"
};
}));
