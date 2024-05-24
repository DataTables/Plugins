

(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery', 'datatables.net'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		var jq = require('jquery');
		var cjsRequires = function (root, $) {
			if ( ! $.fn.dataTable ) {
				require('datatables.net')(root, $);
			}
		};

		if (typeof window === 'undefined') {
			module.exports = function (root, $) {
				if ( ! root ) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}

				if ( ! $ ) {
					$ = jq( root );
				}

				cjsRequires( root, $ );
				return factory( $, root, root.document );
			};
		}
		else {
			cjsRequires( window, jq );
			module.exports = factory( jq, window, window.document );
		}
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}(function( $, window, document ) {
'use strict';
var DataTable = $.fn.dataTable;

DataTable.feature.register('inputPaging', function (settings, opts) {
    let api = new DataTable.Api(settings);
    let tags = stylingStructure(api);
    let options = Object.assign({
        firstLast: true,
        previousNext: true,
        pageOf: true
    }, opts);
    // Create the DOM elements for the paging control
    let wrapper = createElement(tags.wrapper);
    let first = createElement(tags.item, api.i18n('oPaginate.sFirst', '\u00AB'), () => api.page('first').draw(false));
    let previous = createElement(tags.item, api.i18n('oPaginate.sPrevious', '\u2039'), () => api.page('previous').draw(false));
    let next = createElement(tags.item, api.i18n('oPaginate.sNext', '\u203A'), () => api.page('next').draw(false));
    let last = createElement(tags.item, api.i18n('oPaginate.sLast', '\u00BB'), () => api.page('last').draw(false));
    let box = createElement(tags.inputItem);
    let input = createElement(tags.input);
    let of = createElement({ tag: 'span', className: '' });
    input.setAttribute('inputmode', 'numeric');
    input.setAttribute('pattern', '[0-9]*');
    // Assemble the DOM structure
    if (options.firstLast) {
        wrapper.appendChild(first);
    }
    if (options.previousNext) {
        wrapper.appendChild(previous);
    }
    wrapper.appendChild(box);
    if (options.previousNext) {
        wrapper.appendChild(next);
    }
    if (options.firstLast) {
        wrapper.appendChild(last);
    }
    box.appendChild(input);
    if (options.pageOf) {
        box.appendChild(of);
    }
    // Block characters other than numbers
    input.addEventListener('keypress', function (e) {
        if (e.charCode < 48 || e.charCode > 57) {
            e.preventDefault();
        }
    });
    // On new value, redraw the table
    input.addEventListener('input', function () {
        if (input.value) {
            api.page(input.value - 1).draw(false);
        }
        // Auto adjust the width so the content is visible
        input.style.width = (input.value.length + 2) + 'ch';
    });
    api.on('draw', () => {
        let info = api.page.info();
        // Update the classes for the "jump" buttons to show what is available
        first.classList.toggle(tags.item.disabled, info.page === 0);
        previous.classList.toggle(tags.item.disabled, info.page === 0);
        next.classList.toggle(tags.item.disabled, info.page === info.pages - 1);
        last.classList.toggle(tags.item.disabled, info.page === info.pages - 1);
        // Set the new page value into the input box
        if (input.value !== info.page + 1) {
            input.value = info.page + 1;
        }
        // Show how many pages there are
        of.textContent = ' / ' + info.pages;
    });
    return wrapper;
});
/**
 * Get details about the DOM structure that input paging needs to build
 * @returns DOM information object
 */
function stylingStructure(api) {
    let container = api.table().container();
    if (container.classList.contains('dt-bootstrap5')) {
        return {
            wrapper: {
                tag: 'ul',
                className: 'pagination',
            },
            item: {
                tag: 'li',
                className: 'page-item',
                disabled: 'disabled',
                liner: {
                    tag: 'a',
                    className: 'page-link',
                }
            },
            inputItem: {
                tag: 'li',
                className: 'page-item page-link dt-paging-input'
            },
            input: {
                tag: 'input',
                className: '',
            }
        };
    }
    return {
        wrapper: {
            tag: 'div',
            className: 'dt-paging',
        },
        item: {
            tag: 'button',
            className: 'dt-paging-button',
            disabled: 'disabled',
        },
        inputItem: {
            tag: 'div',
            className: 'dt-paging-input',
            liner: {
                tag: '',
                className: ''
            }
        },
        input: {
            tag: 'input',
            className: '',
        }
    };
}
/**
 * Create a new element
 *
 * @param opts Tag and class name
 * @param text Text to show in the element
 * @param fn Click event handler
 * @returns Element
 */
function createElement(opts, text, fn) {
    let el = document.createElement(opts.tag);
    el.className = opts.className;
    if (opts.liner) {
        let liner = createElement(opts.liner, text);
        el.appendChild(liner);
    }
    else {
        // Bottom nesting level
        if (text) {
            el.textContent = text;
        }
    }
    // Top level only
    if (fn) {
        el.addEventListener('click', fn);
    }
    return el;
}


return DataTable;
}));
