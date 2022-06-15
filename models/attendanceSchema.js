"use strict";
var mongoose = require("mongoose");

var AttendanceSchema = new mongoose.Schema(
  {
    studentId: {
      type: Number,
      required: true,
      trim: true,
    },
    teacherId: {
      type: Number,
      required: true,
      trim: true,
    },
    isPresent: {
      type: Boolean,
      required: true,
      trim: true,
    },
    remark: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      default: new Date().valueOf(),
    },
    attendanceTakenBy: {
      type: String,
      required: true,
      trim: true,
    },
    attendanceType: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: false,
  }
);

AttendanceSchema.index({ email: 1 });

var attendance = mongoose.model("attendances", AttendanceSchema);
module.exports = attendance;
