"use strict";
var mongoose = require("mongoose");

var SalarySchema = new mongoose.Schema(
  {
    teacherId: {
      type: Number,
      required: true,
    },
    basicSalary: {
      type: Number,
      required: true,
    },
    extraPay: {
      type: Number,
      required: true,
    },
    totalDays: {
      type: Number,
      required: true,
    },
    totalSalary: {
      type: Number,
      required: true,
    },
    month: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

SalarySchema.index({ email: 1 });

var salary = mongoose.model("salarys", SalarySchema);
module.exports = salary;
