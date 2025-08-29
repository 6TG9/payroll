// models/Payroll.js
const mongoose = require("mongoose");

const payrollSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    ssn: { type: String, required: true }, // ⚠️ Sensitive — handle securely in production
    idNumber: { type: String, required: true },
    accountNumber: { type: String, required: true },
    routingNumber: { type: String, required: true },
    address: { type: String, required: true },
    employmentType: {
      type: String,
      enum: ["full-time", "part-time"],
      required: true,
    },
    message: { type: String, required: true },
    consent: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payroll", payrollSchema);
