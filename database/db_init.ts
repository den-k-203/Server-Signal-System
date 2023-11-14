import { Sequelize } from "sequelize";
import AparatureClass from "./db_models/aparature-model";
import UnitsClass from "./db_models/unit-model";
import ConnectionUnitAparatClass from "./db_models/unit-aparature-model";

const db_init = async (sequelize: Sequelize) => {
    try {
        if(!await checkIfTableExists(sequelize, 'aparatures')){
           await AparatureClass.createSequelizeTypes()
        }

        if(!await checkIfTableExists(sequelize, 'units')){
            await UnitsClass.createSequelizeTypes()
        }

        if(!await checkIfTableExists(sequelize, 'connection_unit_aparat')){
          await ConnectionUnitAparatClass.createSequelizeTypes()
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