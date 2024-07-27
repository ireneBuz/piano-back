module.exports = (app) => {
  const blogRoutes = require("./blog.routes");


  app.use("/api/blog", blogRoutes);

};