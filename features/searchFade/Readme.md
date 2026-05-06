
# DataTables search fade feature

This feature will create a text box that will apply a search term to the DataTable, but unlike the default text search, rather than removing rows that don't match, it will fade them out.


## Usage

To install with npm (substitute with your favorite package manager if you prefer):

```
npm install datatables.net datatables.net-feature-searchfade
```

Then in your Javascript file (assuming you are using ES Modules):

```js
import DataTable from 'datatables.net';
import 'datatables.net-feature-searchfade';

new DataTable('#myTable', {
	layout: {
		topEnd: 'searchFade'
	}
});
```
