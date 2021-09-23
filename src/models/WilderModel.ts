import mongoose from 'mongoose';

const { Schema } = mongoose;
const WilderSchema = new Schema({
  name: { type: String, unique: true },
  city: String,
  skills: [{ title: String, votes: Number }],
});
const WilderModel = mongoose.model('wilder', WilderSchema);

export default WilderModel;
