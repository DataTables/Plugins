
# DataTables search fade feature

The LengthLinks plugin for DataTables which adds a _feature_ to DataTables for use in the `-init layout` option. The `lengthLinks` feature shows a paging length control as a set of links that can be clicked on to change the table's page size.


## Usage

To install with npm (substitute with your favorite package manager if you prefer):

```
npm install datatables.net datatables.net-feature-lengthlinks
```

Then in your Javascript file (assuming you are using ES Modules):

```js
import DataTable from 'datatables.net';
import 'datatables.net-feature-lengthlinks';

new DataTable('#myTable', {
	layout: {
		topStart: 'lengthLinks'
	}
});
```
