/**
 *  @name anchor
 *  @summary Renders the column data as HTML anchor (`a` tag)
 *  @author [Fedonyuk Anton](http://ensostudio.ru)
 *  @requires DataTables 1.10+
 *
 *  @param {string} type The anchor type: 'link'(by default), 'phone' or 'email'
 *  @param {object|function} attributes The attributes of the anchor tag or the
 *       callback function returning the tag attributes, the callback syntax:
 *      `function (mixed data, object|array row[, object meta]): object`
 *  @param {string|null} innerText The inner text of the anchor tag or `null` to
 *      set text by column `data` (by default)
 *  @returns {string}
 *
 *  @example
 *    // Display `<a href="..." target="_blank">...</a>`
 *    $('#example').DataTable({
 *      columnDefs: [{
 *        targets: 1,
 *        render: $.fn.dataTable.render.anchor()
 *      }]
 *    });
 *
 *  @example
 *    // Display `<a href="mailto:..." class="link">...</a>`
 *    $('#example').DataTable({
 *      columnDefs: [{
 *        targets: 2,
 *        render: $.fn.dataTable.render.anchor('email', {'class': 'link'})
 *      }]
 *    });
 */
jQuery.fn.dataTable.render.anchor = function (
  type = 'link',
  attributes = {},
  innerText = null
) {
  return function (data, type, row, meta) {
    // restriction only for table display rendering
    if (type !== 'display') {
      return data;
    }

    if (innerText === null) {
      innerText = data;
    }

    var attributes = attributes typeof 'function' ? attributes(data, row, meta) : attributes;

    if (!attributes.href) {
      switch (type) {
        case 'mail':
          attributes.href = 'mailto:' + data;
          break;
        case 'phone':
          attributes.href = 'tel:' + data.replace(/[^+\d]+/g, '');
          break;
        case 'link':
        case default:
          try {
            attributes.href = new URL(data);
          } catch (e) {
            attributes.href = data;
          }
      }
    }

    var anchorEl = jQuery('</a>');
    anchorEl.attr(attributes).text(innerText);

    return anchorEl[0].outerText;
  };
};
