import AparatureType from "../Enums/AparatureType";

export default interface CreateAparate{
    name: string,
    model: string,
    type_signal: AparatureType,
    description: string,
    image: string
}
