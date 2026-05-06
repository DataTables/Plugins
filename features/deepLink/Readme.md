
# DataTables deep linking

This feature plug-in for DataTables provides a function which will take DataTables options from the browser's URL search string and return an object that can be used to construct a DataTable.


## Usage

To install with npm (substitute with your favorite package manager if you prefer):

```
npm install datatables.net datatables.net-feature-deeplink
```

Then in your Javascript file (assuming you are using ES Modules):

```js
import DataTable from 'datatables.net';
import 'datatables.net-feature-deeplink';

new DataTable(
	'#example',
	DataTable.deepLink(['pageLength', 'search.search'])
);
```
