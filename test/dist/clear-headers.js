/**
 * Copyright (c) 2019 Rafael da Silva Rocha. MIT License.
 *
 * Test the clearHeaders() method.
 * 
 */

const assert = require("assert");
const fs = require("fs");
const WaveFile = require("../../test/loader.js");
const path = "./test/files/";



describe("Read a file with cbSize then another with no cbSize", function() {
    it("cbSize should be 22",
            function() {
        let wav = new WaveFile();
        wav.fromBuffer(fs.readFileSync(path + "M1F1-int12WE-AFsp.wav"));
        assert.equal(wav.fmt.cbSize, 22);
    });
    it("cbSize should be 0 when reading another file with no cbSize",
            function() {
        let wav = new WaveFile();
        wav.fromBuffer(fs.readFileSync(path + "M1F1-int12WE-AFsp.wav"));
        wav.fromBuffer(fs.readFileSync(path + "16-bit-8kHz-noBext-mono.wav"));
        assert.equal(wav.fmt.cbSize, 0);
    });
});

describe('reset the fmt.validBitsPerSample field', function() {
    it("fmt.validBitsPerSample should be 8", function() {
        let wav = new WaveFile();
        wav.fromBuffer(fs.readFileSync(path + "8bit-mulaw-8kHz-noBext-mono-encoded.wav"));
        assert.deepEqual(wav.fmt.validBitsPerSample, 8);
    });
    it("fmt.validBitsPerSample should be 0", function() {
        let wav = new WaveFile();
        wav.fromBuffer(fs.readFileSync(path + "8bit-mulaw-8kHz-noBext-mono-encoded.wav"));
        wav.fromBuffer(fs.readFileSync(path + "16-bit-8kHz-noBext-mono.wav"));
        assert.deepEqual(wav.fmt.validBitsPerSample, 0);
    });
});

describe('reset the fact chunk', function() {
    it("fact.chunkId should be 'cue '", function() {
        let wav = new WaveFile();
        wav.fromBuffer(fs.readFileSync(path + "8bit-mulaw-8kHz-noBext-mono-encoded.wav"));
        assert.deepEqual(wav.fact.chunkId, 'fact');
    });
    it("fact.chunkId should be ''", function() {
        let wav = new WaveFile();
        wav.fromBuffer(fs.readFileSync(path + "8bit-mulaw-8kHz-noBext-mono-encoded.wav"));
        wav.fromBuffer(fs.readFileSync(path + "16-bit-8kHz-noBext-mono.wav"));
        assert.deepEqual(wav.fact.chunkId, '');
    });
});

describe('reset the cue chunk', function() {
    // cue
    it("cue.chunkId should be 'cue '", function() {
        let wav = new WaveFile();
        wav.fromBuffer(fs.readFileSync(path + "16bit-16kHz-markers-mono.wav"));
        assert.deepEqual(wav.cue.chunkId, 'cue ');
    });
    // no cue
    it("cue.chunkId should be ''", function() {
        let wav = new WaveFile();
        wav.fromBuffer(fs.readFileSync(path + "16bit-16kHz-markers-mono.wav"));
        wav.fromBuffer(fs.readFileSync(path + "16-bit-8kHz-noBext-mono.wav"));
        assert.deepEqual(wav.cue.chunkId, '');
    });
});

describe('reset the smpl chunk', function() {
    // smpl
    it("smpl.chunkId should be 'smpl'", function() {
        let wav = new WaveFile();
        wav.fromBuffer(fs.readFileSync(path + "16bit-8kHz-1c-reaper-region.wav"));
        assert.deepEqual(wav.smpl.chunkId, 'smpl');
    });
    // no smpl
    it("smpl.chunkId should be ''", function() {
        let wav = new WaveFile();
        wav.fromBuffer(fs.readFileSync(path + "16bit-8kHz-1c-reaper-region.wav"));
        wav.fromBuffer(fs.readFileSync(path + "16-bit-8kHz-noBext-mono.wav"));
        assert.deepEqual(wav.smpl.chunkId, '');
    });
});

describe('reset the bext chunk', function() {
    
    it("bext.ChunkId should be 'bext'", function() {
        let wav = new WaveFile();
        wav.fromBuffer(fs.readFileSync(path + "32bitIEEE-16kHz-bext-mono.wav"));
        assert.equal(wav.bext.chunkId, 'bext');
    });
    it("bext.ChunkId should be ''", function() {
        let wav = new WaveFile();
        wav.fromBuffer(fs.readFileSync(path + "32bitIEEE-16kHz-bext-mono.wav"));
        wav.fromBuffer(fs.readFileSync(path + "16-bit-8kHz-noBext-mono.wav"));
        assert.equal(wav.bext.chunkId, '');
    });
});

describe('reset the ds64 chunk', function() {
    
    it("ds64.ChunkId should be 'ds64'", function() {
        let wav = new WaveFile();
        wav.fromBuffer(fs.readFileSync(path + "RF64-16bit-8kHz-stereo-reaper.wav"));
        assert.equal(wav.ds64.chunkId, 'ds64');
    });
    it("ds64.ChunkId should be ''", function() {
        let wav = new WaveFile();
        wav.fromBuffer(fs.readFileSync(path + "RF64-16bit-8kHz-stereo-reaper.wav"));
        wav.fromBuffer(fs.readFileSync(path + "16-bit-8kHz-noBext-mono.wav"));
        assert.equal(wav.ds64.chunkId, '');
    });
});

describe('reset the LIST chunk', function() {
    
    it("LIST len should be > 0'", function() {
        let wav = new WaveFile();
        wav.fromBuffer(fs.readFileSync(path + "M1F1-int12WE-AFsp-NEW-TAGS.wav"));
        assert.equal(wav.LIST.length , 1);
    });
    it("LIST len should be == 0", function() {
        let wav = new WaveFile();
        wav.fromBuffer(fs.readFileSync(path + "M1F1-int12WE-AFsp-NEW-TAGS.wav"));
        wav.fromBuffer(fs.readFileSync(path + "24bit-16kHz-bext-mono.wav"));
        assert.equal(wav.LIST.length , 0);
    });
});

describe('reset the junk chunk', function() {
    
    it("junk.ChunkId should be 'junk'", function() {
        let wav = new WaveFile();
        wav.fromBuffer(fs.readFileSync(path + "16-bit-8kHz-noBext-mono.wav"));
        assert.equal(wav.junk.chunkId, 'junk');
    });
    it("junk.ChunkId should be ''", function() {
        let wav = new WaveFile();
        wav.fromBuffer(fs.readFileSync(path + "16-bit-8kHz-noBext-mono.wav"));
        wav.fromBuffer(fs.readFileSync(path + "smpl_cue.wav"));
        assert.equal(wav.junk.chunkId, '');
    });
});