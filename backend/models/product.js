import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timeStamps: true,
  }
); // 다른 폴더에 작성해도 되지만, 작거니와 재사용하지않는 스키마라서 이곳에 그대로 작성

const productSchema = mongoose.Schema(
  {
    user: {
      // 어느 유저가 선택한 상품인지 알아야하기 때문에 연결되어 있다.
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timeStamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
