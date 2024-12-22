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


const path = require('path');
const fs = require('fs');

app.get('/debug', (req, res) => {
  try {
    const homePath = path.join(__dirname, 'data/home.json');
    const homeData = JSON.parse(fs.readFileSync(homePath, 'utf-8'));
    res.send({
      message: 'Debugging successful!',
      homePath,
      homeData,
    });
  } catch (err) {
    res.status(500).send({
      message: 'Error in debug route',
      error: err.message,
    });
  }
});