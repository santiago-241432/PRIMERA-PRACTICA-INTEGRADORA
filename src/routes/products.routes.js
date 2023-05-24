import productsc from "../controllers/products.js";
import { Router } from 'express';

const router = Router();

router.get('/', async(req, res) => {

    try {
        const products = await productsc.getAll({});
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const product = await productsc.getById(req.params.id);
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const product = await productsc.create(req.body);
        res.json(product);
        res.redirect('/');
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const product = await productsc.delete(req.params.id);
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})




export default router;