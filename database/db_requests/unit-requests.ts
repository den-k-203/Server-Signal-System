import CreateUnit from "../../domain/Unit/CreateUnit"
import UnitAttr from "../../domain/Unit/Unit";
import UnitsClass from "../db_models/unit-model";


class UnitDb {
    static addUnitToDatabase = async (unit: CreateUnit): Promise<void> => {
        try {
            const newUnit = await UnitsClass.Unit.create({
                name: unit.name,
                image: unit.image
            });
              return newUnit;
            } catch (error) {
            console.error('Error adding Unit:', error);
            } 
    }

    static removeUnitById = async (id: number): Promise<string> => {
        try {
        const deletedUnitCount = await UnitsClass.Unit.destroy({
            where: {
            id: id,
            },
        });
    
        if (deletedUnitCount > 0) {
            return `Unit with ID ${id} removed successfully.`
        } else {
            return `Unit with ID ${id} not found.`;
        }
        } catch (error) {
          return 'Error removing Unit: ' + error;
        }
    };

    static editUnitById = async (id: number, newData: Partial<CreateUnit>): Promise<string> => {
        try {
        const [updatedRowCount] = await UnitsClass.Unit.update(newData, {
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

    static getUnitById = async (id: number): Promise<UnitAttr | null> => {
        try {
          const unit = await UnitsClass.Unit.findOne({
            where: {
              id: id,
            },
          });
      
          if (unit) {
            return unit.toJSON() as UnitAttr;
          } else {
            console.log(`Unit with ID ${id} not found.`);
            return null;
          }
        } catch (error) {
          console.error('Error getting Unit:', error);
          throw error;
        }
      };

    static getAllUnits = async (): Promise<string> => {
        try {
          const units: Array<UnitAttr> = await UnitsClass.Unit.findAll();
        
          if (units.length > 0) {
            const formattedAparatures = units.map((unit) => ({
              id: unit.id,
              name: unit.name,
              image: unit.image
            })) as Array<UnitAttr>;
      
            return JSON.stringify(formattedAparatures);
          } else {
            console.log('No Units found.');
            return '[]';
          }
        } catch (error) {
          console.error('Error getting all Units:', error);
          throw error;
        }
      };
}

export default UnitDb