# CHANGELOG

## v1.1.1 - 2020-01-02
Fix: *loadSamples* should default to *true* during object creation

## v1.1.0 - 2020-01-02
Allow loading a file during object creation. Now you instead of:
```javascript
let wav = new WaveFileReader();
wav.fromBuffer(someFile);
```
you can also:
```javascript
let wav = new WaveFileReader(someFile);
```
Both methods support the *loadSamples* optional boolean param.
By default *loadSamples* is set to true (file samples should be loaded);
if set to false, the samples in the file are not loaded.
