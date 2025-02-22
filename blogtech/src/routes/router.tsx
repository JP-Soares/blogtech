import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App.tsx';
import ProdutoCompra from '../body/produtoCompra/produtoCompra.tsx';

export default function RouterApp(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="produto/:id" element={<ProdutoCompra />} />
            </Routes>
        </Router>
    );
}