const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const ngoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide NGO name"],
      maxlength: 100,
      minlength: 3,
    },
    location: { type: String, required: true, index: true }, 
    causeArea: {
      type: String,
      required: [true, "Please provide cause area"],
      maxlength: 100,
    },
    vision: {
      type: String,
      required: [true, "Please provide NGO vision"],
      maxlength: 500,
    },
    mission: {
      type: String,
      required: [true, "Please provide NGO mission"],
      maxlength: 500,
    },
    cause: { type: String, required: true, index: true },
    contactPerson: {
      type: String,
      required: [true, "Please provide contact person's name"],
      maxlength: 50,
      minlength: 3,
    },
    mobileNumber: {
      type: String,
      required: [true, "Please provide mobile number"],
      match: [/^[0-9]{10}$/, "Please provide a valid 10-digit mobile number"],
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
      unique: true,
    },
    updated12A: {
      type: Boolean,
      default: false,
    },
    updated80G: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      required: [true, "Please provide address"],
      maxlength: 500,
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["ngo", "admin"],
      default: "ngo",
    },
    verificationStatus: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

// Password hashing middleware
ngoSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const NGO = mongoose.model("NGO", ngoSchema);
module.exports = NGO;