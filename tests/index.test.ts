import assetFingerprint from '../index';

test('Fingerprint is correctly generated', () => {
  expect(new assetFingerprint(
    Buffer.from('7eae28af2208be856f7a119668ae52a49b73725e326dc16579dcc373', 'hex'),
    Buffer.from('', 'hex')
  ).fingerprint()).toEqual('asset1rjklcrnsdzqp65wjgrg55sy9723kw09mlgvlc3');

  expect(new assetFingerprint(
    Buffer.from('7eae28af2208be856f7a119668ae52a49b73725e326dc16579dcc37e', 'hex'),
    Buffer.from('', 'hex')
  ).fingerprint()).toEqual('asset1nl0puwxmhas8fawxp8nx4e2q3wekg969n2auw3');

  expect(new assetFingerprint(
    Buffer.from('1e349c9bdea19fd6c147626a5260bc44b71635f398b67c59881df209', 'hex'),
    Buffer.from('', 'hex')
  ).fingerprint()).toEqual('asset1uyuxku60yqe57nusqzjx38aan3f2wq6s93f6ea');

  expect(new assetFingerprint(
    Buffer.from('7eae28af2208be856f7a119668ae52a49b73725e326dc16579dcc373', 'hex'),
    Buffer.from('504154415445', 'hex')
  ).fingerprint()).toEqual('asset13n25uv0yaf5kus35fm2k86cqy60z58d9xmde92');

  expect(new assetFingerprint(
    Buffer.from('1e349c9bdea19fd6c147626a5260bc44b71635f398b67c59881df209', 'hex'),
    Buffer.from('504154415445', 'hex')
  ).fingerprint()).toEqual('asset1hv4p5tv2a837mzqrst04d0dcptdjmluqvdx9k3');

  expect(new assetFingerprint(
    Buffer.from('1e349c9bdea19fd6c147626a5260bc44b71635f398b67c59881df209', 'hex'),
    Buffer.from('7eae28af2208be856f7a119668ae52a49b73725e326dc16579dcc373', 'hex')
  ).fingerprint()).toEqual('asset1aqrdypg669jgazruv5ah07nuyqe0wxjhe2el6f');

  expect(new assetFingerprint(
    Buffer.from('7eae28af2208be856f7a119668ae52a49b73725e326dc16579dcc373', 'hex'),
    Buffer.from('1e349c9bdea19fd6c147626a5260bc44b71635f398b67c59881df209', 'hex')
  ).fingerprint()).toEqual('asset17jd78wukhtrnmjh3fngzasxm8rck0l2r4hhyyt');

  expect(new assetFingerprint(
    Buffer.from('7eae28af2208be856f7a119668ae52a49b73725e326dc16579dcc373', 'hex'),
    Buffer.from('0000000000000000000000000000000000000000000000000000000000000000', 'hex')
  ).fingerprint()).toEqual('asset1pkpwyknlvul7az0xx8czhl60pyel45rpje4z8w');
});

test('Can generate fingerprint with hash', () => {
  expect(new assetFingerprint().fromHash(
    Buffer.from(
      new assetFingerprint(
        Buffer.from('7eae28af2208be856f7a119668ae52a49b73725e326dc16579dcc373', 'hex'),
        Buffer.from('', 'hex')).hash()
    , 'hex')
    ).fingerprint()
  ).toEqual('asset1rjklcrnsdzqp65wjgrg55sy9723kw09mlgvlc3');

  expect(new assetFingerprint().fromHash(
    Buffer.from(
      new assetFingerprint(
        Buffer.from('7eae28af2208be856f7a119668ae52a49b73725e326dc16579dcc37e', 'hex'),
        Buffer.from('', 'hex')).hash()
    , 'hex')
    ).fingerprint()
  ).toEqual('asset1nl0puwxmhas8fawxp8nx4e2q3wekg969n2auw3');

  expect(new assetFingerprint().fromHash(
    Buffer.from(
      new assetFingerprint(
        Buffer.from('1e349c9bdea19fd6c147626a5260bc44b71635f398b67c59881df209', 'hex'),
        Buffer.from('', 'hex')).hash()
    , 'hex')
    ).fingerprint()
  ).toEqual('asset1uyuxku60yqe57nusqzjx38aan3f2wq6s93f6ea');

  expect(new assetFingerprint().fromHash(
    Buffer.from(
      new assetFingerprint(
        Buffer.from('7eae28af2208be856f7a119668ae52a49b73725e326dc16579dcc373', 'hex'),
        Buffer.from('504154415445', 'hex')).hash()
    , 'hex')
    ).fingerprint()
  ).toEqual('asset13n25uv0yaf5kus35fm2k86cqy60z58d9xmde92');

  expect(new assetFingerprint().fromHash(
    Buffer.from(
      new assetFingerprint(
        Buffer.from('1e349c9bdea19fd6c147626a5260bc44b71635f398b67c59881df209', 'hex'),
        Buffer.from('504154415445', 'hex')).hash()
    , 'hex')
    ).fingerprint()
  ).toEqual('asset1hv4p5tv2a837mzqrst04d0dcptdjmluqvdx9k3');

  expect(new assetFingerprint().fromHash(
    Buffer.from(
      new assetFingerprint(
        Buffer.from('1e349c9bdea19fd6c147626a5260bc44b71635f398b67c59881df209', 'hex'),
        Buffer.from('7eae28af2208be856f7a119668ae52a49b73725e326dc16579dcc373', 'hex')).hash()
    , 'hex')
    ).fingerprint()
  ).toEqual('asset1aqrdypg669jgazruv5ah07nuyqe0wxjhe2el6f');

  expect(new assetFingerprint().fromHash(
    Buffer.from(
      new assetFingerprint(
        Buffer.from('7eae28af2208be856f7a119668ae52a49b73725e326dc16579dcc373', 'hex'),
        Buffer.from('1e349c9bdea19fd6c147626a5260bc44b71635f398b67c59881df209', 'hex')).hash()
    , 'hex')
    ).fingerprint()
  ).toEqual('asset17jd78wukhtrnmjh3fngzasxm8rck0l2r4hhyyt');

  expect(new assetFingerprint().fromHash(
    Buffer.from(
      new assetFingerprint(
        Buffer.from('7eae28af2208be856f7a119668ae52a49b73725e326dc16579dcc373', 'hex'),
        Buffer.from('0000000000000000000000000000000000000000000000000000000000000000', 'hex')).hash()
    , 'hex')
    ).fingerprint()
  ).toEqual('asset1pkpwyknlvul7az0xx8czhl60pyel45rpje4z8w');
});

test('can get hash from bech32', () => {
  expect(new assetFingerprint()
          .fromBech32('asset1rjklcrnsdzqp65wjgrg55sy9723kw09mlgvlc3')
          .hash()
  ).toEqual('1cadfc0e7068801d51d240d14a4085f2a3673cbb');

  expect(new assetFingerprint()
          .fromBech32('asset1nl0puwxmhas8fawxp8nx4e2q3wekg969n2auw3')
          .hash()
  ).toEqual('9fde1e38dbbf6074f5c609e66ae5408bb3641745');

  expect(new assetFingerprint()
          .fromBech32('asset1uyuxku60yqe57nusqzjx38aan3f2wq6s93f6ea')
          .hash()
  ).toEqual('e1386b734f20334f4f9000a4689fbd9c52a70350');
});