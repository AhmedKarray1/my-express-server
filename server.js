const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./index");
const port = 3000;

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((con) => {
    console.log("Successful database connection");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
