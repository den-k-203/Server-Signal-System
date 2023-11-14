import { Sequelize } from "sequelize";
import { createSequelizeTypes } from "./db_models/aparature-model";



const db_init = async (sequelize: Sequelize) => {
    try {
        if(!await checkIfTableExists(sequelize)){
            createSequelizeTypes()
        }
      } catch (error) {
        console.error('⚡️[database]: Unable to connect to the database:', error);
      }
}


const checkIfTableExists = async (sequelize: Sequelize) => {
  try {
    const tableName = 'aparatures';

    const tableExists = await sequelize.getQueryInterface().showAllTables().then((tables) => {
      return tables.some((table) => table === tableName);
    });
    console.log(`⚡️[database]: Table '${tableName}' exists:`, tableExists);
    return tableExists
  } catch (error) {
    console.error('Error checking table existence:', error);
  }
};

export default db_init