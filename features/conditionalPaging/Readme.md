
# DataTables deep linking

Shows or hides the paging control depending on the amount of data in the table.


## Usage

To install with npm (substitute with your favorite package manager if you prefer):

```
npm install datatables.net datatables.net-feature-conditionalpaging
```

Then in your Javascript file (assuming you are using ES Modules):

```js
import DataTable from 'datatables.net';
import 'datatables.net-feature-conditionalpaging';

new DataTable('#example', {
	conditionalPaging: true
});
```
