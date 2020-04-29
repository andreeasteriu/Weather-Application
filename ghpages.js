const ghpages = require("gh-pages");

ghpages.publish(
  "build",
  {
    branch: "master",
    message: "auto-commit",
    repo: "https://github.com/andreeasteriu/andreeasteriu.github.io",
    dest: "weatherapp",
  },
  function (err) {
    console.log(err);
  }
);
