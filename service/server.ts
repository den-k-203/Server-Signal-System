import express, { Express } from 'express';
import dotenv from 'dotenv';
import router from '../route/route'
import db_init from '../database/db_init';
import init_config from '../database/db_config';
import { Sequelize} from 'sequelize';

dotenv.config()

const app: Express = express()
app.use('', router)

const port = process.env.SERVER_PORT
const host = process.env.SERVER_HOST

const sequelize: undefined | Sequelize = init_config()


const start = async () =>{
    try{
        if(sequelize)
            await db_init(sequelize)
        
        app.listen(port, () => {
            console.log(`⚡️[server]: Server is running at http://${host}:${port}`)                
        })
    }catch(ex){
        console.log(ex)
    }
}


export default start