import {db} from "../config/dbconfig.js";
import {collection, getDoc, getDocs, doc, addDoc, updateDoc} from 'firebase/firestore';

export async function getTodosProdutos() {
    try{
        const produtosCollection = collection(db, "produtos");
        const produtosResults = await getDocs(produtosCollection);
        const produtosList = produtosResults.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        if(produtosList != null && produtosList.length > 0){
            return produtosList;
        }else{
            return null;
        }
    }catch(e){
        return e;
    }
}

export async function getUmProduto(id) {
    try {
        const produtoDoc = doc(db, "produtos", id);
        const produtoResult = await getDoc(produtoDoc); // Recupera o documento

        if (produtoResult.exists()) {
            console.log('Documento existe:', produtoResult.data()); // Exibe os dados do documento
            return produtoResult.data(); // Retorna os dados do produto
        } else {
            console.log("Documento não encontrado.");
            return null; // Se o documento não existir
        }
    } catch (e) {
        console.log("Erro ao buscar produto:", e);  // Exibe o erro
        return e; // Retorna o erro se ocorrer algum problema
    }
}

export async function insertProduto(dadosProduto) {
    try {
        const produtoInsert = await addDoc(collection(db, "produtos"), {
            nome: dadosProduto.nome,
            descricao: dadosProduto.descricao,
            observacao: dadosProduto.observacao,
            marca: dadosProduto.marca,
            modelo: dadosProduto.modelo,
            preco: dadosProduto.preco
            // imagens: {
            //     imagem1: dadosProduto.imagem1,
            //     imagem2: dadosProduto.imagem2,
            //     imagem3: dadosProduto.imagem3
            // }
        });
        return produtoInsert.id;
    } catch (error) {
        console.log("Erro ao cadastrar produto: ", error);
        return error;
    }
}

export async function updateProduto(dadosProduto, idProduto) {
    try {
        const produtoUpdateDoc = await doc(db, "produtos", idProduto);
        if(idProduto != null && idProduto != ''){
            await updateDoc(produtoUpdateDoc, {
                nome: dadosProduto.nome,
                descricao: dadosProduto.descricao,
                observacao: dadosProduto.observacao,
                marca: dadosProduto.marca,
                modelo: dadosProduto.modelo,
                preco: dadosProduto.preco
                // imagens: {
                //     imagem1: dadosProduto.imagem1,
                //     imagem2: dadosProduto.imagem2,
                //     imagem3: dadosProduto.imagem3
                // }
            });
            return {id:produtoUpdateDoc.id};
        }else{
            throw new Error("ID INVÁLIDO");
        }
    } catch (error) {
        return {"ERRO AO ATUALIZAR O PRODUTO":error};
    }
}