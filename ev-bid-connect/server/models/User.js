const mongoose = require("mongoose");

const { Schema, model } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        "Must use a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
  }
  //  Might not need? research more
  // {
  //     toJSON: {
  //       virtuals: true,
  //     },
  //   }
);

// hash password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// compare and validate password for login
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
