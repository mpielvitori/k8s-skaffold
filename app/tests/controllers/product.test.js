/* eslint-disable import/extensions */
// TODO not working with import -> https://github.com/facebook/jest/issues/9430
// import * as productController from '../../src/controllers/product.js';

describe('Product test', () => {
  // test.skip('simple test', async () => {
  //   const send = jest.fn();
  //   const res = {
  //     send,
  //   };
  //   await productController.test({}, res);
  //   expect(send.mock.calls).toHaveLength(1);
  //   expect(send.mock.calls[0][0]).toBe('Hello!');
  // });
  test('fake test', async () => {
    expect(1).toBe(1);
  });
});
