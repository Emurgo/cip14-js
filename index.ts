import blake2b from 'blake2b';
import { bech32 } from 'bech32';

/// note: this function can't be inverted due to the hash
export function assetFingerprint(
  policyId: Uint8Array,
  assetName: Uint8Array,
): string {
  // see https://github.com/cardano-foundation/CIPs/pull/64
  const datapart = blake2b(20).update(new Uint8Array([...policyId, ...assetName])).digest('binary');

  const words = bech32.toWords(datapart);
  return bech32.encode('asset', words);
}
