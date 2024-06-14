const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");


const app = express();
const port = 3000;
// routes
const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const grupoRoutes = require("./routes/grupoRoutes");
const materiaRoutes = require("./routes/materiaRoutes");
const ecoaRoutes = require("./routes/ecoaIndvRoutes");
const reportRoutes = require("./routes/reportRoutes");
const chatRoutes = require("./routes/chatRoutes");
const surveyRoutes = require("./routes/surveyRoutes");
//const questionRoutes = require("./routes/questionRoutes");
//const answerRoutes = require("./routes/answerRoutes");

// express functions
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// testing
app.get("/", (req, res) => {
    res.json({info: "Hello World! from Node.js, Express, and PostgreSQL!"});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// Login route


// endpoints
app.use('/report', reportRoutes);
app.use('/ecoaIndividual', ecoaRoutes);
app.use('/survey', surveyRoutes);
app.use('/teachers',teacherRoutes);
app.use("/students", studentRoutes);
app.use("/grupo", grupoRoutes);
app.use("/materia", materiaRoutes);
app.use("/chat", chatRoutes);


