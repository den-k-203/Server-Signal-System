import { DataTypes } from "sequelize";
import init_config from "../db_config";
import AparatureAttr from "../../domain/Aparature/Aparature";

const sequelize = init_config();

class AparatureClass {
  static Aparature = sequelize.define<any, AparatureAttr>('Aparature', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,

      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type_signal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  static createSequelizeTypes = async (): Promise<void> => {
    try {
      await sequelize.sync({ force: true });
      console.log(`⚡️[database]: Table 'Aparature' created successfully.`);
    } catch (error) {
      console.error(`⚡️[database]: Error creating table 'Aparature':`, error);
    }
  };
}

export default AparatureClass