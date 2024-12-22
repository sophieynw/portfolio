"use strict";

const express = require("express"),
    app = express(),
    controller = require("./controllers/homeController");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", controller.renderIndex);
app.get("/projects", controller.renderProjects);
app.get("/projects/:type", controller.renderProjectsByType);
app.get("/story", controller.renderStory);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});