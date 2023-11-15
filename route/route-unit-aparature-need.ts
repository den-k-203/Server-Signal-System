import express, { Request, Response, Router } from 'express';
import UnitAparatureExistDb from '../database/db_requests/unit-aparature-exist-request';
import CreateConnectionUnitAparature from '../domain/Connection/CreateUnitAparature';


const router: Router = express.Router()

router.get('/unit-aparatures/:id', async (req: Request, res: Response) => {
    const id_unit = Number(req.params.id)
    const data = await UnitAparatureExistDb.getAllUnitAparature(id_unit)

    res.json(data)
})

router.patch('/unit-aparatures/:id', async (req: Request, res: Response) => {
    const id_unit_aparature = Number(req.params.id)
    const {id_unit, id_aparature, count} = req.body

    const unit_aparature: CreateConnectionUnitAparature = {
        id_unit: id_unit,
        id_aparature: id_aparature,
        count: count
    }

    const data = await UnitAparatureExistDb.editUnitAparatureById(id_unit_aparature, unit_aparature)

    res.json(data)
})

router.delete('/unit-aparature/:id', async (req: Request, res: Response) => {
    const id_unit_aparature = Number(req.params.id)
    const data = await UnitAparatureExistDb.removeUnitAparatureById(id_unit_aparature)

    res.json(data)
})


export default router
