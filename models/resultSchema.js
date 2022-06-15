"use strict";
var mongoose = require("mongoose");

var ResultSchema = new mongoose.Schema(
  {
    scheduleId: {
      type: Number,
      required: true,
      trim: true,
    },
    passedStudents: {
      type: Number,
      required: true,
      trim: true,
    },
    failedStudents: {
      type: Number,
      required: true,
      trim: true,
    },
    resultDate: {
      type: String,
      required: true,
      trim: true,
    },
    resultGeneratedBy: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: false,
  }
);

ResultSchema.index({ email: 1 });

var result = mongoose.model("results", ResultSchema);
module.exports = result;
