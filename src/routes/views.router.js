import userModel from '../DAO/models/users.js';
import { Router } from 'express';

const route = Router();

route.get('/', (req,res)=>{
    res.render('home');
})

route.get('/register', (req,res)=>{
    res.render('register');
})
route.post('/register', async(req,res)=>{
    
    const { name, email, password } =req.body;
    try{
        const user = new userModel ({ name, email, password });
        await user.save();
        res.redirect('/login');
    }catch (error){
        console.error(error);
        res.redirect('/');
    }
})

route.get('/login', (req,res)=>{
    res.render('login');
})

route.post('/login', async(req,res)=>{
    
    const { email, password}= req.body;
    try{
        const user = await userModel.findOne({ email, password});
        if(!user){
            res.redirect('/login');
        }else{
            req.session.user = user;
            res.redirect('/product')
        }
    }catch(error){
        res.redirect('/login');
    }
})

route.get('/product', (req,res)=>{
    res.render('product');
})

export default route;