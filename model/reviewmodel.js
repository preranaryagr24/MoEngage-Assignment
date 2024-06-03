import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    uid: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    brewerId: String,
    review: String,
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);