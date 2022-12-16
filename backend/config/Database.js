import {Sequelize} from "sequelize";

const db = new Sequelize('registration', 'root','', {
  host: 'localhost',
  dialect: 'mysql'
});

export default db;
