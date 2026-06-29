

import DataTable from 'datatables.net';
/**
 * proseMirror is a RTE plugin that allows the user to add rich text to cells.
 * This plugin provides integration between (https://prosemirror.net) and Editor
 * adding the proseMirror field type to Editor. It also requires the developer to
 * build their own ProseMirror since it is not distributed as a single file. This
 * build should include - "ProseMirror.basicSchema",
 *                        "ProseMirror.exampleSetup",
 *                        "ProseMirror.EditorState",
 *                        "ProseMirror.DOMParser",
 *                        "ProseMirror.EditorView"
 *
 *
 * @name ProseMirror
 * @summary Use ProseMirror RTE library with Editor to allow Rich Text to be added
 * to cells in editor.
 *
 * @depjs https://prosemirror.net
 *
 * @example Including an example render function which will display the text in the RTE in the cell in table view.
 *  var editor = new DataTable.Editor({
 *    table: "#example",
 *    fields: [
 *      ...
 *      {
 *        label: "Text",
 *        name: "text",
 *        type: "proseMirror"
 *      }
 *    ]
 *  });
 *
 *  new DataTable("#example", {
 *    // ...
 *    columns: [
 *      // ...
 *      {
 *        data: "text",
 *        render: function(data,type,row){
 *          try {
 *            var domSer = ProseMirror.DOMSerializer.fromSchema(mySchema);
 *            var parData = JSON.parse(data);
 *
 *            parData = ProseMirror.EditorState.fromJSON(
 *              { schema: mySchema, plugins: plugins },
 *              parData
 *            );
 *
 *            var dom = domSer.serializeFragment(parData.doc.content);
 *
 *            div.empty().append(dom);
 *            return div.html();
 *
 *          } catch (err) {
 *
 *            return "This is invalid JSON " + data;
 *
 *          }
 *        }
 *      }
 *    ]
 *  })
 */

if (!DataTable.ext.editorFields) {
	DataTable.ext.editorFields = {};
}

var _fieldTypes = DataTable.Editor
	? DataTable.Editor.fieldTypes
	: DataTable.ext.editorFields;

const mySchema = ProseMirror.basicSchema;

var plugins = ProseMirror.exampleSetup({ schema: mySchema });

var view;

_fieldTypes.proseMirror = {
	create: function (conf) {
		conf._input = DataTable.Dom.c('div')
			.classAdd('editor')
			.css('height', 'auto')
			.attr(
				Object.assign(
					{
						id: DataTable.Editor.safeId(conf.id),
						type: 'text'
					},
					conf.attr || {}
				)
			);

		var state = ProseMirror.EditorState.create({
			doc: ProseMirror.DOMParser.fromSchema(mySchema).parse(
				conf._input[0]
			),
			plugins: plugins
		});

		view = new ProseMirror.EditorView(conf._input[0], { state: state });

		return conf._input[0];
	},

	get: function (conf) {
		return JSON.stringify(view.state);
	},

	set: function (conf, val) {
		var loadState;

		try {
			loadState = JSON.parse(val);
			loadState = ProseMirror.EditorState.fromJSON(
				{ schema: mySchema, plugins: plugins },
				loadState
			);
		} catch (err) {
			var newDiv = document.createElement('div');
			var newContent = document.createTextNode(val);

			newDiv.appendChild(newContent);

			loadState = ProseMirror.EditorState.create({
				doc: ProseMirror.DOMParser.fromSchema(mySchema).parse(newDiv),
				plugins: plugins
			});
		}

		view.updateState(loadState);
	}
};


export default DataTable.Editor;

