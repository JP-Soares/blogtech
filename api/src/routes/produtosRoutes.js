import express from 'express';
import { listarTodosProdutos, listarUmProduto, inserirUmProduto } from '../controllers/produtosController.js';

const produtosRoutes = (app) => {
    app.use(express.json());
    app.get("/produtos", listarTodosProdutos);
    app.get("/produtos/:id",listarUmProduto);
    app.post("/produtos",inserirUmProduto);
};

export default produtosRoutes;