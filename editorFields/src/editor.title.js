/**
 * Use a field as a grouping title for other fields. This provides the end
 * user with easy to understand grouping.
 *
 * Fields defined with this type are not submitted to the server, but they do
 * need to be initialised as normal using `e-api add()` or `e-init fields`.
 *
 * @name Field set title
 * @summary Field grouping display
 *
 * @scss editor.title.scss
 *
 * @example
 *     
 * new DataTable.Editor( {
 *   "ajax": "/api/dates",
 *   "table": "#staff",
 *   "fields": [ {
 *       "label": "Personal information",
 *       "name": "pinfo",
 *       "type": "title"
 *     }, 
 *     // additional fields...
 *   ]
 * } );
 */

if ( ! DataTable.ext.editorFields ) {
    DataTable.ext.editorFields = {};
}

var _fieldTypes = DataTable.Editor ?
    DataTable.Editor.fieldTypes :
    DataTable.ext.editorFields;


_fieldTypes.title = {
    create: function ( field )      { return DataTable.Dom.c('div')[0]; },
    get:    function ( field )      { return ''; },
    set:    function ( field, val ) {}
};
