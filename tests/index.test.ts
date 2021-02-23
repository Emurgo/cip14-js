import { assetFingerprint, } from '../index';

test('Fingerprint is correctly generated', () => {
  expect(assetFingerprint(
    Buffer.from('7eae28af2208be856f7a119668ae52a49b73725e326dc16579dcc373', 'hex'),
    Buffer.from('', 'hex')
  )).toEqual('asset1rjklcrnsdzqp65wjgrg55sy9723kw09mlgvlc3');

  expect(assetFingerprint(
    Buffer.from('7eae28af2208be856f7a119668ae52a49b73725e326dc16579dcc37e', 'hex'),
    Buffer.from('', 'hex')
  )).toEqual('asset1nl0puwxmhas8fawxp8nx4e2q3wekg969n2auw3');

  expect(assetFingerprint(
    Buffer.from('1e349c9bdea19fd6c147626a5260bc44b71635f398b67c59881df209', 'hex'),
    Buffer.from('', 'hex')
  )).toEqual('asset1uyuxku60yqe57nusqzjx38aan3f2wq6s93f6ea');

  expect(assetFingerprint(
    Buffer.from('7eae28af2208be856f7a119668ae52a49b73725e326dc16579dcc373', 'hex'),
    Buffer.from('504154415445', 'hex')
  )).toEqual('asset13n25uv0yaf5kus35fm2k86cqy60z58d9xmde92');

  expect(assetFingerprint(
    Buffer.from('1e349c9bdea19fd6c147626a5260bc44b71635f398b67c59881df209', 'hex'),
    Buffer.from('504154415445', 'hex')
  )).toEqual('asset1hv4p5tv2a837mzqrst04d0dcptdjmluqvdx9k3');

  expect(assetFingerprint(
    Buffer.from('1e349c9bdea19fd6c147626a5260bc44b71635f398b67c59881df209', 'hex'),
    Buffer.from('7eae28af2208be856f7a119668ae52a49b73725e326dc16579dcc373', 'hex')
  )).toEqual('asset1aqrdypg669jgazruv5ah07nuyqe0wxjhe2el6f');

  expect(assetFingerprint(
    Buffer.from('7eae28af2208be856f7a119668ae52a49b73725e326dc16579dcc373', 'hex'),
    Buffer.from('1e349c9bdea19fd6c147626a5260bc44b71635f398b67c59881df209', 'hex')
  )).toEqual('asset17jd78wukhtrnmjh3fngzasxm8rck0l2r4hhyyt');

  expect(assetFingerprint(
    Buffer.from('7eae28af2208be856f7a119668ae52a49b73725e326dc16579dcc373', 'hex'),
    Buffer.from('0000000000000000000000000000000000000000000000000000000000000000', 'hex')
  )).toEqual('asset1pkpwyknlvul7az0xx8czhl60pyel45rpje4z8w');
});
