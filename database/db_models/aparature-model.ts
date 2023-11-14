import { DataTypes } from "sequelize";
import init_config from "../db_config";
import AparatureAttr from "../../domain/Aparature/Aparature";
import AparatureType from "../../domain/Enums/AparatureType";

const sequelize = init_config();

const Aparature = sequelize.define<any, AparatureAttr>('Aparature', {
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

const createSequelizeTypes = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log('Table created successfully.');
  } catch (error) {
    console.error('Error creating table:', error);
  }
};

export {Aparature, createSequelizeTypes}