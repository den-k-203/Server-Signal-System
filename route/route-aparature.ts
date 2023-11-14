import express, { Request, Response, Router } from 'express';
import AparatureDB from '../database/db_requests/aparature-requests';
import CreateAparate from '../domain/Aparature/CreateAparature';

const router: Router = express.Router()
    
router.get('/aparatures', async (req: Request, res: Response) => {
    const aparatures = await AparatureDB.getAllAparatures(); 
    
    res.json(JSON.parse(aparatures))
})

router.post('/add-aparature', async (req: Request, res: Response) => {    
    const aparature: CreateAparate = {
        name: req.body.name,
        model: req.body.model,
        type_signal: req.body.type_signal,
        description: req.body.description,
        image: req.body.image
    }

    const data = await AparatureDB.addAparatureToDatabase(aparature)

    res.json(data)
})

router.patch('/aparatures/:id', async(req: Request, res: Response) => {
    const { name, model, description, type_signal, image} = req.body
    const id = Number(req.params.id)

    const aparature: CreateAparate = {
        name: name,
        model: model,
        type_signal: type_signal,
        description: description,
        image: image
    }

    const data = { 
        message: await AparatureDB.editAparatureById(id, aparature)
    }

    res.json(data)
})

router.delete('/aparatures/:id', async (req: Request, res: Response) => {
    const id  = Number(req.params.id)
    const data = { 
            message: await AparatureDB.removeAparatureById(id)
        }
    res.json(data)
})

export default router;