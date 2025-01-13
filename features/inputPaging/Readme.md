
# DataTables input paging feature

This package adds a _feature_ to DataTables which can be used by [the `layout` property](https://datatables.net/reference/option/layout) to display a pagination control for a table with an `<input>` element allowing the end user to quickly jump between pages.

For full details on the plugin, please refer to [the blog post that introduced it](https://datatables.net/blog/2024/inputPaging).


## Usage

To install with npm (substitute with your favorite package manager if you prefer):

```
npm install datatables.net datatables.net-feature-inputpaging
```

Then in your Javascript file (assuming you are using ES Modules):

```js
import DataTable from 'datatables.net';
import 'datatables.net-feature-inputpaging';

new DataTable('#myTable', {
	layout: {
		bottomEnd: 'inputPaging'
	}
});
```

Configuration options can also be used to customise the input paging plugin as you need. This is done by giving `inputPaging` as an object in `layout` - e.g.:

```js
new DataTable('#example', {
    layout: {
        bottomEnd: {
            inputPaging: {
                pageOf: false
            }
        }
    }
});
```

The following options are currently supported:

* `boolean`: `firstLast` which controls if the _First_ and _Last_ buttons are shown
* `boolean`: `previousNext` which controls if the _Previous_ and _Next_ buttons are shown
* `boolean`: `pageOf` which controls if the `/ {pages}` text is shown immediately after the `-tag input` for the current page number.
