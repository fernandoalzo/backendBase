const express = require("express");
const routerAPI = require("./routes/routes");
const cors = require("cors");
const { rateLimit } = require("express-rate-limit");

const {
  ormErrorHandler,
  errorHandler,
  boomErrorHandler,
} = require("./MIDDLEWARES/errors/error.handler");

const { config } = require("./CONFIG/config");

const app = express();
const port = config.port;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 500,
  standardHeaders: true,
  legacyHeaders: false,
  message: { msg: "Request limit reached!" },
});
const options = {
  origin: "*",
};
app.use(express.json());
app.use(limiter);
app.use(cors(options));
require("./AUTH");
routerAPI(app);

app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Aplicacion Activa. Puerto: " + port);
});
