import userModel from '../DAO/models/users.js';
import { Router } from 'express';
import { CreateHash, isValidPassword } from '../utils.js';

import passport from 'passport';

const route = Router();

route.get('/', (req,res)=>{
    res.render('home');
})

route.get('/register', (req,res)=>{
    res.render('register');
})

route.post('/register', passport.authenticate('register',{failureRedirect:'/failregister'}), async (req,res)=>{
    res.send({status:"success", message:"usuario registrado"})
})

route.get('/failregister', async(req,res)=>{
    console.log("error en el registro");
    res.send({error: "failed"});
})

route.get('/login', (req,res)=>{
    res.render('login');
})

route.post("/login", passport.authenticate('login',{
    successRedirect: "/product",
    failureRedirect: "/login"
}));

route.get('/product', (req,res)=>{
    res.render('product');
})

export default route;