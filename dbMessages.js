import mongoose from "mongoose";

const chatlaSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

export default mongoose.model("messagecontents", chatlaSchema);
