
# DataTables search fade feature

This feature will cause the scrolling of the page to shift to the top of the table when the table is paged.


## Usage

To install with npm (substitute with your favorite package manager if you prefer):

```
npm install datatables.net datatables.net-feature-scrolltotop
```

Then in your Javascript file (assuming you are using ES Modules):

```js
import DataTable from 'datatables.net';
import 'datatables.net-feature-scrolltotop';

new DataTable('#myTable', {
	scrollToTop: true
});
```
