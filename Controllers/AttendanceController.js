const { date } = require("joi");
const mongoose = require("mongoose");
const {
  badRequestResponse,
  successResponse,
  errorResponse,
} = require("../middleware/response");
const ATTENDANCE = mongoose.model("attendances");

exports.attendance = {
  add: async function (req, res) {
    try {
      const attendance = {
        studentId: req.body.studentId,
        teacherId: req.body.teacherId,
        isPresent: req.body.isPresent,
        remark: req.body.remark,
        date: new Date().valueOf(),
        attendanceTakenBy: req.body.attendanceTakenBy,
        attendanceType: req.body.attendanceType,
      };
      const isCreated = await ATTENDANCE.create(attendance);
      if (isCreated) {
        return successResponse(res, {
          message: "Attendance created successfully",
        });
      } else {
        return badRequestResponse(res, {
          message: "Failed to create attendance",
        });
      }
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
  get: async function (req, res) {
    try {
      let attendaces = await ATTENDANCE.find({});
      return successResponse(res, {
        data: attendaces,
      });
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
  getById: async function (req, res) {
    try {
      let attendaceInfo = await ATTENDANCE.findOne({
        _id: req.query.id,
      });
      if (!attendaceInfo) {
        return badRequestResponse(res, {
          message: "Attendance not found",
        });
      }
      return successResponse(res, {
        data: attendaceInfo,
      });
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
  update: async function (req, res) {
    try {
      const attendanceInfo = await ATTENDANCE.findOne({
        _id: req.body.id,
      });
      if (!attendanceInfo) {
        return badRequestResponse(res, {
          message: "Attendance not found",
        });
      }
      await ATTENDANCE.findOneAndUpdate(
        { _id: attendanceInfo._id },
        {
          $set: {
            studentId: req.body.studentId,
            teacherId: req.body.teacherId,
            isPresent: req.body.isPresent,
            remark: req.body.remark,
            date: new Date().valueOf(),
            attendanceTakenBy: req.body.attendanceTakenBy,
            attendanceType: req.body.attendanceType,
          },
        }
      );
      return successResponse(res, {
        message: "Attendance updated successfully",
      });
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
  delete: async function (req, res) {
    try {
      const attendaceInfo = await ATTENDANCE.findOne({
        _id: req.query.id,
      });
      if (!attendaceInfo) {
        return badRequestResponse(res, {
          message: "Attendance not found",
        });
      }
      await ATTENDANCE.findByIdAndRemove({
        _id: attendaceInfo._id,
      });
      return successResponse(res, {
        message: "Attendance deleted successfully",
      });
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
};
