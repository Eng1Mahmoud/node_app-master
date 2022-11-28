import { model, Schema } from "mongoose";

const schema = new Schema({
    title: String,
    desc1: String,
    desc2: String,
    quantity: Number,
    price: Number,
    discount: Number,
    imgUrl: String
})

const Product = model('Product', schema);
export default Product;