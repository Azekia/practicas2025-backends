import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';

const api = express();

api.use(cors());

api.get('/api/hi', (req, res)=>{
    const hiText = "Hi!"
    res.send(hiText);
})

api.use(compression());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json({ limit: '5mb' }));

api.post('/api/toRoman', (req, res)=> {
    let num = JSON.stringify(req.body.numero);
    num = num.toString();
const regex = /[a-z!@#\$%\^\&*\)\(+=._\-\]]+/i;
    
    if (num < 1 || num > 3999 || -1 < num.search(regex)) {
        res.send("El número debe ser un entero entre 1 y 3999");
    }else {
        const valoresRomanos = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];
    num = parseInt(req.body.numero);
    let romano = "";
    for (let i = 0; i < valoresRomanos.length; i++) {
        while (num >= valoresRomanos[i][0]) {
            romano += valoresRomanos[i][1];
            num -= valoresRomanos[i][0];
        }
    }
        const JSONaDevolver = {
            "numero": req.body.numero,
            "romano": romano
        } 
        res.send(JSONaDevolver);
    }
})

api.listen(3000, () => {
    console.log("Server listening");
});