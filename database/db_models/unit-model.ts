import { DataTypes } from "sequelize";
import init_config from "../db_config";
import UnitAttr from "../../domain/Unit/Unit";

const sequelize = init_config();

class UnitsClass {
  static Unit = sequelize.define<any, UnitAttr>('Units', {
       id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
      
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        image:{
          type: DataTypes.STRING,
          allowNull: false,
        }
    });

    static createSequelizeTypes = async (): Promise<void> => {
      try {
        await sequelize.sync({ force: true });
        console.log(`⚡️[database]: Table 'Units' created successfully.`);
      } catch (error) {
        console.error(`⚡️[database]: Error creating table 'Units': `, error);
      }
    };
}

export default UnitsClass