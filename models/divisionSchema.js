"use strict";
var mongoose = require("mongoose");

var DivisionSchema = new mongoose.Schema(
  {
    class: {
      type: String,
      required: true,
      trim: true,
    },
    section: {
      type: String,
      required: true,
      trim: true,
    },
    createdBy: {
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    timestamps: false,
  }
);

DivisionSchema.index({ email: 1 });

var division = mongoose.model("divisions", DivisionSchema);
module.exports = division;
