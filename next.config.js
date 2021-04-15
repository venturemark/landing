const plasmic = require("@plasmicapp/loader/next");
const withPlasmic = plasmic({
  dir: __dirname, // The root directory of your project.
  projects: ["htDwGmRhKKr2sReJspzzGk"], // An array of project ids.
  // substitutions: {
  //   components: [
  //     { name: "Homepage", path: __dirname + "/components/homepage.js" },
  //   ],
  // },
});

module.exports = withPlasmic({
  // Your NextJS config.
});
