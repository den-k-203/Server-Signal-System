import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config()

const host = String(process.env.HOST_MYSQL)
const port = Number(process.env.PORT_MYSQL)
const database = String(process.env.DATABASE_MYSQL)
const username = String(process.env.USERNAME_MYSQL)
const password = String(process.env.PASSWORD_MYSQL)

const init_config = (): Sequelize => {    
    return new Sequelize(database, username, password, {
            host: host,
            port: port,
            dialect: 'mysql'
    })
}

export default init_config