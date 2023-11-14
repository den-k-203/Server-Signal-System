import { DataTypes } from "sequelize";
import init_config from "../db_config";
import  UnitAparatureAttr from "../../domain/Connection/UnitAparaturetAttr";
import UnitsClass from "./unit-model";
import AparatureClass from "./aparature-model";

const sequelize = init_config();

class UnitAparatureClass {
    static UnitAparature = sequelize.define<any,  UnitAparatureAttr>('Connection_unit_aparat', {
        id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
       
           autoIncrement: true,
         },
         id_aparature: {
           type: DataTypes.INTEGER,
           allowNull: false,
         },
         id_unit:{
           type: DataTypes.INTEGER,
           allowNull: false,
         },
         count: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
         }
     });

     static createSequelizeTypes = async (): Promise<void> => {
        try {
          UnitAparatureClass.UnitAparature.belongsTo(UnitsClass.Unit, { foreignKey: 'id_unit', as: 'unit' });
          UnitAparatureClass.UnitAparature.belongsTo(AparatureClass.Aparature, { foreignKey: 'id_aparature', as: 'aparature' });
          await sequelize.sync({ force: true });
          console.log(`⚡️[database]: Table 'Connection_unit_aparat' created successfully.`);
        } catch (error) {
          console.error(`⚡️[database]: Error creating table 'Connection_unit_aparat': `, error);
        }
      };
}

export default UnitAparatureClass