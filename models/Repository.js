import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, default: "" },
  homepage: { type: String, default: "" },
  language: { type: String, default: "" },
  stargazers_count: { type: Number, required: true },
  forks_count: { type: Number, required: true }
});

export default mongoose.model('Repository', schema);
