const { date } = require("joi");
const mongoose = require("mongoose");
const {
  badRequestResponse,
  successResponse,
  errorResponse,
} = require("../middleware/response");
const RESULT = mongoose.model("results");

exports.result = {
  add: async function (req, res) {
    try {
      const result = {
        scheduleId: req.body.scheduleId,
        passedStudents: req.body.passedStudents,
        failedStudents: req.body.failedStudents,
        resultDate: req.body.resultDate,
        resultGeneratedBy: req.body.resultGeneratedBy,
      };
      const isCreated = await RESULT.create(result);
      if (isCreated) {
        return successResponse(res, {
          message: "Result created successfully",
        });
      } else {
        return badRequestResponse(res, {
          message: "Failed to create result",
        });
      }
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
  get: async function (req, res) {
    try {
      let results = await RESULT.find({});
      return successResponse(res, {
        data: results,
      });
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
  getById: async function (req, res) {
    try {
      let resultInfo = await RESULT.findOne({
        _id: req.query.id,
      });
      if (!resultInfo) {
        return badRequestResponse(res, {
          message: "Result not found",
        });
      }
      return successResponse(res, {
        data: resultInfo,
      });
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
  update: async function (req, res) {
    try {
      const resultInfo = await RESULT.findOne({
        _id: req.body.id,
      });
      if (!resultInfo) {
        return badRequestResponse(res, {
          message: "Result not found",
        });
      }
      await RESULT.findOneAndUpdate(
        { _id: resultInfo._id },
        {
          $set: {
            scheduleId: req.body.scheduleId,
            passedStudents: req.body.passedStudents,
            failedStudents: req.body.failedStudents,
            resultDate: req.body.resultDate,
            resultGeneratedBy: req.body.resultGeneratedBy,
          },
        }
      );
      return successResponse(res, {
        message: "Result updated successfully",
      });
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
  delete: async function (req, res) {
    try {
      const resultInfo = await RESULT.findOne({
        _id: req.query.id,
      });
      if (!resultInfo) {
        return badRequestResponse(res, {
          message: "Result not found",
        });
      }
      await RESULT.findByIdAndRemove({
        _id: resultInfo._id,
      });
      return successResponse(res, {
        message: "Result deleted successfully",
      });
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
};
