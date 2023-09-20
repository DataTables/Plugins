This is a plugin I wrote that will add inputs / selects to the grids header or footer for searching.  It will automatically fire the search for the columns on the keyup for inputs and change for selects.

There is a delay on the keyup on the input that utilizes the `searchDelay` option on the DataTable.  The default is 500ms if it has not been specified.  The search fields are automatically omitted for a column if `columns.searchable` is FALSE.

Here are the plugin options:
* `placement` - String: "head' or "foot" (default "head")
* `select` - Array of objects: define which columns should search via dropdown.  Object properties specified below.
   
    * `name` - int or string: column index, `columns.data` as a string, `columns.name`
    * `options` - Array of Strings or a function `function(select)`:  The function will be responsible for appending the `<option/>` elements to the select passed in.  The select it a jQuery object.  The string array can specify the value and text of the option by using a `|` in the String "avalue|Text To DIsplay".  The plugin will assign the String to the value and text of the option if the pipe is omitted.  
    * `header` - boolean: True to generate an option header in the select.  (default true)
 * `placeholders` - boolean: True generates a placeholder attribute on the inputs using the column header in the table.
 * `controlClass` - String: Classes to apply to the controls.  (default "form-control" for Bootstrap)
   
Plugin can be invoked by doing:
```js
var dt = $("#mytable").DataTable();
//using defaults
new $.fn.dataTable.DtServerColSearch(dt);
//OR 
new $.fn.dataTable.DtServerColSearch(dt, {
	placement: "foot",
	placeholders: "false",
	....
});
```