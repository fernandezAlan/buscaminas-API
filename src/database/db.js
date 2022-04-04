import  Sequelize  from "sequelize";
import config from "../config/index.js";

let sequelize;

if(config.NODE_ENV==='development'){
  sequelize = new Sequelize(config.POSTGRESQL_URI, {
    dialect: 'postgres',
    protocol: 'postgres'
  });
}
else{
  sequelize = new Sequelize(config.POSTGRESQL_URI+'?sslmode=no-verify', {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }
  }
  });
}


export default sequelize






