/*! © SpryMedia Ltd - datatables.net/license */
import DataTable from"datatables.net";DataTable.ext.order["anti-the-pre"]=function(a){return a.replace(/^the /i,"")};export default DataTable;