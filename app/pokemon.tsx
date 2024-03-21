'use client';
import axios from "axios";
import React, { useState, useEffect } from "react";


function Pokemon() {

    const [data, setData] = useState<any[]>([]);
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

    return {data};
    
}

export default Pokemon;