/* global define */

(function () {
	'use strict';

	var slice = Array.prototype.slice;

	function jollychic(prefix, symbol) {
		symbol = symbol || '';

		return function () {
			var args = slice.call(arguments);
			var className = prefix;

			args
			&& args.length
			&& args.forEach(function (arg) {
				className += symbol + arg;
			})

			return className;
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
