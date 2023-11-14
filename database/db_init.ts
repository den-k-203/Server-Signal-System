import { Sequelize } from "sequelize";
import AparatureClass from "./db_models/aparature-model";
import UnitsClass from "./db_models/unit-model";

const db_init = async (sequelize: Sequelize) => {
    try {
        if(!await checkIfTableExists(sequelize, 'aparatures')){
           await AparatureClass.createSequelizeTypes()
        }

        if(!await checkIfTableExists(sequelize, 'units')){
            await UnitsClass.createSequelizeTypes()
        }

      } catch (error) {
        console.error('⚡️[database]: Unable to connect to the database:', error);
      }
}


const checkIfTableExists = async (sequelize: Sequelize, tableName: string) => {
  try {
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