const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  education: {
    type: String,
  },
  experience: {
    type: String,
  },
  skills: {
    type: [String],
  },
  bio: {
    type: String,
  },
});

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  profile: {
    type: ProfileSchema,
    default: {},
  },
});

module.exports = mongoose.model('User', UserSchema);
const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  education: { type: String },
  experience: { type: String },
  skills: { type: [String] },
  bio: { type: String },
});

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  profile: { type: ProfileSchema, default: {} },
  template: { type: String, default: 'default' },
});

module.exports = mongoose.model('User', UserSchema);
const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const ProfileSchema = new mongoose.Schema({
  education: { type: String },
  experience: { type: String },
  skills: { type: [String] },
  bio: { type: String },
  sections: [SectionSchema],
});

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  profile: { type: ProfileSchema, default: {} },
  template: { type: String, default: 'default' },
});

module.exports = mongoose.model('User', UserSchema);
