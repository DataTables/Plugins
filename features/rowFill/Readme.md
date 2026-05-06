
# DataTables row filling

This feature plug-in for DataTables will automatically insert temporary rows into a DataTable that draws a page that is less than the configured page length. This can be handy to ensure that your table always as (e.g.) 10 rows visible.


## Usage

To install with npm (substitute with your favorite package manager if you prefer):

```
npm install datatables.net datatables.net-feature-rowfill
```

Then in your Javascript file (assuming you are using ES Modules):

```js
import DataTable from 'datatables.net';
import 'datatables.net-feature-rowfill';

new DataTable('#myTable', {
	rowFill: true
});
```
