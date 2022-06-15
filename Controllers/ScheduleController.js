const { date } = require("joi");
const mongoose = require("mongoose");
const {
  badRequestResponse,
  successResponse,
  errorResponse,
} = require("../middleware/response");
const SCHEDULE = mongoose.model("schedules");

exports.schedule = {
  add: async function (req, res) {
    try {
      const schedule = {
        divisionId: req.body.divisionId,
        subjectName: req.body.subjectName,
        fromTime: req.body.fromTime,
        totime: req.body.totime,
        createdBy: req.body.createdBy,
        examDate: req.body.examDate,
      };
      const isCreated = await SCHEDULE.create(schedule);
      if (isCreated) {
        return successResponse(res, {
          message: "Schedule created successfully",
        });
      } else {
        return badRequestResponse(res, {
          message: "Failed to create schedule",
        });
      }
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
  get: async function (req, res) {
    try {
      let schedules = await SCHEDULE.find({});
      return successResponse(res, {
        data: schedules,
      });
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
  getById: async function (req, res) {
    try {
      let scheduleInfo = await SCHEDULE.findOne({
        _id: req.query.id,
      });
      if (!scheduleInfo) {
        return badRequestResponse(res, {
          message: "Schedule not found",
        });
      }
      return successResponse(res, {
        data: scheduleInfo,
      });
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
  update: async function (req, res) {
    try {
      const scheduleInfo = await SCHEDULE.findOne({
        _id: req.body.id,
      });
      if (!scheduleInfo) {
        return badRequestResponse(res, {
          message: "Schedule not found",
        });
      }
      await SCHEDULE.findOneAndUpdate(
        { _id: scheduleInfo._id },
        {
          $set: {
            divisionId: req.body.divisionId,
            subjectName: req.body.subjectName,
            fromTime: req.body.fromTime,
            totime: req.body.totime,
            createdBy: req.body.createdBy,
            examDate: req.body.examDate,
          },
        }
      );
      return successResponse(res, {
        message: "Schedule updated successfully",
      });
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
  delete: async function (req, res) {
    try {
      const scheduleInfo = await SCHEDULE.findOne({
        _id: req.query.id,
      });
      if (!scheduleInfo) {
        return badRequestResponse(res, {
          message: "Schedule not found",
        });
      }
      await SCHEDULE.findByIdAndRemove({
        _id: scheduleInfo._id,
      });
      return successResponse(res, {
        message: "Schedule deleted successfully",
      });
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
};
