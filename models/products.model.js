import { Schema, model, models } from "mongoose";
const ProductSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    photo: {
      type: Array(String),
      required: [true, "Image is required."],
    },
    tags: {
      type: [String],
    },
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
    discount: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    details:{
        type :String
    },
    categories:{
        type:Aray(String)
    },
    availablePieces:{
        type: Number
    }
  },
  { timestamps: true }
);

const Product = models.Product || model("Product", ProductSchema);

export default Product;
