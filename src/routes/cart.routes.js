import cartsd from "../DAO/controllers/carts.js";
import { Router } from 'express';

const router = Router();

router.post('/', async (req, res) => {
    try{
        const carts = await cartsd.createCart();
        res.json(carts);
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

router.get('/', async(req, res) => {

    try {
        const carts = await cartsd.getAll({});
        res.json(carts);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

export default router;
