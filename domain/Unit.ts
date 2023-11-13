import SignalAparatureInfo from './SignalAparatureInfo/SignalAparatureInfo'

class Unit{
    id_unit: number
    name_unit: string
    signals: SignalAparatureInfo[]

    constructor(id_unit:  number, 
                name_unit: string,
                signals: SignalAparatureInfo[]){

        this.signals = signals
        this.id_unit = id_unit
        this.name_unit = name_unit
    }
}