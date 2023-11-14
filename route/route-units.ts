import express, { Request, Response, Router } from 'express';
import UnitDb from '../database/db_requests/unit-requests';
import CreateUnit from '../domain/Unit/CreateUnit';

const router: Router = express.Router()

router.get('/units', async (req: Request, res: Response) => {
    const units = await UnitDb.getAllUnits(); 
    
    res.json(JSON.parse(units))
})

router.post('/add-unit', async (req: Request, res: Response) => {    
    const unit: CreateUnit = {
        name: req.body.name,
        image: req.body.image
    }

    const data = await UnitDb.addUnitToDatabase(unit)

    res.json(data)
})

router.patch('/units/:id', async(req: Request, res: Response) => {
    const { name, image } = req.body
    const id = Number(req.params.id)

    const unit: CreateUnit = {
        name: name,
        image: image
    }

    const data = { 
        message: await UnitDb.editUnitById(id, unit)
    }

    res.json(data)
})

router.delete('/units/:id', async (req: Request, res: Response) => {
    const id  = Number(req.params.id)
    const data = { 
            message: await UnitDb.removeUnitById(id)
        }
    res.json(data)
})

router.get('/unit/:id',  async (req: Request, res: Response) => {
    const id  = Number(req.params.id)
    const data = await UnitDb.getUnitById(id)
    
    res.json(data)
})

export default router;