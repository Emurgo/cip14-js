# CIP14-JS

On the Cardano blockchain, native assets are uniquely identified by both their _policy id_ and _asset name_. Neither the policy id nor the asset name are intended to be human-readable data. [CIP14](https://github.com/cardano-foundation/CIPs/pull/64) introduces an _asset fingerprint_ which is a short(er) and human-readable identifier for assets that user can recognize and refer to when talking about assets.

More specifically, CIP14 defines a user-facing asset fingerprint as a bech32-encoded blake2b-160 digest of the concatenation of the policy id and the asset name.

This package is a Typescript implementation of CIP14

## Install

``` sh
npm i @emurgo/cip14-js --save
```

## Usage

```js
const AssetFingerprint = require('@emurgo/cip14-js');

// initialize class with policyId, assetName
const assetFingerprint = AssetFingerprint.fromParts(
  Buffer.from('1e349c9bdea19fd6c147626a5260bc44b71635f398b67c59881df209', 'hex'),
  Buffer.from('504154415445', 'hex'),
);

const fingerprintHash = assetFingerprint.hash();
const bech32Fingerprint = assetFingerprint.fingerprint();
```

```js
// initialize class with bech32
const assetFingerprint = AssetFingerprint.fromBech32('asset1rjklcrnsdzqp65wjgrg55sy9723kw09mlgvlc3');

const fingerprintHash = assetFingerprint.hash();
const prefix = assetFingerprint.prefix();
```
