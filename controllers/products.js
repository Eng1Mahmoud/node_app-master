import Product from "../models/productModel.js"
import data from '../data/products.js';
import mongoose from 'mongoose';

export const getProducts = async (req, res) => {
  try {
    const insertedProducts = await Product.insertMany(data);
    res.status(200).json(insertedProducts);
  } catch (error) {
    res.send({ message: error });
  }
};

export const getSingleProduct = async (req, res) => {
  const { id: _id } = req.params;
  try {
    if (mongoose.Types.ObjectId.isValid(_id)) {
      const findProduct = await Product.findById(_id);
      res.status(200).json(findProduct);
    } else {
      res.status(400).json({ message: 'Invalid id' });
    }
  } catch (error) {
    res.status(404).json({ message: 'This product not found' });
  }
};
