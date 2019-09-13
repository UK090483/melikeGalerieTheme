var browserSync = require("browser-sync").create();
const path = require("path");

function StartBrowserSync() {
  const dir = __dirname.split("/");
  const adress = path.join("localhost:8888", "/" + dir[4].replace(" ", "%20"));
  browserSync.init({
    proxy: adress
  });
}

exports.StartBrowserSync = StartBrowserSync;
exports.browserSyncInstance = browserSync;
