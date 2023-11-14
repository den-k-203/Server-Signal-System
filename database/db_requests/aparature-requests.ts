import AparatureClass from "../db_models/aparature-model";
import AparatureAttr from "../../domain/Aparature/Aparature";
import CreateAparate from "../../domain/Aparature/CreateAparature";

class AparatureDB {
    static addAparatureToDatabase = async (aparature: CreateAparate): Promise<void> => {
        try {
        const newAparature = await AparatureClass.Aparature.create({
            name: aparature.name,
            model: aparature.model,
            type_signal: aparature.type_signal,
            description: aparature.description,
            image: aparature.image
        });
          return newAparature;
        } catch (error) {
        console.error('Error adding Aparature:', error);
        }
    };

    static removeAparatureById = async (id: number): Promise<string> => {
        try {
        const deletedAparatureCount = await AparatureClass.Aparature.destroy({
            where: {
            id: id,
            },
        });
    
        if (deletedAparatureCount > 0) {
            return `Aparature with ID ${id} removed successfully.`
        } else {
            return `Aparature with ID ${id} not found.`;
        }
        } catch (error) {
          return 'Error removing Aparature: ' + error;
        }
    };

    static editAparatureById = async (id: number, newData: Partial<CreateAparate>): Promise<string> => {
        try {
        const [updatedRowCount] = await AparatureClass.Aparature.update(newData, {
            where: {
            id: id,
            },
        });
    
        if (updatedRowCount > 0) {
            return `Aparature with ID ${id} updated successfully.`;
        } else {
            return `Aparature with ID ${id} not found.`;
        }
        } catch (error) {
            return 'Error updating Aparature: ' + error;
        }
    };

    static getAparatureById = async (id: number): Promise<AparatureAttr | null> => {
        try {
          const aparature = await AparatureClass.Aparature.findOne({
            where: {
              id: id,
            },
          });
      
          if (aparature) {
            return aparature.toJSON() as AparatureAttr;
          } else {
            console.log(`Aparature with ID ${id} not found.`);
            return null;
          }
        } catch (error) {
          console.error('Error getting Aparature:', error);
          throw error;
        }
      };

      static getAllAparatures = async (): Promise<string> => {
        try {
          const allAparatures: Array<AparatureAttr> = await AparatureClass.Aparature.findAll();
        
          if (allAparatures.length > 0) {
            const formattedAparatures = allAparatures.map((aparature) => ({
              id: aparature.id,
              name: aparature.name,
              model: aparature.model,
              description: aparature.description,
              image: aparature.image
            })) as Array<AparatureAttr>;
      
            return JSON.stringify(formattedAparatures);
          } else {
            console.log('No Aparatures found.');
            return '[]';
          }
        } catch (error) {
          console.error('Error getting all Aparatures:', error);
          throw error;
        }
      };
}

export default AparatureDB;