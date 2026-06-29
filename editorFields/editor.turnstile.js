

(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['datatables.net'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		// CommonJS
		var cjsRequires = function (root) {
			if (! root.DataTable) {
				require('datatables.net')(root);
			}
		};

		if (typeof window === 'undefined') {
			module.exports = function (root) {
				if (! root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}

				cjsRequires(root);
				return factory(root, root.document, root.DataTable);
			};
		}
		else {
			cjsRequires(window);
			module.exports = factory(window, window.document, window.DataTable);
		}
	}
	else {
		// Browser
		factory(window, document, window.DataTable);
	}
}(function(window, document, DataTable) {
'use strict';

/**
 * This plug-in makes use of [Cloudflare Turnstile](https://www.cloudflare.com/en-gb/application-services/products/turnstile/)
 * to provide anti-bot and anti-spam verification (similar to a captcha, but more
 * user friendly).
 * 
 * The client-side aspect is provided by this plug-in. You'll also need a server-side
 * verification for the token that is submitted as the value for this field. See
 * [this blog post](https://datatables.net/blog/2025/turnstile-and-editor) for how to
 * integrate with the Editor server-side libraries.
 * 
 * You'll also need a Turnstile site key and secret key, which you can obtain free
 * from Cloudflare. See [their documentation here](https://developers.cloudflare.com/turnstile/get-started/).
 *
 * @name Anti-span / Anti-bot validation
 * @summary Integration with Turnstile to help validate that it is humans who are
 *   submitting data.
 * @requires [Cloudflare Turnstile](https://www.cloudflare.com/en-gb/application-services/products/turnstile)
 *
 * @opt `e-type object` **`siteKey`**: Cloudflare Turnstile site key
 *
 * @example
 *  const editor = new DataTable.Editor({
 *    table: '#myTable',
 *    fields: [
 *      {
 *        label: 'Verify:',
 *        name: 'turnstile',
 *        type: 'turnstile',
 *        siteKey: '...my-site-key...'
 *      }
 *    ]
 *  });
 */

DataTable.Editor.fieldTypes.turnstile = {
	create: function (conf) {
		let ts;
		var init = function () {
			conf._widgetId = window.turnstile.render('#turnstile-container', {
				sitekey: conf.siteKey
			});
		};

		// Load the Turnstile script if it hasn't already been loaded on the page
		if (!window.turnstile) {
			ts = document.createElement('script');
			ts.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';

			document.body.append(ts);
		}

		conf._input = document.createElement('div');
		conf._input.id = 'turnstile-container';

		// When the form is displayed, initialise Turnstile
		this.one('open', function () {
			if (window.turnstile) {
				init();
			}
			else if (ts) {
				// Wait for the script to load
				ts.onload = function () {
					init();
				};
			}
		});

		this.on('postSubmit', function () {
			window.turnstile.reset(conf._widgetId);
		});

		return conf._input;
	},

	disable(conf) {},

	enable(conf) {},

	get: function (conf) {
		return turnstile.getResponse(conf._widgetId);
	},

	set: function (conf, val) {}
};


return DataTable.Editor;
}));
