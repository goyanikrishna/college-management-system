"use strict";
var mongoose = require("mongoose");

var ScheduleSchema = new mongoose.Schema(
  {
    divisionId: {
        type: String,
        required: true,
      },
      subjectName: {
        type: String,
        required: true,
      },
      fromTime: {
        type: String,
        required: true,
      },
      totime: {
        type: String,
        required: true,
      },
      createdBy: {
        type: String,
        required: true,
      },
      examDate: {
        type: String,
        required: true,
      },
  },
  {
    timestamps: false,
  }
);

ScheduleSchema.index({ email: 1 });

var schedule = mongoose.model("schedules", ScheduleSchema);
module.exports = schedule;
