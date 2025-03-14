
# DataTables select paging feature

This package adds a _feature_ to DataTables which can be used by [the `layout` property](https://datatables.net/reference/option/layout) to display a pagination control for a table with an `<select>` element allowing the end user to quickly jump between pages.


## Usage

To install with npm (substitute with your favorite package manager if you prefer):

```
npm install datatables.net datatables.net-feature-selectpaging
```

Then in your Javascript file (assuming you are using ES Modules):

```js
import DataTable from 'datatables.net';
import 'datatables.net-feature-selectpaging';

new DataTable('#myTable', {
	layout: {
		bottomEnd: 'selectPaging'
	}
});
```

Configuration options can also be used to customise the input paging plugin as you need. This is done by giving `selectPaging` as an object in `layout` - e.g.:

```js
new DataTable('#example', {
    layout: {
        bottomEnd: {
            selectPaging: {
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
