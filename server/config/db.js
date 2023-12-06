const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.DB_URL);
    console.log("Mongodb Connection Success");
  } catch (error) {
    console.log("Mongodb Connection Error", error);
    process.exit(1);
  }
};
module.exports = connectDB;
