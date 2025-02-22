import React, {useEffect, useState} from "react";
import { useNavigate, Link } from "react-router-dom"; // Importando o hook useNavigate
import "./item.css";

export default function Item(){
    const [data, setData] = useState<any[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://192.168.0.166:8080/produtos')
            .then(res => res.json())
            .then(json => setData(json));  // Armazenando os produtos no estado
    }, []); 

    return(
        <section class="main-items">
            {data.map((item) => (
                <div class="item" key={item.id}>
                    <img src={item.imagem || "https://cdn2.thecatapi.com/images/2ch.jpg"} alt="Gato fofo" />
                    <label>Nome: {item.nome}</label>
                    <label>Preço: {item.preco}</label>
                    <button onClick={() => navigate('/produto/${item.id}')}>Comprar Agora!</button>
                </div>
            ))}
        </section>
    );
}