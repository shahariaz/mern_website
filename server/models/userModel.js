const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "You have to enter your username"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "You have to enter your email"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "You have to enter your password"],
    select: false,
  },
  firstname: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

// Hashing the password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const saltRound = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, saltRound);
  next();
});

// Generating a JWT token
userSchema.methods.generateToken = async function () {
  const token = await jwt.sign(
    { id: this._id.toString(), email: this.email, role: this.role },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
  return token;
};

// Comparing the entered password with the stored hash
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
