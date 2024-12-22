"use strict";

const fs = require("fs");
const projects = JSON.parse(fs.readFileSync("./data/projects.json"));
const projectTypes = [...new Set(projects.map(project => project.type))];
const stories = JSON.parse(fs.readFileSync("./data/story.json"));

exports.renderIndex = (req, res) => {
  let home = JSON.parse(fs.readFileSync("./data/home.json"));
  res.render("index", {
    title: "Home",
    about: home[0].about,
  });
};

exports.renderProjects = (req, res) => {
  res.render("projects", {
    title: "Projects",
    projects,
    projectTypes
  });
};

exports.renderProjectsByType = (req, res) => {
  let type = req.params.type;
  let filteredProjects = projects.filter((project) => project.type === type);
  res.render("projects", {
    title: "Projects",
    projects: filteredProjects,
    projectTypes
  });
};

exports.renderStory = (req, res) => {
  res.render("story", {
    title: "My Story",
    stories
  });
}