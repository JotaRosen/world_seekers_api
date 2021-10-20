const express = require("express");
const cors = require("cors");

const app = express();

/*var corsOptions = {
  origin: "http://localhost:8081"
};*/

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

//const db = require("../world_seekers_api/app/models");

//db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.use(require("../world_seekers_api/app/routes/txRoutes"));
app.use(require("../world_seekers_api/app/routes/unitsRoutes"));
app.use(require("../world_seekers_api/app/routes/usersRoutes"));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
