const path = require("path");

module.exports = {
  entry: "./src/index.js", // Ваш главный файл JavaScript
  output: {
    filename: "bundle.js", // Имя выходного файла
    path: path.resolve(__dirname, "dist"), // Папка, в которой будет сохранен собранный файл
  },
};
