const { date } = require("joi");
const mongoose = require("mongoose");
const {
  badRequestResponse,
  successResponse,
  errorResponse,
} = require("../middleware/response");
const DIVISION = mongoose.model("divisions");

exports.division = {
  add: async function (req, res) {
    try {
      const division = {
        class: req.body.class,
        section: req.body.section,
        createdBy: req.body.createdBy,
      };
      const isCreated = await DIVISION.create(division);
      if (isCreated) {
        return successResponse(res, {
          message: "Division created successfully",
        });
      } else {
        return badRequestResponse(res, {
          message: "Failed to create division",
        });
      }
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
  get: async function (req, res) {
    try {
      let divisions = await DIVISION.find({});
      return successResponse(res, {
        data: divisions,
      });
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
  getById: async function (req, res) {
    try {
      let divisionInfo = await DIVISION.findOne({
        _id: req.query.id,
      });
      if (!divisionInfo) {
        return badRequestResponse(res, {
          message: "Division not found",
        });
      }
      return successResponse(res, {
        data: divisionInfo,
      });
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
  update: async function (req, res) {
    try {
      const divisionInfo = await DIVISION.findOne({
        _id: req.body.id,
      });
      if (!divisionInfo) {
        return badRequestResponse(res, {
          message: "Division not found",
        });
      }
      await DIVISION.findOneAndUpdate(
        { _id: divisionInfo._id },
        {
          $set: {
            class: req.body.class,
            section: req.body.section,
            createdBy: req.body.createdBy,
          },
        }
      );
      return successResponse(res, {
        message: "Division updated successfully",
      });
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
  delete: async function (req, res) {
    try {
      const divisionInfo = await DIVISION.findOne({
        _id: req.query.id,
      });
      if (!divisionInfo) {
        return badRequestResponse(res, {
          message: "Division not found",
        });
      }
      await DIVISION.findByIdAndRemove({
        _id: divisionInfo._id,
      });
      return successResponse(res, {
        message: "Division deleted successfully",
      });
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
};
