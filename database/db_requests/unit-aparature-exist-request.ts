import CreateUnitAparaturet from "../../domain/Connection/CreateUnitAparature";
import UnitAparatureExistClass from "../db_models/unit-aparature-exist-model";

class UnitAparatureExistDb{
    static addUnitAparatureToDatabase = async (connection: CreateUnitAparaturet): Promise<void> => {
        try {
            const newConnection = await UnitAparatureExistClass.UnitAparature.create({
                id_unit: connection.id_unit,
                id_aparature: connection.id_aparature,
                count: connection.count
            });
              return newConnection;
            } catch (error) {
                console.error('Error adding Connection:', error);
            } 
    }

    static removeUnitAparatureById = async (id: number): Promise<string> => {
        try {
        const deletedUnitCount = await UnitAparatureExistClass.UnitAparature.destroy({
            where: {
            id: id,
            },
        });
    
        if (deletedUnitCount > 0) {
            return `UnitAparature with ID ${id} removed successfully.`
        } else {
            return `UnitAparature with ID ${id} not found.`;
        }
        } catch (error) {
          return 'Error removing UnitAparature: ' + error;
        }
    };

    static editUnitAparatureById = async (id: number, newData: Partial<CreateUnitAparaturet>): Promise<string> => {
        try {
        const [updatedRowCount] = await UnitAparatureExistClass.UnitAparature.update(newData, {
            where: {
            id: id,
            },
        });
    
        if (updatedRowCount > 0) {
            return `Unit with ID ${id} updated successfully.`;
        } else {
            return `Unit with ID ${id} not found.`;
        }
        } catch (error) {
            return 'Error updating Unit: ' + error;
        }
    };

    static getAllUnitAparature = async (id_unit: number): Promise<string> => {
        try {
          const unitAparatures = await UnitAparatureExistClass.UnitAparature.findAll({
            where: { id_unit },
            include: ['unit', 'aparature'], 
          });
      
          return JSON.stringify(unitAparatures);
        } catch (error) {
            console.error('Error getting UnitAparature:', error);
          throw error;
        }
      };
}

export default UnitAparatureExistDb