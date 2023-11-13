import TypeSignals from "../Enums/SignalType"
import TrunkingType from "../Enums/TrunkingType"

class Trunking extends Aparature{
    frequency_min: number
    frequency_max: number
    bandwidth:number
    power: number
    trunkingType: TrunkingType
    channels: number
    type_signal: TypeSignals

    constructor(id_aparature: number,
                brand: string,
                model: string,
                image: string,
                yearProduction: number,
                weight: number,
                min_temp: number,
                max_temp: number,
                frequency_min: number,
                frequency_max: number,
                bandwidth:number,
                power: number, 
                trunkingType: TrunkingType,
                channels: number,
                count: number) {
                  
      super(id_aparature, brand, model, image, yearProduction, weight, min_temp, max_temp, count)
      this.type_signal = TypeSignals.Trunking
      this.frequency_min = frequency_min; // Частота
      this.frequency_max = frequency_max; //
      this.bandwidth = bandwidth; // Ширина смуги
      this.power = power; // Потужність
      this.trunkingType = trunkingType; // Тип транкингу (наприклад, аналоговий, цифровий)
      this.channels = channels; //Кількість каналів
    }
  }
  