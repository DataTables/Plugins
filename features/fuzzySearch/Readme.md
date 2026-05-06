
# DataTables input paging feature

The FuzzySearch plugin for DataTables which adds a _feature_ to DataTables for use in the `-init layout` option. The `fuzzySearch` feature adds a "fuzzy" option to the DataTables default search box, which the end user can activate.


## Usage

To install with npm (substitute with your favorite package manager if you prefer):

```
npm install datatables.net datatables.net-feature-fuzzysearch
```

Then in your Javascript file (assuming you are using ES Modules):

```js
import DataTable from 'datatables.net';
import 'datatables.net-feature-fuzzysearch';

new DataTable('#example', {
    fuzzySearch: true
});
```
