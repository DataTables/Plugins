/*!***************************************************
 * datatables.mark.js v2.0.1
 * https://github.com/julmot/datatables.mark.js
 * Copyright (c) 2016–2017, Julian Motz
 * Released under the MIT license https://git.io/voRZ7
 *****************************************************/

'use strict';

((factory, window, document) => {
  if (typeof exports === 'object') {
    const jquery = require('jquery');
    require('datatables.net');
    require('mark.js/dist/jquery.mark.js');
    module.exports = factory(window, document, jquery);
  } else if (typeof define === 'function' && define.amd) {
    define(['jquery', 'datatables.net', 'markjs'], jQuery => {
      return factory(window, document, jQuery);
    });
  } else {
    factory(window, document, jQuery);
  }
})((window, document, $) => {
  class MarkDataTables {
    constructor(dtInstance, options) {
      if (!$.fn.mark || !$.fn.unmark) {
        throw new Error('jquery.mark.js is necessary for datatables.mark.js');
      }
      this.instance = dtInstance;
      this.options = typeof options === 'object' ? options : {};
      this.intervalThreshold = 49;
      this.intervalMs = 300;
      this.initMarkListener();
    }

    initMarkListener() {
      const ev = 'draw.dt.dth column-visibility.dt.dth column-reorder.dt.dth';
      let intvl = null;
      this.instance.on(ev, () => {
        const rows = this.instance.rows({
          filter: 'applied',
          page: 'current'
        }).nodes().length;
        if (rows > this.intervalThreshold) {
          clearTimeout(intvl);
          intvl = setTimeout(() => {
            this.mark();
          }, this.intervalMs);
        } else {
          this.mark();
        }
      });
      this.instance.on('destroy', () => {
        this.instance.off(ev);
      });
      this.mark();
    }

    mark() {
      const globalSearch = this.instance.search();
      $(this.instance.table().body()).unmark(this.options);
      this.instance.columns({
        search: 'applied',
        page: 'current'
      }).nodes().each((nodes, colIndex) => {
        const columnSearch = this.instance.column(colIndex).search(),
              searchVal = columnSearch || globalSearch;
        if (searchVal) {
          nodes.forEach(node => {
            $(node).mark(searchVal, this.options);
          });
        }
      });
    }

  }

  $(document).on('init.dt.dth', (event, settings) => {
    if (event.namespace !== 'dt') {
      return;
    }

    const dtInstance = $.fn.dataTable.Api(settings);

    let options = null;
    if (dtInstance.init().mark) {
      options = dtInstance.init().mark;
    } else if ($.fn.dataTable.defaults.mark) {
      options = $.fn.dataTable.defaults.mark;
    }
    if (options === null) {
      return;
    }

    new MarkDataTables(dtInstance, options);
  });
}, window, document);
