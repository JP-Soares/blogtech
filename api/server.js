import express from 'express';
import produtosRoutes from './src/routes/produtosRoutes.js';

const app = express();

produtosRoutes(app);

app.listen(3000, '192.168.0.166', () =>{
    console.log("Servidor 3000");
});