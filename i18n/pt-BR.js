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
            "first": "Primeiro",
            "last": "Último",
            "next": "Próximo",
            "previous": "Anterior"
        }
    },
    "autoFill": {
        "cancel": "Cancelar",
        "fill": "Preencher todas as células com",
        "fillHorizontal": "Preencher células horizontalmente",
        "fillVertical": "Preencher células verticalmente",
        "info": ""
    },
    "buttons": {
        "collection": "Coleção  <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
        "colvis": "Visibilidade da Coluna",
        "colvisRestore": "Restaurar Visibilidade",
        "copy": "Copiar",
        "copyKeys": "Pressione ctrl ou u2318 + C para copiar os dados da tabela para a área de transferência do sistema. Para cancelar, clique nesta mensagem ou pressione Esc..",
        "copySuccess": {
            "_": "%d linhas copiadas com sucesso",
            "1": "Uma linha copiada com sucesso"
        },
        "copyTitle": "Copiar para a Área de Transferência",
        "createState": "Criar estado",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "Mostrar %d registros",
            "-1": "Mostrar todos os registros"
        },
        "pdf": "PDF",
        "print": "Imprimir",
        "removeAllStates": "Remover todos os estados",
        "removeState": "Remover",
        "renameState": "Renomear",
        "savedStates": "Estados salvos",
        "stateRestore": "Estado %d",
        "updateState": "Atualizar"
    },
    "datetime": {
        "amPm": {
            "0": "am",
            "1": "pm"
        },
        "hours": "Hora",
        "minutes": "Minuto",
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
        "seconds": "Segundo",
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
            "title": "Criar novo registro"
        },
        "edit": {
            "button": "Editar",
            "submit": "Atualizar",
            "title": "Editar registro"
        },
        "error": {
            "system": "Ocorreu um erro no sistema (<a target=\"\\\" rel=\"nofollow\" href=\"\\\">Mais informações<\/a>)."
        },
        "multi": {
            "info": "Os itens selecionados contêm valores diferentes para esta entrada. Para editar e definir todos os itens para esta entrada com o mesmo valor, clique ou toque aqui, caso contrário, eles manterão seus valores individuais.",
            "noMulti": "Essa entrada pode ser editada individualmente, mas não como parte do grupo",
            "restore": "Desfazer alterações",
            "title": "Multiplos valores"
        },
        "remove": {
            "button": "Remover",
            "confirm": {
                "_": "Tem certeza que quer deletar %d linhas?",
                "1": "Tem certeza que quer deletar 1 linha?"
            },
            "submit": "Remover",
            "title": "Remover registro"
        }
    },
    "emptyTable": "Nenhum registro encontrado",
    "info": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
    "infoEmpty": "Mostrando 0 até 0 de 0 registro(s)",
    "infoFiltered": "(Filtrados de _MAX_ registros)",
    "infoPostFix": "",
    "infoThousands": ".",
    "lengthMenu": "Exibir _MENU_ resultados por página",
    "loadingRecords": "Carregando...",
    "processing": "Carregando...",
    "search": "Pesquisar",
    "searchBuilder": {
        "add": "Adicionar Condição",
        "button": {
            "_": "Construtor de Pesquisa (%d)",
            "0": "Construtor de Pesquisa"
        },
        "clearAll": "Limpar Tudo",
        "condition": "Condição",
        "conditions": {
            "array": {
                "contains": "Contém",
                "empty": "Vazio",
                "equals": "Igual à",
                "not": "Não",
                "notEmpty": "Não vazio",
                "without": "Não possui"
            },
            "date": {
                "after": "Depois",
                "before": "Antes",
                "between": "Entre",
                "empty": "Vazio",
                "equals": "Igual",
                "not": "Não",
                "notBetween": "Não Entre",
                "notEmpty": "Não Vazio"
            },
            "number": {
                "between": "Entre",
                "empty": "Vazio",
                "equals": "Igual",
                "gt": "Maior Que",
                "gte": "Maior ou Igual a",
                "lt": "Menor Que",
                "lte": "Menor ou Igual a",
                "not": "Não",
                "notBetween": "Não Entre",
                "notEmpty": "Não Vazio"
            },
            "string": {
                "contains": "Contém",
                "empty": "Vazio",
                "endsWith": "Termina Com",
                "equals": "Igual",
                "not": "Não",
                "notContains": "Não contém",
                "notEmpty": "Não Vazio",
                "notEndsWith": "Não termina com",
                "notStartsWith": "Não começa com",
                "startsWith": "Começa Com"
            }
        },
        "data": "Data",
        "deleteTitle": "Excluir regra de filtragem",
        "leftTitle": "Critérios Externos",
        "logicAnd": "E",
        "logicOr": "Ou",
        "rightTitle": "Critérios Internos",
        "title": {
            "_": "Construtor de Pesquisa (%d)",
            "0": "Construtor de Pesquisa"
        },
        "value": "Valor"
    },
    "searchPanes": {
        "clearMessage": "Limpar Tudo",
        "collapse": {
            "_": "Painéis de Pesquisa (%d)",
            "0": "Painéis de Pesquisa"
        },
        "collapseMessage": "Fechar todos",
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "Nenhum Painel de Pesquisa",
        "loadMessage": "Carregando Painéis de Pesquisa...",
        "showMessage": "Mostrar todos",
        "title": "Filtros Ativos"
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
            "_": "Selecionado %d linhas",
            "0": "",
            "1": "Selecionado 1 linha"
        }
    },
    "stateRestore": {
        "creationModal": {
            "button": "Criar",
            "columns": {
                "search": "Busca de colunas",
                "visible": "Visibilidade da coluna"
            },
            "name": "Nome:",
            "order": "Ordernar",
            "paging": "Paginação",
            "scroller": "Posição da barra de rolagem",
            "search": "Busca",
            "searchBuilder": "Mecanismo de busca",
            "select": "Selecionar",
            "title": "Criar novo estado",
            "toggleLabel": "Inclui:"
        },
        "duplicateError": "Já existe um estado com esse nome!",
        "emptyError": "Não pode ser vazio!",
        "emptyStates": "Nenhum estado salvo",
        "removeConfirm": "Confirma remover %s?",
        "removeError": "Falha ao remover estado!",
        "removeJoiner": "e",
        "removeSubmit": "Remover",
        "removeTitle": "Remover estado",
        "renameButton": "Renomear",
        "renameLabel": "Novo nome para %s:",
        "renameTitle": "Renomear estado"
    },
    "thousands": ".",
    "zeroRecords": "Nenhum registro encontrado"
};
}));
