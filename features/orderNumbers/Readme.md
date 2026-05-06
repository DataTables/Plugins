
# DataTables multi-column ordering indicators

The OrderNumbers plugin for DataTables displays a number in the table header when multi-column ordering, so the end user can quickly see what sequence the order is being applied in.


## Usage

To install with npm (substitute with your favorite package manager if you prefer):

```
npm install datatables.net datatables.net-feature-ordernumbers
```

Then in your Javascript file (assuming you are using ES Modules):

```js
import DataTable from 'datatables.net';
import 'datatables.net-feature-ordernumbers';

new DataTable('#myTable', {
	orderNumbers: true
});
```
