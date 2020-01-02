/**
 * Copyright (c) 2019 Rafael da Silva Rocha. MIT License.
 *
 * Test the exceptions.
 * 
 */

const fs = require("fs");
var assert = assert || require('assert');
const WaveFile = require("../loader.js");
const path = "./test/files/";

describe('errors', function() {
    
    it("should throw an error if not a RIFF, RIFX or RF64 file", function () {
        assert.throws(function() {
            let wBytes = fs.readFileSync(
                path + "RF64-64-bit-8kHz--mono-bext.wav");
            wBytes[0] = 1;
            let wav = new WaveFile();
            wav.fromBuffer(wBytes);
        }, /Not a supported format./);
    });
    it("should throw an error if a RF64 have no ds64 chunk", function () {
        assert.throws(function() {
            let wBytes = fs.readFileSync(
                path + "RF64-16bit-8kHz-stereo-reaper.wav");
            wBytes[12] = 1;
            let wav = new WaveFile();
            wav.fromBuffer(wBytes);
        }, /Could not find the "ds64" chunk/);
    });
    it('should throw an error if there is no "WAVE" chunk', function () {
        assert.throws(function() {
            let wBytes = fs.readFileSync(
                path + "16-bit-8kHz-noBext-mono.wav");
            wBytes[10] = 0;
            let wav = new WaveFile();
            wav.fromBuffer(wBytes);
        }, /Could not find the "WAVE" format identifier/);
    });
    it("should throw an error if there is no 'fmt ' chunk when " +
        "reading", function () {
        assert.throws(function() {
            let wBytes = fs.readFileSync(
                path + "16-bit-8kHz-noBext-mono.wav");
            wBytes[14] = 0;
            let wav = new WaveFile();
            wav.fromBuffer(wBytes);
        }, /Could not find the "fmt " chunk/);
    });
    it("should throw an error if there is no 'data' chunk", function () {
        assert.throws(function() {
            let wBytes = fs.readFileSync(
                path + "32bit-48kHz-noBext-mono.wav");
            wBytes[36] = 0;
            let wav = new WaveFile();
            wav.fromBuffer(wBytes);
        }, /Could not find the "data" chunk/);
    });
});
