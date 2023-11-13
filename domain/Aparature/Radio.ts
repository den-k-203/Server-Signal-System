import TypeSignals from "../Enums/SignalType"

class Radio extends Aparature{
    frequency_min: number
    frequency_max: number
    bandwidth: number
    manufacturer: string
    model: string
    power: number
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
                bandwidth: number, 
                power: number,
                manufacturer: string,
                count: number) {

      super(id_aparature, brand, model, image, yearProduction, weight, min_temp, max_temp, count)
      this.type_signal = TypeSignals.Radio
      this.frequency_min = frequency_min;
      this.frequency_max = frequency_max; 
      this.bandwidth = bandwidth; 
      this.power = power;
      this.manufacturer = manufacturer;
      this.model = model;
    }

  }