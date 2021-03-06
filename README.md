# wavefile-reader
Copyright (c) 2019 Rafael da Silva Rocha.  
https://github.com/rochars/wavefile-reader

[![NPM version](https://img.shields.io/npm/v/wavefile-reader.svg?style=for-the-badge)](https://www.npmjs.com/package/wavefile-reader) [![Docs](https://img.shields.io/badge/API-docs-blue.svg?style=for-the-badge)](https://rochars.github.io/wavefile-reader/docs)  
[![Codecov](https://img.shields.io/codecov/c/github/rochars/wavefile-reader.svg?style=flat-square)](https://codecov.io/gh/rochars/wavefile-reader) [![Unix Build](https://img.shields.io/travis/rochars/wavefile-reader.svg?style=flat-square)](https://travis-ci.org/rochars/wavefile-reader) [![Windows Build](https://img.shields.io/appveyor/ci/rochars/wavefile-reader.svg?style=flat-square&logo=appveyor)](https://ci.appveyor.com/project/rochars/wavefile-reader) [![Scrutinizer](https://img.shields.io/scrutinizer/g/rochars/wavefile-reader.svg?style=flat-square&logo=scrutinizer)](https://scrutinizer-ci.com/g/rochars/wavefile-reader/)

Read data from wav files.

## Install
```
npm install wavefile-reader
```

## Use

### Node
```javascript
const wavefileReader = require('wavefile-reader');
let wav = new wavefileReader.WaveFileReader();
```
or 
```javascript
const WaveFileReader = require('wavefile-reader').WaveFileReader;
let wav = new WaveFileReader();
```
or
```javascript
import { WaveFileReader } from 'wavefile-reader';
let wav = new WaveFileReader();
```

#### Node.js Example
```javascript
const WaveFileReader = require('wavefile-reader').WaveFileReader;

// Load a wav file buffer as a WaveFileReader object
let wav = new WaveFileReader();
wav.fromBuffer(buffer);

// Check some of the file properties
console.log(wav.container);
console.log(wav.chunkSize);
console.log(wav.fmt.chunkId);

// You can also load a file during object creation:
wav = new WaveFileReader(buffer);
console.log(wav.container);
console.log(wav.chunkSize);
console.log(wav.fmt.chunkId);
```

### Browser
Use the **wavefile-reader.js** file in the *dist* folder:
```html
<script src="wavefile-reader.js"></script>
<script>
  var wav = new wavefileReader.WaveFileReader();
</script>
```

Or load it from the [jsDelivr](https://cdn.jsdelivr.net/npm/wavefile-reader) CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/wavefile-reader"></script>
```

Or load it from [unpkg](https://unpkg.com/wavefile-reader):
```html
<script src="https://unpkg.com/wavefile-reader"></script>
```

## API

### The WaveFileReader methods
```javascript
/**
 * Set up the WaveFileReader object from a byte buffer.
 * @param {!Uint8Array} wavBuffer The buffer.
 * @param {boolean=} samples True if the samples should be loaded.
 * @throws {Error} If container is not RIFF, RIFX or RF64.
 * @throws {Error} If format is not WAVE.
 * @throws {Error} If no 'fmt ' chunk is found.
 * @throws {Error} If no 'data' chunk is found.
 */
WaveFileReader.fromBuffer(bytes, samples=true) {}
```

### The WaveFileReader properties
```javascript
/**
 * The container identifier.
 * "RIFF", "RIFX" and "RF64" are supported.
 * @type {string}
 */
WaveFileReader.container = '';
/**
 * @type {number}
 */
WaveFileReader.chunkSize = 0;
/**
 * The format.
 * Always 'WAVE'.
 * @type {string}
 */
WaveFileReader.format = '';
/**
 * The data of the "fmt" chunk.
 * @type {!Object<string, *>}
 */
WaveFileReader.fmt = {
    /** @type {string} */
    chunkId: '',
    /** @type {number} */
    chunkSize: 0,
    /** @type {number} */
    audioFormat: 0,
    /** @type {number} */
    numChannels: 0,
    /** @type {number} */
    sampleRate: 0,
    /** @type {number} */
    byteRate: 0,
    /** @type {number} */
    blockAlign: 0,
    /** @type {number} */
    bitsPerSample: 0,
    /** @type {number} */
    cbSize: 0,
    /** @type {number} */
    validBitsPerSample: 0,
    /** @type {number} */
    dwChannelMask: 0,
    /**
     * 4 32-bit values representing a 128-bit ID
     * @type {!Array<number>}
     */
    subformat: []
};
/**
 * The data of the "fact" chunk.
 * @type {!Object<string, *>}
 */
WaveFileReader.fact = {
    /** @type {string} */
    chunkId: '',
    /** @type {number} */
    chunkSize: 0,
    /** @type {number} */
    dwSampleLength: 0
};
/**
 * The data of the "cue " chunk.
 * @type {!Object<string, *>}
 */
WaveFileReader.cue = {
    /** @type {string} */
    chunkId: '',
    /** @type {number} */
    chunkSize: 0,
    /** @type {number} */
    dwCuePoints: 0,
    /** @type {!Array<!Object>} */
    points: [],
};
/**
 * The data of the "smpl" chunk.
 * @type {!Object<string, *>}
 */
WaveFileReader.smpl = {
    /** @type {string} */
    chunkId: '',
    /** @type {number} */
    chunkSize: 0,
    /** @type {number} */
    dwManufacturer: 0,
    /** @type {number} */
    dwProduct: 0,
    /** @type {number} */
    dwSamplePeriod: 0,
    /** @type {number} */
    dwMIDIUnityNote: 0,
    /** @type {number} */
    dwMIDIPitchFraction: 0,
    /** @type {number} */
    dwSMPTEFormat: 0,
    /** @type {number} */
    dwSMPTEOffset: 0,
    /** @type {number} */
    dwNumSampleLoops: 0,
    /** @type {number} */
    dwSamplerData: 0,
    /** @type {!Array<!Object>} */
    loops: [],
};
/**
 * The data of the "bext" chunk.
 * @type {!Object<string, *>}
 */
WaveFileReader.bext = {
    /** @type {string} */
    chunkId: '',
    /** @type {number} */
    chunkSize: 0,
    /** @type {string} */
    description: '', //256
    /** @type {string} */
    originator: '', //32
    /** @type {string} */
    originatorReference: '', //32
    /** @type {string} */
    originationDate: '', //10
    /** @type {string} */
    originationTime: '', //8
    /**
     * 2 32-bit values, timeReference high and low
     * @type {!Array<number>}
     */
    timeReference: [0, 0],
    /** @type {number} */
    version: 0, //WORD
    /** @type {string} */
    UMID: '', // 64 chars
    /** @type {number} */
    loudnessValue: 0, //WORD
    /** @type {number} */
    loudnessRange: 0, //WORD
    /** @type {number} */
    maxTruePeakLevel: 0, //WORD
    /** @type {number} */
    maxMomentaryLoudness: 0, //WORD
    /** @type {number} */
    maxShortTermLoudness: 0, //WORD
    /** @type {string} */
    reserved: '', //180
    /** @type {string} */
    codingHistory: '' // string, unlimited
};
/**
 * The data of the "ds64" chunk.
 * Used only with RF64 files.
 * @type {!Object<string, *>}
 */
WaveFileReader.ds64 = {
    /** @type {string} */
    chunkId: '',
    /** @type {number} */
    chunkSize: 0,
    /** @type {number} */
    riffSizeHigh: 0, // DWORD
    /** @type {number} */
    riffSizeLow: 0, // DWORD
    /** @type {number} */
    dataSizeHigh: 0, // DWORD
    /** @type {number} */
    dataSizeLow: 0, // DWORD
    /** @type {number} */
    originationTime: 0, // DWORD
    /** @type {number} */
    sampleCountHigh: 0, // DWORD
    /** @type {number} */
    sampleCountLow: 0, // DWORD
    /** @type {number} */
    //"tableLength": 0, // DWORD
    /** @type {!Array<number>} */
    //"table": []
};
/**
 * The data of the "data" chunk.
 * @type {!Object<string, *>}
 */
WaveFileReader.data = {
    /** @type {string} */
    chunkId: '',
    /** @type {number} */
    chunkSize: 0,
    /** @type {!Uint8Array} */
    samples: new Uint8Array(0)
};
/**
 * The data of the "LIST" chunks.
 * Each item in this list look like this:
 *  {
 *      chunkId: '',
 *      chunkSize: 0,
 *      format: '',
 *      subChunks: []
 *   }
 * @type {!Array<!Object>}
 */
WaveFileReader.LIST = [];
/**
 * The data of the "junk" chunk.
 * @type {!Object<string, *>}
 */
WaveFileReader.junk = {
    /** @type {string} */
    chunkId: '',
    /** @type {number} */
    chunkSize: 0,
    /** @type {!Array<number>} */
    chunkData: []
};
/**
 * The bit depth code according to the samples.
 * @type {string}
 */
WaveFileReader.bitDepth =  '';
```

#### Cue points
Items in *cue.points* are objects like this:
```javascript
{
    /** @type {number} */
    dwName: 0, // a cue point ID
    /** @type {number} */
    dwPosition: 0,
    /** @type {number} */
    fccChunk: 0,
    /** @type {number} */
    dwChunkStart: 0,
    /** @type {number} */
    dwBlockStart: 0,
    /** @type {number} */
    dwSampleOffset: 0
}
```

#### Sample loops
Items in *smpl.loops* are objects like this:
```javascript
{
    /** @type {string} */
    dwName: '', // a cue point ID
    /** @type {number} */
    dwType: 0,
    /** @type {number} */
    dwStart: 0,
    /** @type {number} */
    dwEnd: 0,
    /** @type {number} */
    dwFraction: 0,
    /** @type {number} */
    dwPlayCount: 0
}
```

#### LIST chunk
"LIST" chunk data is stored as follows:
```javascript
/**
 * An array of the "LIST" chunks present in the file.
 * @type {!Array<!Object>}
 */
WaveFileReader.LIST = [];
```

Items in *WaveFileReader.LIST* are objects like this:
```javascript
{
    /** @type {string} */
    chunkId: '', // always 'LIST'
    /** @type {number} */
    chunkSize: 0,
    /** @type {string} */
    format: '', // 'adtl' or 'INFO'
    /** @type {!Array<!Object>} */
    subChunks: []
};
```
Where "subChunks" are the subChunks of the "LIST" chunk. A single file may have many "LIST" chunks as long as their formats ("INFO", "adtl", etc) are not the same. **wavefile-reader** can read "LIST" chunks of format "INFO" and "adtl".

For "LIST" chunks with the "INFO" format, "subChunks" will be an array of objects like this:
```javascript
{
    /** @type {string} */
    chunkId: '', // some RIFF tag
    /** @type {number} */
    chunkSize 0,
    /** @type {string} */
    value: ''
}
```
Where "chunkId" may be any RIFF tag:  
https://sno.phy.queensu.ca/~phil/exiftool/TagNames/RIFF.html#Info

## Contributing to wavefile-reader
**wavefile-reader** welcomes all contributions from anyone willing to work in good faith with other contributors and the community. No contribution is too small and all contributions are valued.

See [CONTRIBUTING.md](https://github.com/rochars/wavefile-reader/blob/master/CONTRIBUTING.md) for details.

### Style guide
**wavefile-reader** code should follow the Google JavaScript Style Guide:  
https://google.github.io/styleguide/jsguide.html

### Code of conduct
This project is bound by a Code of Conduct: The [Contributor Covenant, version 1.4](https://github.com/rochars/wavefile-reader/blob/master/CODE_OF_CONDUCT.md), also available at https://www.contributor-covenant.org/version/1/4/code-of-conduct.html

## References

### Papers
https://tech.ebu.ch/docs/tech/tech3285.pdf  
https://tech.ebu.ch/docs/tech/tech3306-2009.pdf  
http://www-mmsp.ece.mcgill.ca/Documents/AudioFormats/WAVE/WAVE.html  
https://www.loc.gov/preservation/digital/formats/fdd/fdd000356.shtml  
http://www-mmsp.ece.mcgill.ca/Documents/AudioFormats/WAVE/Docs/riffmci.pdf  
https://sites.google.com/site/musicgapi/technical-documents/wav-file-format  
http://www.neurophys.wisc.edu/auditory/riff-format.txt  
https://sno.phy.queensu.ca/~phil/exiftool/TagNames/RIFF.html#Info

### Software
https://github.com/erikd/libsndfile  
https://gist.github.com/hackNightly/3776503  
https://github.com/chirlu/sox/blob/master/src/wav.c

### Other
https://developercertificate.org/  
https://www.contributor-covenant.org/version/1/4/code-of-conduct.html  
https://google.github.io/styleguide/jsguide.html

### LICENSE
Copyright (c) 2019 Rafael da Silva Rocha.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
