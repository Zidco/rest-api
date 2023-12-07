const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    clanRank: {
      type: String,
    },
    clanXp: {
      type: Number,
    },
    clanKills: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('member', memberSchema);
