import { mongoose } from "./db.config";
import { Schema } from "mongoose";
import { Guest } from "../../../entities/guest/guest";

const GuestSchema = new Schema<Guest>({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  confirm: {
    type: Boolean,
    required: true,
  },
});

const GuestModel = mongoose.model("GuestModel", GuestSchema);

export { GuestModel };
