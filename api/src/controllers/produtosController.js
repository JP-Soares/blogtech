import express from 'express';
import { getTodosProdutos, getUmProduto } from '../models/produtosModel.js';

export async function listarTodosProdutos(req, res) {
    try {
        const produtos = await getTodosProdutos();
        res.status(200).json(produtos);
    } catch (error) {
        return res.status(500).json({erro: error});
    }
}

export async function listarUmProduto(req, res) {
    try {
        const {id} = req.params;
        const produto = await getUmProduto(id);
        if(produto != null){
            res.status(200).json(produto);
        }else{
            res.status(400).json({"error":"Not found"});
        }
    } catch (error) {
        res.status(500).json({"error":"Falha na requisição do servidor", error});
    }
}