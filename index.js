var fs = require("fs");
const { v4: uuidv4 } = require("uuid");

let jsonData = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

const reactSelectData = jsonData.map((item) => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return { id: uuidv4(), label: item, value: item, color: `#${randomColor}` };
});

fs.writeFile(
  "./generatedData.json",
  JSON.stringify(reactSelectData),
  "utf-8",
  function (err) {
    console.log("Error", err.message);
  }
);
