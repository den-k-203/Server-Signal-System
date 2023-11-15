import { DataTypes } from "sequelize";
import init_config from "../db_config";
import  UnitAparatureAttr from "../../domain/Connection/UnitAparaturetAttr";
import UnitsClass from "./unit-model";
import AparatureClass from "./aparature-model";

const sequelize = init_config();

class UnitAparatureExistClass {
    static UnitAparature = sequelize.define<any,  UnitAparatureAttr>('Unit_aparature_exist', {
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
          UnitAparatureExistClass.UnitAparature.belongsTo(UnitsClass.Unit, { foreignKey: 'id_unit', as: 'unit' });
          UnitAparatureExistClass.UnitAparature.belongsTo(AparatureClass.Aparature, { foreignKey: 'id_aparature', as: 'aparature' });
          await sequelize.sync({ force: true });
          console.log(`⚡️[database]: Table 'Unit_aparature_exist' created successfully.`);
        } catch (error) {
          console.error(`⚡️[database]: Error creating table 'Unit_aparature_exist': `, error);
        }
      };
}

export default UnitAparatureExistClass