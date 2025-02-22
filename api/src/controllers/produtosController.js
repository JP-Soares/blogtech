import express from 'express';
import { getTodosProdutos, getUmProduto, insertProduto, updateProduto } from '../models/produtosModel.js';

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

export async function inserirUmProduto(req, res){
    try{
        const produtosDados = req.body;
        const inserirProduto = insertProduto(produtosDados);
        res.status(200).json(inserirProduto);
    }catch(erro){
        return res.status(500).json({"erro": "Falha na requisição!", erro});
    }
}

export async function atualizarUmProduto(req, res){
    try {
        const produtoDados = req.body;
        const {id} = req.params;
        const produtoExiste = await getUmProduto(id);

        if(produtoExiste){
            const atualizaProduto = await updateProduto(produtoDados, id);
            res.status(200).json(atualizaProduto);
        }else{
            res.status(400).json({"ERRO":"PRODUTO NÃO ENCONTRADO!"});
        }
    } catch (error) {
        return res.status(500).json({"erro":"Falha na requisição!", error})
    }
}