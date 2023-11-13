import { Sequelize, DataTypes } from "sequelize";


const CarsTable = async (sequelize: Sequelize) => {
    const Cars = sequelize.define('cars', {
        id_aparature:{ 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        brand: {
            type: DataTypes.TEXT,
            allowNull: false
        }, 
        model: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        yearProduction:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        weight:{
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        min_temp: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        max_temp: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        max_speed_car: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        is_weapon_car: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        trunk_volume_car: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })    

    return Cars
}

export default CarsTable