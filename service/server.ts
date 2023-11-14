import express, { Express } from 'express';
import dotenv from 'dotenv';
import router_aparature from '../route/route-aparature'
import router_units from '../route/route-units'
import db_init from '../database/db_init';
import init_config from '../database/db_config';
import { Sequelize } from 'sequelize';
import bodyParser = require('body-parser');

dotenv.config()

const app: Express = express()
app.use(bodyParser.urlencoded({ extended: true }));
​app.use(express.json())
app.use('/api_v1', router_aparature)
app.use('/api_v2', router_units)

const port = process.env.SERVER_PORT
const host = process.env.SERVER_HOST

const sequelize: null | Sequelize = init_config()

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