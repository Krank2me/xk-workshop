const app = require("./app");

app.listen(app.get("port"), () => {
  console.log("Server run on port: ", app.get("port"));
});
