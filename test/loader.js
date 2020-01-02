/**
 * Copyright (c) 2019 Rafael da Silva Rocha.
 * https://github.com/rochars/wavefile-reader
 *
 */

/**
 * @fileoverview wavefile test loader.
 *
 * Run the tests against the dist files or source
 * according to the args.
 *
 */

/** @type {Object} */
let wavefile;

// UMD
if (process.argv[3] == '--umd') {
	console.log('umd tests');
	wavefile = require('../dist/wavefile-reader.js').WaveFileReader;
	if (wavefile.toString().slice(0, 5) === "class") {
		throw new Error('WaveFile in UMD dist should not be a ES6 class.');
	}

// Source
} else {
	console.log('Source tests');
	require = require("esm")(module);
	global.module = module;
	wavefile = require('../index.js').WaveFileReader;
}

module.exports = wavefile;
