import express, { json } from "express";
import morgan from "morgan";
import  sequelize  from "./database/db.js";
import routes from "./routes/index.js";
import config from "./config/index.js";

const app = express();

//middlewares
app.use(json());
app.use(morgan("dev"));
//routes
app.use(routes);

//server
const initServer = async () => {
  try {
    await sequelize.sync();
    app.listen(config.PORT, () => {
      console.log(`App listening on http://${config.HOST}:${config.PORT}`);
    });
  } catch (error) {
    throw new Error("error at initServer:" + error);
  }
};

initServer();
export default app
