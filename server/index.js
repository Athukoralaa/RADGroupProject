const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const ChildrenRoute = require("./Routes/ChildrenRoute");
const TeacherRoute = require("./Routes/TeacherRoute");
const GuardianRoute = require("./Routes/GuardianRoute");
const AppointmentRoute = require("./Routes/AppointmentRoute");

const PORT=4000

mongoose
  .connect('mongodb://localhost:27017/Rad_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);
app.use("/Childrens",ChildrenRoute);
app.use("/Teachers",TeacherRoute);
app.use("/Guardians" , GuardianRoute);
app.use("/Appointments" , AppointmentRoute);