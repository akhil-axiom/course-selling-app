function createCourseRoutes(app) {
  app.post("/course/purchase", function (req, res) {
    res.json({
      message: "purchase endpoint",
    });
  });
  app.get("/courses/preview", function (req, res) {
    res.json({
      message: "courses endpoint",
    });
  });
}
module.exports = {
  createCourseRoutes: createCourseRoutes,
};
