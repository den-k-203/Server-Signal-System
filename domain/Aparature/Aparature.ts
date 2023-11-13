class Aparature{
    id_aparature: number
    brand: string
    model: string
    image: string
    yearProduction: number
    weight: number
    mim_temp: number
    max_temp: number
    count: number

    constructor(id_aparature: number,
                brand:string, 
                model:string,
                image:string,
                yearProduction:number,
                weight:number,
                min_temp: number,
                max_temp: number,
                count: number){
            
            this.id_aparature = id_aparature
            this.brand = brand
            this.model = model
            this.image = image
            this.yearProduction = yearProduction
            this.weight = weight
            this.mim_temp = min_temp
            this.max_temp = max_temp
            this.count = count
    }

}