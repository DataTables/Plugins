
# DataTables dynamic vertical resize for scrolling tables

This feature plug-in for DataTables will automatically change the height of a scrolling DataTable to fit inside its container. This can be particularly useful for control panels and other interfaces which resize dynamically with the user's browser window.


## Usage

To install with npm (substitute with your favorite package manager if you prefer):

```
npm install datatables.net datatables.net-feature-scrollresize
```

Then in your Javascript file (assuming you are using ES Modules):

```js
import DataTable from 'datatables.net';
import 'datatables.net-feature-scrollresize';

new DataTable('#myTable', {
	scrollY: 300,
	scrollCollapse: true,
	scrollResize: true,
	paging: false,
	layout: {
		topStart: null
	}
});
```
