const inquirer = require("inquirer");
const fs = require("fs");
const { bgMagenta, bgCyan, bgBlue } = require("colors");
const Logo = require("./lib/logo");
const { Circle, Triangle, Square } = require("./lib/shapes");
const Text = require("./lib/text");

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter 3 Characters",
      name: "Characters",
      validate: (input) => {
        if (input.length !== 3) {
          return "Please enter exactly 3 characters.";
        }
        return true;
      },
    },
    {
      type: "list",
      name: "textColor",
      message: "Choose a color for text:",
      choices: [
        {
          name: bgMagenta("Magenta"),
          value: "magenta",
        },
        {
          name: bgCyan("Cyan"),
          value: "cyan",
        },
        {
          name: bgBlue("Blue"),
          value: "blue",
        },
      ],
    },
    {
      type: "list",
      name: "shapeColor",
      message: "Choose a color for shape:",
      choices: [
        {
          name: bgMagenta("Magenta"),
          value: "magenta",
        },
        {
          name: bgCyan("Cyan"),
          value: "cyan",
        },
        {
          name: bgBlue("Blue"),
          value: "blue",
        },
      ],
    },
    {
      type: "list",
      name: "Shapes",
      message: "Choose a Shape",
      choices: [
        { value: "Triangle" },
        { value: "Circle" },
        { value: "Square" },
      ],
    },
  ])
 .then((Response) => {
    let shape;

    if (Response.Shapes === "Circle") {
      shape = new Circle(Response.shapeColor);
    } else if (Response.Shapes === "Square") {
      shape = new Square(Response.shapeColor);
    } else if (Response.Shapes === "Triangle") {
      shape = new Triangle(Response.shapeColor);
    }
  
    

    const text = new Text(Response.Characters, Response.textColor);

    const logo = new Logo(text, shape);

    let svgMarkup = logo.render();

    fs.writeFileSync("SVG.html", svgMarkup);
    console.log("SVG shape saved to shape.html");
  });
