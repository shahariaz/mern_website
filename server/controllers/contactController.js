const Contact = require("../models/contactModel");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsync = require("../utils/catchAsync");

exports.contactHandler = catchAsync(async (req, res, next) => {
  const { username, email, message } = req.body;
  const contact = new Contact({ username, email, message });
  await contact.save();
  res.status(201).json({
    status: "success",
    data: contact,
  });
});
