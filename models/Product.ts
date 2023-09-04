import mongoose, { Schema, Model, model } from 'mongoose';

import { IProduct } from '../interfaces';

const ProductSchema: Schema = new Schema({
  description: { type: String, required: true },
  images: [{ type: String }],
  inStock: { type: Number, required: true, default: 0 },
  price: { type: Number, required: true },
  sizes: [{ 
    type: String,
    enum: {
      values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
      message: '{VALUE} no es una talla válida'
    }
  }],
  slug: { type: String, required: true, unique: true },
  tags: [{ type: String }],
  title: { type: String, required: true },
  type: { 
    type: String,
    enum: {
      values: ['shirts', 'pants', 'hoodies', 'hats'],
      message: '{VALUE} no es un tipo válido'
    }
  },
  gender: { 
    type: String,
    enum: {
      values: ['men', 'women', 'kid', 'unisex'],
      message: '{VALUE} no es un tipo válido'
    }
  },
}, {
  timestamps: true,
});

const Product: Model<IProduct> = mongoose.models.Product || model('Product', ProductSchema);

export default Product;
