// Type definitions for wavefile-reader 1.1
// Project: https://github.com/rochars/wavefile-reader
// Definitions by: Rafael da Silva Rocha <https://github.com/rochars>
// Definitions: https://github.com/rochars/wavefile-reader

export = wavefileReader;

declare module wavefileReader {

  class WaveFileReader {
    
    /**
     * @param {?Uint8Array=} bytes A wave file buffer.
     * @param {boolean=} loadSamples True if the samples should be loaded.
     * @throws {Error} If no 'RIFF' chunk is found.
     * @throws {Error} If no 'fmt ' chunk is found.
     * @throws {Error} If no 'data' chunk is found.
     */
    constructor(bytes?: Uint8Array, loadSamples?:boolean);

    /**
     * The container identifier.
     * 'RIFF', 'RIFX' and 'RF64' are supported.
     * @type {string}
     */
    container: string;
    /**
     * @type {number}
     */
    chunkSize: number;
    /**
     * The format.
     * Always 'WAVE'.
     * @type {string}
     */
    format: string;
    /**
     * The data of the 'fmt' chunk.
     * @type {!Object<string, *>}
     */
    fmt: object;
    /**
     * The data of the 'fact' chunk.
     * @type {!Object<string, *>}
     */
    fact: object;
    /**
     * The data of the 'cue ' chunk.
     * @type {!Object<string, *>}
     */
    cue: object;
    /**
     * The data of the 'smpl' chunk.
     * @type {!Object<string, *>}
     */
    smpl: object;
    /**
     * The data of the 'bext' chunk.
     * @type {!Object<string, *>}
     */
    bext: object;
    /**
     * The data of the 'ds64' chunk.
     * Used only with RF64 files.
     * @type {!Object<string, *>}
     */
    ds64: object;
    /**
     * The data of the 'data' chunk.
     * @type {!Object<string, *>}
     */
    data: object;
    /**
     * The data of the 'LIST' chunks.
     * Each item in this list look like this:
     *  {
     *    chunkId: '',
     *    chunkSize: 0,
     *    format: '',
     *    subChunks: []
     *   }
     * @type {!Array<!Object>}
     */
    LIST: object[];
    /**
     * The data of the 'junk' chunk.
     * @type {!Object<string, *>}
     */
    junk: object;

    /**
     * Set up the WaveFileReader object from a byte buffer.
     * @param {!Uint8Array} bytes The buffer.
     * @param {boolean=} samples True if the samples should be loaded.
     * @throws {Error} If container is not RIFF, RIFX or RF64.
     * @throws {Error} If no 'fmt ' chunk is found.
     * @throws {Error} If no 'data' chunk is found.
     */
    fromBuffer(bytes: Uint8Array, samples?:boolean): void;
  }
}
