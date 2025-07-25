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
        "orderable": "Aktywuj sortowanie",
        "orderableRemove": "Aktywuj, aby usunąć sortowanie",
        "orderableReverse": "Aktywuj, aby odwrócić sortowanie",
        "paginate": {
            "first": "Pierwsza",
            "last": "Ostatnia",
            "next": "Następna",
            "previous": "Poprzednia"
        }
    },
    "autoFill": {
        "cancel": "Anuluj",
        "fill": "Wypełnij wszystkie komórki <i>%d<\/i>",
        "fillHorizontal": "Wypełnij komórki w poziomie",
        "fillVertical": "Wypełnij komórki w pionie",
        "info": ""
    },
    "buttons": {
        "collection": "Zbiór <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
        "colvis": "Widoczność kolumny",
        "colvisRestore": "Przywróć widoczność",
        "copy": "Kopiuj",
        "copyKeys": "Naciśnij Ctrl lub u2318 + C, aby skopiować dane tabeli do schowka systemowego. <br \/> <br \/> Aby anulować, kliknij tę wiadomość lub naciśnij Esc.",
        "copySuccess": {
            "_": "Skopiowano %d wierszy do schowka",
            "1": "Skopiowano 1 wiersz do schowka"
        },
        "copyTitle": "Skopiuj do schowka",
        "createState": "Utwórz stan",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "Pokaż %d wierszy",
            "-1": "Pokaż wszystkie wiersze",
            "1": "Pokaż 1 wiersz"
        },
        "pdf": "PDF",
        "print": "Drukuj",
        "removeAllStates": "Usuń wszystkie stany",
        "removeState": "Usuń",
        "renameState": "Zmień nazwę",
        "savedStates": "Zapisane stany",
        "stateRestore": "Stan %d",
        "updateState": "Aktualizuj"
    },
    "columnControl": {
        "buttons": {
            "searchClear": "Wyczyść wyszukiwanie"
        },
        "colVis": "Widoczność kolumn",
        "colVisDropdown": "Widoczność kolumn",
        "dropdown": "Więcej...",
        "list": {
            "all": "Zaznacz wszystko",
            "empty": "Puste",
            "none": "Odznacz wszystko",
            "search": "Szukaj..."
        },
        "orderAddAsc": "Dodaj sortowanie rosnąco",
        "orderAddDesc": "Dodaj sortowanie malejąco",
        "orderAsc": "Sortowanie rosnące",
        "orderClear": "Wyczyść sortowanie",
        "orderDesc": "Sortowanie malejące",
        "orderRemove": "Usuń z sortowania",
        "reorder": "Przestaw kolumny",
        "reorderLeft": "Przesuń kolumnę w lewo",
        "reorderRight": "Przesuń kolumnę w prawo",
        "search": {
            "datetime": {
                "empty": "Puste",
                "equal": "Równe",
                "greater": "Po",
                "less": "Przed",
                "notEmpty": "Niepuste",
                "notEqual": "Różne od"
            },
            "number": {
                "empty": "Puste",
                "equal": "Równe",
                "greater": "Większe niż",
                "greaterOrEqual": "Większe lub równe",
                "less": "Mniejsze niż",
                "lessOrEqual": "Mniejsze lub równe",
                "notEmpty": "Niepuste",
                "notEqual": "Różne od"
            },
            "text": {
                "contains": "Zawiera",
                "empty": "Puste",
                "ends": "Kończy się na",
                "equal": "Równe",
                "notContains": "Nie zawiera",
                "notEmpty": "Niepuste",
                "notEqual": "Różne od",
                "starts": "Zaczyna się od"
            }
        },
        "searchClear": "Wyczyść wyszukiwanie",
        "searchDropdown": "Wyszukaj"
    },
    "datetime": {
        "amPm": {
            "0": "am",
            "1": "pm"
        },
        "hours": "Godzina",
        "minutes": "Minuta",
        "months": {
            "0": "Styczeń",
            "1": "Luty",
            "10": "Listopad",
            "11": "Grudzień",
            "2": "Marzec",
            "3": "Kwiecień",
            "4": "Maj",
            "5": "Czerwiec",
            "6": "Lipiec",
            "7": "Sierpień",
            "8": "Wrzesień",
            "9": "Październik"
        },
        "next": "Następne",
        "previous": "Poprzednie",
        "seconds": "Sekunda",
        "unknown": "nieznana",
        "weekdays": {
            "0": "Nd",
            "1": "Pn",
            "2": "Wt",
            "3": "Śr",
            "4": "Czw",
            "5": "Pt",
            "6": "So"
        }
    },
    "decimal": "",
    "editor": {
        "close": "Zamknij",
        "create": {
            "button": "Dodaj",
            "submit": "Dodaj",
            "title": "Dodawanie nowego wpisu"
        },
        "edit": {
            "button": "Edytuj",
            "submit": "Aktualizuj",
            "title": "Aktualizacja wpisu"
        },
        "error": {
            "system": "Nastąpił błąd systemu (<a target=\"\\\" rel=\"\\ nofollow\" href=\"\\\">Więcej informacji&lt;\\\/a&gt;).<\/a>"
        },
        "multi": {
            "info": "Wybrane pole zawiera wiele elementów z różnymi wartościami. Aby zmienić ich wartość kliknij w nie, inaczej zachowane zostaną ich wartości domyślne.",
            "noMulti": "Ta wartość może być edytowana oddzielnie - niezależnie od grupy.",
            "restore": "Cofnij zmiany",
            "title": "Pole z wieloma wartościami"
        },
        "remove": {
            "button": "Usuń",
            "confirm": {
                "_": "Czy na pewno chcesz usunąć %d rzędów?",
                "1": "Czy na pewno chcesz usunąć 1 rząd?"
            },
            "submit": "Usuń",
            "title": "Usuwanie"
        }
    },
    "emptyTable": "Brak danych w tabeli",
    "info": "Pozycje od _START_ do _END_ z _TOTAL_ łącznie",
    "infoEmpty": "Pozycji 0 z 0 dostępnych",
    "infoFiltered": "(filtrowanie spośród _MAX_ dostępnych pozycji)",
    "infoPostFix": "",
    "infoThousands": " ",
    "lengthLabels": {
        "-1": "Wszystko"
    },
    "lengthMenu": "Pokaż _MENU_ pozycji",
    "loadingRecords": "Wczytywanie...",
    "orderClear": "Wyczyść sortowanie",
    "processing": "Przetwarzanie...",
    "search": "Szukaj:",
    "searchBuilder": {
        "add": "Dodaj warunek",
        "button": {
            "_": "Aktywne zapytania",
            "0": "Budowanie zapytania"
        },
        "clearAll": "Wyczyść wszystko",
        "condition": "Warunek",
        "conditions": {
            "array": {
                "contains": "Zawiera",
                "empty": "Pusta",
                "equals": "Równa się",
                "not": "Nie",
                "notEmpty": "Nie pusta",
                "without": "Bez"
            },
            "date": {
                "after": "Po",
                "before": "Przed",
                "between": "Pomiędzy",
                "empty": "Pusto",
                "equals": "Równa",
                "not": "Nie",
                "notBetween": "Nie pomiędzy",
                "notEmpty": "Nie pusta"
            },
            "number": {
                "between": "Pomiędzy",
                "empty": "Pusty",
                "equals": "Równy",
                "gt": "Większy niż",
                "gte": "Równy lub większy niż",
                "lt": "Mniejszy niż",
                "lte": "Równy lub mniejszy niż",
                "not": "Nie",
                "notBetween": "Nie pomiędzy",
                "notEmpty": "Nie pusty"
            },
            "string": {
                "contains": "Zawiera",
                "empty": "Pusty",
                "endsWith": "Kończy się na",
                "equals": "Równa się",
                "not": "Nie",
                "notContains": "Nie zawiera",
                "notEmpty": "Nie pusty",
                "notEndsWith": "Nie kończy się na",
                "notStartsWith": "Nie zaczyna się od",
                "startsWith": "Zaczyna się od"
            }
        },
        "data": "Dane",
        "deleteTitle": "Czyszczenie",
        "leftTitle": "Lewy",
        "logicAnd": "I",
        "logicOr": "Lub",
        "rightTitle": "Prawy",
        "search": "Szukaj",
        "title": {
            "_": "Aktywne zapytania",
            "0": "Budowanie zapytania"
        },
        "value": "Wartość"
    },
    "searchPanes": {
        "clearMessage": "Wyczyść wszystkie",
        "collapse": {
            "_": "Aktywne grupowania (%d)",
            "0": "Grupowanie"
        },
        "collapseMessage": "Rozwiń wszystko",
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyMessage": "&lt;em&gt;brak danych&lt;\/em&gt;",
        "emptyPanes": "Brak paneli wyszukań",
        "loadMessage": "Ładuję panele wyszukań",
        "showMessage": "Pokaż wszystko",
        "title": "Aktywne filtry"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "zaznaczono %d komórek",
            "0": "",
            "1": "zaznaczono %d komórkę"
        },
        "columns": {
            "_": "zaznaczono %d kolumn",
            "0": "",
            "1": "zaznaczono %d kolumnę"
        },
        "rows": {
            "_": "Zaznaczono %d wierszy",
            "0": "",
            "1": "Zaznaczono 1 wiersz"
        }
    },
    "stateRestore": {
        "creationModal": {
            "button": "Utwórz",
            "columns": {
                "search": "Wyszukiwanie kolumny",
                "visible": "Widoczność kolumny"
            },
            "name": "Nazwa:",
            "order": "Sortowanie",
            "paging": "Stronicowanie",
            "scroller": "Przewijanie",
            "search": "Szukanie",
            "searchBuilder": "Tworzenie zapytań",
            "select": "Wybieranie",
            "title": "Utwórz nowy stan",
            "toggleLabel": "Zawiera:"
        },
        "duplicateError": "Stan o tej nazwie już istnieje.",
        "emptyError": "Nazwa nie może być pusta.",
        "emptyStates": "Brak zapisanych stanów",
        "removeConfirm": "Czy na pewno chcesz usunąć %s?",
        "removeError": "Nie udało się usunąć stanu.",
        "removeJoiner": "oraz",
        "removeSubmit": "Usuń",
        "removeTitle": "Usuń stan",
        "renameButton": "Zmień nazwę",
        "renameLabel": "Nowa nazwa dla %s:",
        "renameTitle": "Zmień nazwę stanu"
    },
    "thousands": " ",
    "zeroRecords": "Nie znaleziono pasujących pozycji"
};
}));
