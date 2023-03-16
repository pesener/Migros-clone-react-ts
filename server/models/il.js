import mongoose from "mongoose";

const ilSchema = mongoose.Schema({
  id: {
    type: String,
  },
  il: {
    type: String,
  },
});

export default mongoose.model("Il", ilSchema);
