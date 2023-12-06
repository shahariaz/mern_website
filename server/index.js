require("dotenv").config({ path: "./config/.env" });
const app = require("./app");
const connectDB = require("./config/db");
app.listen(process.env.PORT || 8080, () => {
  console.log("Server is running on port 8080");
  connectDB();
});
