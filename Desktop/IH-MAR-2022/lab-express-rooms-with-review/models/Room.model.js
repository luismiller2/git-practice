const { Schema, model } = require("mongoose");

const roomSchema = new Schema({
    name: { type: String },
    description: { type: String },
    imageUrl: { 
      type: String,
      default: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guest-bedroom-1-1576617523.jpg",
    }, 
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }]
  });

  const Room = model("Room", roomSchema);

module.exports = Room;