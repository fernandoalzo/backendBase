const { Sequelize } = require("sequelize");

const { config } = require("../../CONFIG/config");
const setUpModels = require("./../../DATABASE/models/models");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

class DatabaseSingleton {
  static #instance;

  constructor() {
    if (DatabaseSingleton.#instance) {
      throw new Error("Ya existe una instancia de DatabaseSingleton");
    }

    this.sequelize = new Sequelize(URI, {
      dialect: "postgres",
      logging: true,
      dialectOptions: {
        useUTC: false,
      },
      timezone: "America/Bogota",
    });

    setUpModels(this.sequelize);
    this.sequelize.sync();

    DatabaseSingleton.#instance = this;
  }

  static getInstance() {
    if (!DatabaseSingleton.#instance) {
      DatabaseSingleton.#instance = new DatabaseSingleton();
    }
    return DatabaseSingleton.#instance.sequelize;
  }
}

module.exports = DatabaseSingleton.getInstance();
