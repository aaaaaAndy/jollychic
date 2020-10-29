/* global define */

(function () {
	'use strict';

	function jollychic(prefix) {
		return function (suffix) {
			return prefix + '' + suffix;
		}
	}

	if (typeof module !== 'undefined' && module.exports) {
		jollychic.default = jollychic;
		module.exports = jollychic;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		define('jollychic', [], function () {
			return jollychic;
		});
	} else {
		window.jollychic = jollychic;
	}
}());
