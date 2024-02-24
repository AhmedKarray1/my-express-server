const mongoose = require("mongoose");
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "a tower must have a name"],
    unique: true,
    trim: true,
  },

  duration: {
    type: Number,
    require: [true, " tower must have a duration"],
  },
  maxGroupSize: {
    type: Number,
    required: [true, "a tower must have a maxGroupSize"],
  },
  difficulty: {
    type: String,
    required: [true, "a tour must have a difficulty"],
    trim: true,
  },
  ratingAverage: { type: Number, default: 4.5 },
  ratingQuantity: {
    type: Number,
    default: 0,
  },
  price: { type: Number, required: [true, "a tower must have a price"] },

  priceDiscount: { type: Number },

  summary: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    required: [true, "a tower must have a description"],
  },
  imageCover: {
    type: String,
    required: [true, "a tower must have a cover image"],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDtaes: [Date],
});
const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;
