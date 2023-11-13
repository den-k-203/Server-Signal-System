import TypeSignals from "../Enums/SignalType"

class Satellite extends Aparature{
    power: number
    is_wifi: boolean
    wireless_name: string
    secure_standart: string
    is_WAN_port: boolean
    type_signal: TypeSignals

    constructor(id_aparature: number,
                brand: string,
                model: string,
                image: string,
                yearProduction: number,
                weight: number,
                min_temp: number,
                max_temp: number,
                power: number,
                is_wifi: boolean,
                wireless_name: string,
                secure_standart: string, 
                is_WAN_port: boolean,
                count: number){

        super(id_aparature, brand, model, image, yearProduction, weight, min_temp, max_temp, count)   
        this.type_signal = TypeSignals.Satellite
        this.power = power
        this.is_wifi = is_wifi
        this.wireless_name = wireless_name
        this.secure_standart = secure_standart
        this.is_WAN_port = is_WAN_port
        this.wireless_name = wireless_name 
    }
}