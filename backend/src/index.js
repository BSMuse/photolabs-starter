const PORT = process.env.PORT || 8001;
const ENV = require("./environment");
require('dotenv').config();

const app = require("./application")(ENV);
const server = require("http").Server(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});
