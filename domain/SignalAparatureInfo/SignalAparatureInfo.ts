class SignalAparatureInfo{
    id_signal: number
    aparature: Aparature
    count: number

    constructor(id_signal:number,
                aparature: Aparature,
                count: number){
        this.id_signal = id_signal
        this.aparature = aparature
        this.count = count
    }       
}

export default SignalAparatureInfo