import mongoose from "mongoose";

const mahalleSchema = mongoose.Schema({
  ilce_id: {
    type: Number,
  },
  mahalle: {
    type: String,
  },
});

export default mongoose.model("Mahalle", mahalleSchema);
