const fs = require("fs");
const system = require("system-commands");
fs.readdirSync("lib/").forEach((item) => {
  if (item.endsWith(".css")) {
    system(`minify lib/${item} > lib/${item.replace(".css", ".min.css")}`);
  }
});
