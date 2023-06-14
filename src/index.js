import express from "express";

import __dirname from "./utils.js";

import { engine } from "express-handlebars";

import session from "express-session";

import MongoStore from "connect-mongo";

import route from "./routes/views.router.js"

const app = express();

app.use("/", route);

app.engine('handlebars', engine());

app.set('views', __dirname + '/views');

app.set('view engine', 'handlebars');

app.use(session({
    store: MongoStore.create({
        mongoUrl:'mongodb+srv://spdalessa:coder5925@cluster0.c5csphy.mongodb.net/?retryWrites=true&w=majority',
        mongoOptions: {UseNewUrlParser:true, UseUnifiedTopology:true},
        ttl:15
    }),
    secret:'SecretCoder',
    resave:false,
    saveUninitialized:false
}

))


const PORT = process.env.PORT || 8080;

app.listen(PORT, (err) =>{
    if(err){
        console.log("Connection error:", err);
        return;
    }
    console.log(`Server listening on port ${PORT}`);
});
