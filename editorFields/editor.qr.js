

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
 * This plugin for Editor provides integration with the Instascan library
 * allowing fields in Editor to be created which will use a camera (mobile or
 * webcam) to scan QR codes and store the result in the field's value.
 *
 * @name Instascan
 * @summary QR Reader for HTML5
 * @requires [Instascan](https://github.com/schmich/instascan)
 *
 * @depjs //rawgit.com/schmich/instascan-builds/master/instascan.min.js
 *
 * @example
 *
 * new DataTable.Editor( {
 *   "ajax": "/api/documents",
 *   "table": "#documents",
 *   "fields": [ {
 *       "label": "Description:",
 *       "name": "description",
 *       "type": "qr"
 *     },
 *     // additional fields...
 *   ]
 * } );
 */

if (!DataTable.ext.editorFields) {
	DataTable.ext.editorFields = {};
}

var _fieldTypes = DataTable.Editor
	? DataTable.Editor.fieldTypes
	: DataTable.ext.editorFields;

var Dom = DataTable.Dom;

_fieldTypes.qr = {
	create: function (conf) {
		var safeId = DataTable.Editor.safeId(conf.id);
		var input = Dom.c('input').attr('id', safeId);
		var video = Dom.c('video').css({
			display: 'none',
			'max-width': '100%',
			padding: '2% 0%'
		});
		var scan = Dom.c('button').text('Scan').css({ margin: '0% 1%' });
		var container = Dom.c('div').append(input).append(scan).append(video);

		// Initialise Instascan sending the video feed to our video element
		conf.qr = new Instascan.Scanner({ video: video[0] });
		conf.qrInput = input;
		conf.qrScan = scan;

		// Add the scan listener to extract and set the value
		// Also add and remove a border to show that a scan has taken place
		conf.qr.addListener('scan', function (content) {
			input.val(content).css({ border: 'blue 2px solid' });
			video.css({ border: 'blue 2px solid' });

			setTimeout(() => {
				input.css({ border: 'none' });
				video.css({ border: 'none' });
			}, 500);
		});

		// When the form is closed, stop the webcam from running
		this.on('close', function () {
			conf.qr.stop();
		});

		return container;
	},

	get: function (conf) {
		// The value to be displayed in the table should be taken from the input
		// element
		return conf.qrInput.val();
	},

	set: function (conf, val) {
		// If val is passed in then it needs to be set
		if (val !== null) {
			conf.qrInput.val(val);
		}

		conf.qrScan.unbind('click').on('click', function () {
			// When the video needs to start scanning
			if (this.textContent === 'Scan') {
				Instascan.Camera.getCameras()
					.then(function (cameras) {
						if (cameras.length > 0) {
							// Make the video feed line up nicely in the
							// form
							Dom.s(conf.qr.video).css({ display: 'block' });

							// Start scanning for QR codes
							conf.qr.start(cameras[0]);
						}
						else {
							console.error('No cameras found.');
						}
					})
					.catch(function (e) {
						console.error(e);
					});

				this.textContent = 'Stop';
				return;
			}
			else if (this.textContent === 'Stop') {
				// When the video needs to stop scanning
				Dom.s(conf.qr.video).css({ display: 'none' });
				conf.qr.stop();
				this.textContent = 'Scan';

				return;
			}
		});
	},

	enable: function (conf) {},

	disable: function (conf) {}
};


return DataTable.Editor;
}));
