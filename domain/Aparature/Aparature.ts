import AparatureType from "../Enums/AparatureType";

export default interface AparatureAttr{
    id: number,
    name: string,
    model: string,
    type_signal: AparatureType,
    description: string,
    image: string
}