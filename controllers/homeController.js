"use strict";

const fs = require("fs"),
    path = require("path");

const projects = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/projects.json"))
);
const projectTags = [...new Set(projects.flatMap((project) => project.tags))];
const stories = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/story.json"))
);

exports.renderIndex = (req, res) => {
    let home = JSON.parse(
        fs.readFileSync(path.join(__dirname, "../data/home.json"))
    );
    res.render("index", {
        title: "Home",
        about: home[0].about,
    });
};

exports.renderProjects = (req, res) => {
    res.render("projects", {
        title: "Projects",
        projects,
        projectTags,
    });
};

exports.renderProjectsByTag = (req, res) => {
    let tag = req.params.tag;
    let filteredProjects = projects.filter((project) => project.tags.includes(tag));
    res.render("projects", {
        title: `Projects - ${tag}`,
        projects: filteredProjects,
        projectTags,
    });
};

exports.renderStory = (req, res) => {
    res.render("story", {
        title: "My Story",
        stories,
    });
};
