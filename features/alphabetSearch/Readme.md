
# DataTables input paging feature

Show an set of alphabet buttons alongside a table providing search input options.


## Usage

To install with npm (substitute with your favorite package manager if you prefer):

```
npm install datatables.net datatables.net-feature-alphabetsearch
```

Then in your Javascript file (assuming you are using ES Modules):

```js
import DataTable from 'datatables.net';
import 'datatables.net-feature-alphabetsearch';

new DataTable('#example', {
	layout: {
		top: 'alphabetSearch'
	}
});
```
