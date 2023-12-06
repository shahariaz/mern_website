const catchAsync = require("../utils/catchAsync");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/ErrorHandler");

//*------------------------------------
//*     Auth Controller
//*------------------------------------

//*------------------------------------
//*    Register Logic
//*------------------------------------
exports.authRegister = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  const existUser = await User.findOne({ email });

  if (existUser) {
    throw new ErrorHandler(400, "Email already registered");
  }

  const user = await User.create(req.body);

  res.status(201).json({
    status: "success",
    token: await user.generateToken(),
    data: user,
    id: user._id.toString(),
  });
});

//*------------------------------------
//*     Login Logic
//*------------------------------------
exports.authLogin = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ErrorHandler(400, "Please provide email and password");
  }

  const userExist = await User.findOne({ email }).select("+password");

  if (!userExist) {
    throw new ErrorHandler(400, "Invalid Credentials");
  }

  const isPasswordValid = await userExist.comparePassword(password);

  if (!isPasswordValid) {
    throw new ErrorHandler(401, "Invalid Credentials");
  }

  res.status(200).json({
    status: "success",
    token: await userExist.generateToken(),
    id: userExist._id.toString(),
  });
});
