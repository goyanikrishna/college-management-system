"use strict";
var mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

var AdminSchema = new mongoose.Schema(
  {
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
    createdBy: {
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

AdminSchema.index({ email: 1 });

AdminSchema.pre("save", function (next) {
  var admin = this;
  if (!admin.isModified("password")) return next();
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(admin.password, salt, function (err, hash) {
      if (err) return next(err);
      admin.password = hash;
      next();
    });
  });
});

AdminSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

var admin = mongoose.model("admins", AdminSchema);
module.exports = admin;
