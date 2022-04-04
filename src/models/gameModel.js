import Sequelize from "sequelize";
import  sequelize  from "../database/db.js";

const gameModel = sequelize.define("game", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  code: {
    type: Sequelize.ENUM("1", "2", "3"),
    allowNull: false,
  },
  description: {
    type: Sequelize.ENUM("CREATED", "WON", "LOST"),
    allowNull: false,
  },
});

export default gameModel;
