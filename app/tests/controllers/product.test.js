/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-extraneous-dependencies
import { jest } from '@jest/globals';
import * as productController from '../../src/controllers/product.js';

describe('Product test', () => {
  test('simple test', async () => {
    const send = jest.fn();
    const res = {
      send,
    };
    await productController.testMethod({}, res);
    expect(send.mock.calls).toHaveLength(1);
    expect(send.mock.calls[0][0]).toBe('SUCCESS');
  });
});
