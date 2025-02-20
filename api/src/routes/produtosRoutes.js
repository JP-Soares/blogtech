import express from 'express';
import { listarTodosProdutos, listarUmProduto } from '../controllers/produtosController.js';

const produtosRoutes = (app) => {
    app.use(express.json());
    app.get("/produtos", listarTodosProdutos);
    app.get("/produtos/:id", listarUmProduto);
};

export default produtosRoutes;