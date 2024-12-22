"use strict";

const express = require("express"),
    app = express(),
    path = require("path"),
    controller = require("./controllers/homeController"),
    port = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/favicon.ico', express.static(path.join(__dirname, 'public/favicon.ico')));
app.use(express.static("public"));

app.get("/", controller.renderIndex);
app.get("/projects", controller.renderProjects);
app.get("/projects/:type", controller.renderProjectsByType);
app.get("/story", controller.renderStory);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;