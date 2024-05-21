import DataTable from 'datatables.net';

(DataTable as any).feature.register('inputPaging', function (settings, opts) {
	let api = new DataTable.Api(settings);
	let tags = stylingStructure();
	let wrapper = createElement(tags.wrapper);
	let first = createElement(
		tags.item,
		api.i18n('oPaginate.sFirst', '\u00AB'),
		() => api.page('first').draw(false)
	);
	let previous = createElement(
		tags.item,
		api.i18n('oPaginate.sPrevious', '\u2039'),
		() => api.page('previous').draw(false)
	);
	let next = createElement(
		tags.item,
		api.i18n('oPaginate.sNext', '\u203A'),
		() => api.page('next').draw(false)
	);
	let last = createElement(
		tags.item,
		api.i18n('oPaginate.sLast', '\u00BB'),
		() => api.page('last').draw(false)
	);
	let box = createElement(tags.inputItem);
	let input = createElement(tags.input);
	let of = createElement({tag: 'span', className: ''});

	input.addEventListener('input', function () {
		if (input.value) {
			api.page(input.value - 1).draw(false);
		}
	});

	wrapper.appendChild(first);
	wrapper.appendChild(previous);
	wrapper.appendChild(box);
	wrapper.appendChild(next);
	wrapper.appendChild(last);
	box.appendChild(input);
	box.appendChild(of);

	api.on('draw', () => {
		let info = api.page.info();

		first.classList.toggle(tags.item.disabled, info.page === 0);
		previous.classList.toggle(tags.item.disabled, info.page === 0);
		next.classList.toggle(tags.item.disabled, info.page === info.pages-1);
		last.classList.toggle(tags.item.disabled, info.page === info.pages-1);

		if (input.value !== info.page + 1) {
			input.value = info.page + 1;
		}

		of.textContent = ' / ' + info.pages;
	});

	return wrapper;
});

function stylingStructure() {
	return {
		wrapper: {
			tag: 'div',
			className: 'dt-paging',
		},
		item: {
			tag: 'button',
			className: 'dt-paging-button',
			disabled: 'disabled',
			enabled: '',
		},
		inputItem: {
			tag: 'div',
			className: 'dt-paging-input',
		},
		input: {
			tag: 'input',
			className: '',
		}
	};
}

function createElement(opts, text?, fn?) {
	var el = document.createElement(opts.tag);
	el.className = opts.className;

	if (text) {
		el.textContent = text;
	}

	if (fn) {
		el.addEventListener('click', fn);
	}

	return el;
}
