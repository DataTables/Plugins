
# DataTables search fade feature

This feature plug-in for DataTables will automatically change the DataTables page length in order to fit inside its container. This can be particularly useful for control panels and other interfaces which resize dynamically with the user's browser window instead of scrolling.


## Usage

To install with npm (substitute with your favorite package manager if you prefer):

```
npm install datatables.net datatables.net-feature-pageResize
```

Then in your Javascript file (assuming you are using ES Modules):

```js
import DataTable from 'datatables.net';
import 'datatables.net-feature-pageresize';

new DataTable('#myTable', {
	pageResize: true,
	layout: {
		topStart: null
	}
});
```
