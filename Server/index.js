const _ = require("underscore");
const Joi = require("joi");

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

let courses = [
  {
    id: 1,
    name: "course1"
  },
  {
    id: 2,
    name: "course2"
  },
  {
    id: 3,
    name: "course3"
  }
];

app.delete("/courses/remove", (req, res) => {
  const courseData = {name: req.body.name, id: req.body.id }
  courses = courses.filter(course => course.name !== courseData.name && course.id !== courseData.id)
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  res.send(courses.find(course => course.id === Number(req.params.id)));
});

app.get("/courses", (req, res) => {
  res.send(courses);
});


app.post(/courses/, (req,res)=>{
  const course ={
    id: req.body.data.id,
    name: req.body.data.name
  }
  courses.push(course);

  res.send(courses);
})

app.listen(3001, () => {
  console.log("Server Listening on port 3001" );
});
