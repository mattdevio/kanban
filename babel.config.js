module.exports = function(api) {
  return {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": "> 0.25%, not dead",
          "debug": true,
          "useBuiltIns": "entry",
        },
      ],
      ["@babel/preset-react"],
    ],
  };
}
