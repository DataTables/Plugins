
# DataTables search highlighting

This plugin provides integration with [mark.js](https://markjs.io/) to highlight search terms in the table.


## Usage

To install with npm (substitute with your favorite package manager if you prefer):

```
npm install datatables.net datatables.net-feature-markjs
```

Then in your Javascript file (assuming you are using ES Modules):

```js
import DataTable from 'datatables.net';
import Mark from 'mark.js';
import 'datatables.net-feature-markjs';

new DataTable('#myTable', {
	mark: true
});
```
