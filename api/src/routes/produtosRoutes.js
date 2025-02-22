import express from 'express';
import cors from 'cors';
import { listarTodosProdutos, listarUmProduto, inserirUmProduto, atualizarUmProduto } from '../controllers/produtosController.js';

const produtosRoutes = (app) => {
    app.use(cors());
    app.use(express.json());
    app.get("/produtos", listarTodosProdutos);
    app.get("/produtos/:id",listarUmProduto);
    app.post("/produtos",inserirUmProduto);
    app.put("/produtos/:id",atualizarUmProduto);
};

export default produtosRoutes;