/**
 * [Chosen](https://harvesthq.github.io/chosen/) is a jQuery plug-in that makes
 * long, unwieldy select boxes much more user-friendly.
 *
 * Note that Chosen displays its drop down select element inside the Editor
 * display controller. This can have the visual effect of having access to the
 * select control potentially limited. The Select2 and Selectize libraries do
 * not have this issue.
 * 
 * Please note that this plug-in was published, Editor now has a built-in
 * `e-field autocomplete` and `e-field tags` field type which can be used with
 * full integration for the published server-side libraries. It is recommended
 * that you use the new built-in field types in preference to this plug-in,
 * particularly for new projects.
 *
 * @name Chosen
 * @summary Use the Chosen library with Editor for complex select input options.
 * @requires [Chosen](https://harvesthq.github.io/chosen/)
 * @depcss https://cdnjs.cloudflare.com/ajax/libs/chosen/1.4.2/chosen.min.css
 * @depjs https://code.jquery.com/jquery-3.7.1.js
 * @depjs https://cdnjs.cloudflare.com/ajax/libs/chosen/1.4.2/chosen.jquery.min.js
 * 
 * @opt `e-type object` **`options`**: - The values and labels to be used in the Chosen list. This can be given in a number of different forms:
 *   * `e-type object` - Name / value pairs, where the property name is used as the label and the value as the field value. For example: `{ "Edinburgh": 51, "London": 76, ... }`.
 *   * `e-type array` - An array of objects with the properties `label` and `value` defined. For example: `[ { label: "Edinburgh", value: 51 }, { label: "London", value: 76 } ]`.
 *   * `e-type array` - An array of values (e.g. numbers, strings etc). Each element in the array will be used for both the label and the value. For example: `[ "Edinburgh", "London" ]`.
 * @opt `e-type object` **`opts`**: Chosen initialisation options object.
 *     Please refer to the Chosen documentation for the full range
 *     of options available.
 * @opt `e-type object` **`attr`**: Attributes that are applied to the
 *     `-tag select` element before Chosen is initialised
 *
 * @example
 * // Create an Editor instance with a Chosen field and data
 * new $.fn.dataTable.Editor( {
 *   "ajax": "php/todo.php",
 *   "table": "#example",
 *   "fields": [ {
 *           "label": "Item:",
 *           "name": "item"
 *       }, {
 *           "label": "Priority:",
 *           "name": "priority",
 *           "type": "chosen",
 *           "options": [
 *               { "label": "1 (highest)", "value": "1" },
 *               { "label": "2",           "value": "2" },
 *               { "label": "3",           "value": "3" },
 *               { "label": "4",           "value": "4" },
 *               { "label": "5 (lowest)",  "value": "5" }
 *           ]
 *       }, {
 *           "label": "Status:",
 *           "name": "status",
 *           "type": "radio",
 *           "default": "Done",
 *           "options": [
 *               { "label": "To do", "value": "To do" },
 *               { "label": "Done", "value": "Done" }
 *           ]
 *       }
 *   ]
 * } );
 *
 * @example
 * // Add a Chosen field to Editor with Chosen options set
 * editor.add( {
 *     "label": "State:",
 *     "name": "state",
 *     "type": "chosen",
 *     "opts": {
 *         "disable_search": true,
 *         "inherit_select_classes": true
 *     }
 * } );
 * 
 */

if ( ! DataTable.ext.editorFields ) {
    DataTable.ext.editorFields = {};
}

var _fieldTypes = DataTable.Editor ?
    DataTable.Editor.fieldTypes :
    DataTable.ext.editorFields;


_fieldTypes.chosen = {
    "_addOptions": function ( conf, opts ) {
        var elOpts = conf._input[0].options;

        elOpts.length = 0;

        if ( opts ) {
            DataTable.Editor.pairs( opts, conf.optionsPair, function ( val, label, i ) {
                elOpts[i] = new Option( label, val );
            } );
        }
    },

    create: function ( conf ) {
        conf._input = $('<select/>')
            .attr( $.extend( {
                id: conf.id
            }, conf.attr || {} ) );

        _fieldTypes.chosen._addOptions( conf, conf.options || conf.ipOpts );

        // On open, need to have the instance update now that it is in the DOM
        this.on( 'open.chosen-'+conf.id, function () {
            conf._input.chosen( $.extend( {}, conf.opts, { width: '100%' } ) );
        } );

        return conf._input[0];
    },

    get: function ( conf ) {
        return conf._input.val();
    },

    set: function ( conf, val ) {
        conf._input.val( val ).trigger('chosen:updated');
    },

    enable: function ( conf ) {
        conf._input.attr('disabled', false).trigger('chosen:updated');
        $(conf._input).removeClass( 'disabled' );
    },

    disable: function ( conf ) {
        conf._input.attr('disabled', true).trigger('chosen:updated');
        $(conf._input).addClass( 'disabled' );
    },

    update: function ( conf, options ) {
        _fieldTypes.chosen._addOptions( conf, options );
        conf._input.trigger('chosen:updated');
    }
};
