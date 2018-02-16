const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
  type: {
    default:"Point",
    type: String
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  // geo locale
  geometry: GeoSchema
});

const Ninja = mongoose.model('ninja',NinjaSchema);

module.exports = Ninja;
