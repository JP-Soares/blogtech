import React, {useEffect, useState} from "react";
import "./item.css";

export default function Item(){
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json));  // Armazenando os produtos no estado
    }, []); 

    return(
        <section class="main-items">
            {data.map((item) => (
                <div class="item" key={item.id}>
                    <img src={item.image || "https://cdn2.thecatapi.com/images/2ch.jpg"} alt="Gato fofo" />
                    <label>Name: {item.title}</label>
                    <label>Price: {item.price}</label>
                    <button>Comprar Agora!</button>
                </div>
            ))}
        </section>
    );
}