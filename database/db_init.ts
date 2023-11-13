import { Sequelize } from "sequelize";
import CarsTable from "./db_models/car-model";


const db_init = async (sequelize: Sequelize) => {
    try {
        await sequelize.authenticate();
        console.log(`⚡️[database]: Connection has been established successfully.`);
      } catch (error) {
        console.error('⚡️[database]: Unable to connect to the database:', error);
      }
}


const init_tables = async (sequelize: Sequelize) => {
  try {
    CarsTable(sequelize)
    console.log(`⚡️[database]: Tables has been created successfully.`);
  } catch (error) {
    console.error('⚡️[database]: Unable to create tables:', error);
  }
}

export default db_init