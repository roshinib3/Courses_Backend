module.exports = (app) => {
  const courses = require("../controllers/course.controller.js");

  var router = require("express").Router();

  // TODO: Create four routes
  // Create a new Course
  router.post("/", courses.create);


  // Retrieve all Courses
  router.get("/", courses.findAll);


  // Retrieve courses for a subject
  router.get("/:subject", courses.findBySubject);

  // Retrieve courses for a subject

  router.post("/increment/:courseId", courses.incrementViews);


  app.use("/api/courses", router);
};
