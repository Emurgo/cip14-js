# CIP14-JS

On the Cardano blockchain, native assets are uniquely identified by both their _policy id_ and _asset name_. Neither the policy id nor the asset name are intended to be human-readable data. [CIP14](https://github.com/cardano-foundation/CIPs/pull/64) introduces an _asset fingerprint_ which is a short(er) and human-readable identifier for assets that user can recognize and refer to when talking about assets.

More specifically, CIP14 defines a user-facing asset fingerprint as a bech32-encoded blake2b-160 digest of the concatenation of the policy id and the asset name.

This package is a Typescript implementation of CIP14
