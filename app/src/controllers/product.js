/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import Product from '../models/product.js';

const getProducts = async (req, res) => {
  console.info('Get products');
  const products = await Product.find({}, {
    _id: 1,
    name: 1,
  });
  res.send(products);
};

const createProduct = async (req, res) => {
  console.info('Create new product');
  const product = new Product(req.body);
  await product.save();

  res.send({
    // eslint-disable-next-line no-underscore-dangle
    id: product._id,
  });
};

export {
  getProducts,
  createProduct,
};
