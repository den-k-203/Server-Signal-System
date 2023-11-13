import TypeSignals from "../Enums/SignalType"

class Car extends Aparature{
    max_speed_car: number
    is_weapon_car: boolean
    trunk_volume_car: number
    type_signal: TypeSignals 

    constructor(id_aparature: number,
                brand:string, 
                model:string,
                image:string,
                yearProduction:number,
                weight:number,
                min_temp: number,
                max_temp: number,
                max_speed_car: number,
                is_weapon_car: boolean,
                trunk_volume_car: number,
                count: number){
        
        super(id_aparature, brand, model, image, yearProduction, weight, min_temp, max_temp, count)
        this.type_signal = TypeSignals.FieldAndPostal
        this.max_speed_car = max_speed_car
        this.is_weapon_car = is_weapon_car
        this.trunk_volume_car = trunk_volume_car
    }
}
