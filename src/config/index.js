import dotenv from "dotenv";
dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV || "local",
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || 8080,
  POSTGRESQL_URI:
    process.env.NODE_ENV === "development"
      ? process.env.POSTGRESQL_URI_DEV
      : process.env.POSTGRESQL_URI_PROD,
};
