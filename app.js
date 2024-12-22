"use strict";

const express = require("express"),
    app = express(),
    controller = require("./controllers/homeController"),
    port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", controller.renderIndex);
app.get("/projects", controller.renderProjects);
app.get("/projects/:type", controller.renderProjectsByType);
app.get("/story", controller.renderStory);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;