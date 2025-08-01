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
        "orderable": "Ativar para ordenar",
        "orderableRemove": "Ativar para remover ordenação",
        "orderableReverse": "Ativar para inverter ordenação",
        "paginate": {
            "first": "Primeiro",
            "last": "Último",
            "next": "Seguinte",
            "previous": "Anterior"
        }
    },
    "autoFill": {
        "cancel": "Cancelar",
        "fill": "Preencher",
        "fillHorizontal": "Preencher células na horizontal",
        "fillVertical": "Preencher células na vertical",
        "info": ""
    },
    "buttons": {
        "collection": "Coleção",
        "colvis": "Visibilidade de colunas",
        "colvisRestore": "Restaurar visibilidade",
        "copy": "Copiar",
        "copyKeys": "Pressionar CTRL ou u2318 + C para copiar a informação para a área de transferência.<br \/><br \/>Para cancelar, clique nesta mensagem ou pressione ESC.",
        "copySuccess": {
            "_": "%ds linhas copiadas para a área de transferência",
            "1": "Uma linha copiada para a área de transferência"
        },
        "copyTitle": "Copiar para a área de transferência",
        "createState": "Criar Estado",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "Mostrar %d linhas",
            "-1": "Mostrar todas as linhas",
            "1": "Mostrar 1 linha"
        },
        "pdf": "PDF",
        "print": "Imprimir",
        "removeAllStates": "Remover Todos os Estados",
        "removeState": "Remover",
        "renameState": "Renomear",
        "savedStates": "Estados Gravados",
        "stateRestore": "Estado %d",
        "updateState": "Atualizar"
    },
    "columnControl": {
        "buttons": {
            "searchClear": "Limpar pesquisa"
        },
        "colVis": "Visibilidade da coluna",
        "colVisDropdown": "Visibilidade da coluna",
        "dropdown": "Mostrar mais...",
        "list": {
            "all": "Todos",
            "empty": "Vazio",
            "none": "Nenhum",
            "search": "Pesquisar..."
        },
        "orderAddAsc": "Adicionar à ordem crescente",
        "orderAddDesc": "Adicionar à ordem decrescente",
        "orderAsc": "Ordem crescente",
        "orderClear": "Remover ordenação",
        "orderDesc": "Ordem decrescente",
        "orderRemove": "Remover ordenação",
        "reorder": "Reordenar",
        "reorderLeft": "Mover para a esquerda",
        "reorderRight": "Mover para a direita",
        "search": {
            "datetime": {
                "empty": "Vazio",
                "equal": "Igual a",
                "greater": "Posterior a",
                "less": "Anterior a",
                "notEmpty": "Não está vazio",
                "notEqual": "Diferente de"
            },
            "number": {
                "empty": "Vazio",
                "equal": "Igual a",
                "greater": "Maior que",
                "greaterOrEqual": "Maior ou igual a",
                "less": "Menor que",
                "lessOrEqual": "Menor ou igual a",
                "notEmpty": "Não está vazio",
                "notEqual": "Diferente de"
            },
            "text": {
                "contains": "Contém",
                "empty": "Vazio",
                "ends": "Termina em",
                "equal": "Igual a",
                "notContains": "Não contém",
                "notEmpty": "Não está vazio",
                "notEqual": "Diferente de",
                "starts": "Começa por"
            }
        },
        "searchClear": "Limpar pesquisa",
        "searchDropdown": "Pesquisar"
    },
    "datetime": {
        "amPm": {
            "0": "am",
            "1": "pm"
        },
        "hours": "Horas",
        "minutes": "Minutos",
        "months": {
            "0": "Janeiro",
            "1": "Fevereiro",
            "10": "Novembro",
            "11": "Dezembro",
            "2": "Março",
            "3": "Abril",
            "4": "Maio",
            "5": "Junho",
            "6": "Julho",
            "7": "Agosto",
            "8": "Setembro",
            "9": "Outubro"
        },
        "next": "Próximo",
        "previous": "Anterior",
        "seconds": "Segundos",
        "unknown": "-",
        "weekdays": {
            "0": "Dom",
            "1": "Seg",
            "2": "Ter",
            "3": "Qua",
            "4": "Qui",
            "5": "Sex",
            "6": "Sáb"
        }
    },
    "decimal": "",
    "editor": {
        "close": "Fechar",
        "create": {
            "button": "Novo",
            "submit": "Criar",
            "title": "Criar novo registo"
        },
        "edit": {
            "button": "Editar",
            "submit": "Atualizar",
            "title": "Editar registo"
        },
        "error": {
            "system": "Ocorreu um erro no sistema"
        },
        "multi": {
            "info": "Os itens selecionados contêm valores diferentes para esta entrada. Para editar e definir todos os itens nesta entrada com o mesmo valor, clique ou toque aqui, caso contrário eles manterão os seus valores individuais.",
            "noMulti": "Este campo pode ser editado individualmente mas não pode ser editado em grupo",
            "restore": "Desfazer alterações",
            "title": "Múltiplos valores"
        },
        "remove": {
            "button": "Remover",
            "confirm": {
                "_": "Tem a certeza que pretende eliminar %d entradas?",
                "1": "Tem a certeza que pretende eliminar esta entrada?"
            },
            "submit": "Remover",
            "title": "Remover"
        }
    },
    "emptyTable": "Não foi encontrado nenhum registo",
    "info": "Mostrando os registos _START_ a _END_ num total de _TOTAL_",
    "infoEmpty": "Mostrando 0 registos num total de 0",
    "infoFiltered": "(filtrado num total de _MAX_ registos)",
    "infoPostFix": "",
    "infoThousands": ".",
    "lengthLabels": {
        "-1": "Todas"
    },
    "lengthMenu": "Mostrar _MENU_ registos",
    "loadingRecords": "A carregar...",
    "orderClear": "Remover ordenação",
    "processing": "A processar...",
    "search": "Procurar:",
    "searchBuilder": {
        "add": "Adicionar condição",
        "button": {
            "_": "Construtor de pesquisa (%d)",
            "0": "Construtor de pesquisa"
        },
        "clearAll": "Limpar tudo",
        "condition": "Condição",
        "conditions": {
            "array": {
                "contains": "Contém",
                "empty": "Vazio",
                "equals": "Igual",
                "not": "Diferente",
                "notEmpty": "Não está vazio",
                "without": "Sem"
            },
            "date": {
                "after": "Depois",
                "before": "Antes",
                "between": "Entre",
                "empty": "Vazio",
                "equals": "Igual",
                "not": "Diferente",
                "notBetween": "Não está entre",
                "notEmpty": "Não está vazio"
            },
            "number": {
                "between": "Entre",
                "empty": "Vazio",
                "equals": "Igual",
                "gt": "Maior que",
                "gte": "Maior ou igual a",
                "lt": "Menor que",
                "lte": "Menor ou igual a",
                "not": "Diferente",
                "notBetween": "Não está entre",
                "notEmpty": "Não está vazio"
            },
            "string": {
                "contains": "Contém",
                "empty": "Vazio",
                "endsWith": "Termina em",
                "equals": "Igual",
                "not": "Diferente",
                "notContains": "Não contém",
                "notEmpty": "Não está vazio",
                "notEndsWith": "Não termina com",
                "notStartsWith": "Não começa com",
                "startsWith": "Começa em"
            }
        },
        "data": "Dados",
        "deleteTitle": "Excluir condição de filtragem",
        "leftTitle": "Excluir critério",
        "logicAnd": "E",
        "logicOr": "Ou",
        "rightTitle": "Incluir critério",
        "search": "Pesquisar",
        "title": {
            "_": "Construtor de pesquisa (%d)",
            "0": "Construtor de pesquisa"
        },
        "value": "Valor"
    },
    "searchPanes": {
        "clearMessage": "Limpar tudo",
        "collapse": {
            "_": "Painéis de pesquisa (%d)",
            "0": "Painéis de pesquisa"
        },
        "collapseMessage": "Ocultar Todos",
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyMessage": "<em>Vazio<\/em>",
        "emptyPanes": "Sem painéis de pesquisa",
        "loadMessage": "A carregar painéis de pesquisa",
        "showMessage": "Mostrar todos",
        "title": "Filtros ativos"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "%d células selecionadas",
            "0": "",
            "1": "1 célula selecionada"
        },
        "columns": {
            "_": "%d colunas selecionadas",
            "0": "",
            "1": "1 coluna selecionada"
        },
        "rows": {
            "_": "%d linhas selecionadas",
            "0": "",
            "1": "%d linha selecionada"
        }
    },
    "stateRestore": {
        "creationModal": {
            "button": "Criar",
            "columns": {
                "search": "Pesquisa por Colunas",
                "visible": "Visibilidade das Colunas"
            },
            "name": "Nome:",
            "order": "Ordenar",
            "paging": "Paginação",
            "scroller": "Posição da barra de Scroll",
            "search": "Pesquisa",
            "searchBuilder": "Pesquisa Avançada",
            "select": "Selecionar",
            "title": "Criar Novo Estado",
            "toggleLabel": "Incluir:"
        },
        "duplicateError": "Já existe um estado com o mesmo nome",
        "emptyError": "Nome não pode ser vazio",
        "emptyStates": "Não existem estados gravados",
        "removeConfirm": "Deseja mesmo remover o estado %s?",
        "removeError": "Erro ao remover o estado.",
        "removeJoiner": " e ",
        "removeSubmit": "Apagar",
        "removeTitle": "Apagar Estado",
        "renameButton": "Renomear",
        "renameLabel": "Novo nome para %s:",
        "renameTitle": "Renomear Estado"
    },
    "thousands": ".",
    "zeroRecords": "Não foram encontrados resultados"
};
}));
