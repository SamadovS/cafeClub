const mongoose = require("mongoose");
const { board_id_enums, boArticle_status_enums } = require("../lib/config");
const Schema = mongoose.Schema;

const boArticleSchema = new mongoose.Schema(
  {
    art_subject: {
      type: String,
      required: true,
    },
    art_content: {
      type: String,
      required: true,
    },
    art_image: {
      type: String,
      required: false,
    },
    bo_id: {
      type: String,
      required: true,
      enum: {
        values: board_id_enums,
        message: "{VALUES} is not among permitted values",
      },
    },
    art_status: {
      type: String,
      required: false,
      default: "active",
      enum: {
        values: boArticle_status_enums,
        message: "{VALUES} is not among permitted values",
      },
    },
    art_likes: {
      type: Number,
      required: false,
      default: 0,
    },
    art_views: {
      type: Number,
      required: false,
      default: 0,
    },
    mb_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Member",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BoArticle", boArticleSchema);
