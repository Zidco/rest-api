const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    avatar: {
      type: String,
    },
    combatLvl: {
      type: Number,
    },
    totalRank: {
      type: Number,
    },
    totalXp: {
      type: Number,
    },
    totalLvl: {
      type: Number,
    },
    quests: {
      complete: Number,
      started: Number,
      not_started: Number,
    },
    skills: {
      overall: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      attack: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      defence: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      strength: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      constitution: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      ranged: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      prayer: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      magic: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      cooking: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      woodcutting: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      fletching: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      fishing: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      firemaking: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      crafting: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      smithing: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      mining: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      herblore: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      agility: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      thieving: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      slayer: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      farming: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      runecrafting: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      hunter: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      construction: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      summoning: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      dungeoneering: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      divination: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      invention: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      archaeology: {
        rank: Number,
        level: Number,
        experience: Number,
      },
      necromancy: {
        rank: Number,
        level: Number,
        experience: Number,
      },
    },
    history: {},
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
