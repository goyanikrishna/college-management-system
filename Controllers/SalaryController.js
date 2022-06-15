const { CURSOR_FLAGS } = require("mongodb");
const mongoose = require("mongoose");
const {
  badRequestResponse,
  successResponse,
  errorResponse,
} = require("../middleware/response");
const SALARY = mongoose.model("salarys");

exports.salary = {
  add: async function (req, res) {
    try {
      var dt = new Date();
      var month = dt.getMonth();
      var year = dt.getFullYear();
      daysInMonth = new Date(year, month, 0).getDate();
      const salary = {
        teacherId: req.body.teacherId,
        basicSalary: req.body.basicSalary,
        extraPay: req.body.extraPay,
        totalDays: req.body.totalDays,
        totalSalary:
          (req.body.basicSalary / daysInMonth) * req.body.totalDays +
          req.body.extraPay,
        month: month,
      };
      const isCreated = await SALARY.create(salary);
      if (isCreated) {
        return successResponse(res, {
          message: "Salary created successfully",
        });
      } else {
        return badRequestResponse(res, {
          message: "Failed to create salary",
        });
      }
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
  get: async function (req, res) {
    try {
      let salarys = await SALARY.find({});
      return successResponse(res, {
        data: salarys,
      });
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
  getById: async function (req, res) {
    try {
      let salaryInfo = await SALARY.findOne({
        _id: req.query.id,
      });
      if (!salaryInfo) {
        return badRequestResponse(res, {
          message: "Salary not found",
        });
      }
      return successResponse(res, {
        data: salaryInfo,
      });
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
  update: async function (req, res) {
    try {
      var dt = new Date();
      var month = dt.getMonth();
      var year = dt.getFullYear();
      daysInMonth = new Date(year, month, 0).getDate();
      const salaryInfo = await SALARY.findOne({
        _id: req.body.id,
      });
      if (!salaryInfo) {
        return badRequestResponse(res, {
          message: "Salary not found",
        });
      }
      await SALARY.findOneAndUpdate(
        { _id: salaryInfo._id },
        {
          $set: {
            teacherId: req.body.teacherId,
            basicSalary: req.body.basicSalary,
            extraPay: req.body.extraPay,
            totalDays: req.body.totalDays,
            totalSalary:
              (req.body.basicSalary / daysInMonth) * req.body.totalDays +
              req.body.extraPay,
            month: month,
          },
        }
      );
      return successResponse(res, {
        message: "Salary updated successfully",
      });
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
  delete: async function (req, res) {
    try {
      const salaryInfo = await SALARY.findOne({
        _id: req.query.id,
      });
      if (!salaryInfo) {
        return badRequestResponse(res, {
          message: "Salary not found",
        });
      }
      await SALARY.findByIdAndRemove({
        _id: salaryInfo._id,
      });
      return successResponse(res, {
        message: "Salary deleted successfully",
      });
    } catch (error) {
      return errorResponse(error, req, res);
    }
  },
};
