//  lib
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http").createServer(app)
module.exports = http
// routers
const spinRouter = require("./routers/spinRouter")
const userRouter = require("./routers/userRouter")
// secret
const SECRET = require("./config");
const startingSocket = require("./socket")

const PORT = 3030 || "3030";

app.use(cors({
  origin: ["http://localhost:3000"],
  maxHttpBufferSize: 1e8
}));
app.use(express.json({ limit: "30mb", extended: true }));
app.use("/spin", spinRouter)
app.use("/user",userRouter)

async function startAPP() {
  try {
    mongoose
      .connect(SECRET.SECRET.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then(() => console.log("DB is conected... "))
      .catch(() => console.log("DB is not conected see your Node"));

    app.listen(PORT, () => {
      console.log(`Express is started on ${PORT} PORT... `);
    });
  } catch (e) {
    console.log(e);
  }
}

startAPP();
startingSocket();  
