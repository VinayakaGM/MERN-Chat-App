import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      reuired: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      reuired: true,
    },
    text: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
