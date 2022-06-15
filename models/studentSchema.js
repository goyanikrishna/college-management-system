"use strict";
var mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

var StudentSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      trim: true,
    },
    lastname: {
      type: String,
      trim: true,
    },
    middlename: {
      type: String,
      trim: true,
    },
    idnumber: {
      type: Number,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    pincode: {
      type: Number,
      trim: true,
    },
    mobilenumber: {
      type: Number,
      trim: true,
    },
    aadharnumber: {
      type: Number,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    },
    password: {
      type: String,
      trim: true,
    },
    forgetPasswordOtp: {
      type: Number,
    },
    forgetPasswordOtpExpireTime: {
      type: Date,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    createdBy:{
      type: String
    },
    accountActivationCode: {
      type: Number,
      default: "",
    },
  },
  {
    timestamps: false,
  }
);

StudentSchema.index({ email: 1 });

StudentSchema.pre("save", function (next) {
  var student = this;
  if (!student.isModified("password")) return next();
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(student.password, salt, function (err, hash) {
      if (err) return next(err);
      student.password = hash;
      next();
    });
  });
});

StudentSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

var student = mongoose.model("students", StudentSchema);
module.exports = student;
