import blake2b from "blake2b";
import { bech32 } from "bech32";

/// note: this function can't be inverted due to the hash

const DATA = "asset";

export default class assetFingerprint {
  hashBuf: Uint8Array;

  constructor(policyId: Uint8Array = new Uint8Array(32), assetName: Uint8Array = new Uint8Array(0)) {
    // see https://github.com/cardano-foundation/CIPs/pull/64
    this.hashBuf = blake2b(20)
      .update(new Uint8Array([...policyId, ...assetName]))
      .digest("binary");
  }

  fromHash(hash: Buffer): this {
    this.hashBuf = hash
    return this;
  }

  fromBech32(fingerprint: string): this {
    const { prefix, words } = bech32.decode(fingerprint);
    if(prefix !== DATA){
      throw new Error("Invalid asset fingerprint");
    }
    
    this.hashBuf = Buffer.from(bech32.fromWords(words));
    return this;
  }

  fingerprint(): string {
    const words = bech32.toWords(this.hashBuf);
    return bech32.encode(DATA, words);
  }

  hash(): string {
    return Buffer.from(this.hashBuf).toString('hex');
  }

  prefix(): string {
    return DATA;
  }
}
