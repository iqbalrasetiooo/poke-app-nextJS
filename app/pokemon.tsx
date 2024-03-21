'use client';
import axios from "axios";
import React, { useState, useEffect } from "react";


function Pokemon() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const fetchPokemon = async () => {
        await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
           .then((res) => setData(res.data.results));
    }

    useEffect(() =>  {
        fetchPokemon();
        setIsLoading(false);
    }, []); 
    
    if(isLoading) return <h1>Loading...</h1>
    console.log(data);

    return (
        <div>
            {data.map((item: any) => (
                <div className="d-flex">
                  <h1 key={item.name}>{item.name}</h1>
                </div>
            ))}
        </div>
    )
}

export default Pokemon;