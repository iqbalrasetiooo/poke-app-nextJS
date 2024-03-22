'use client';
import axios from "axios";
import React, { useState, useEffect } from "react";


function Pokemon() {

    const [data, setData] = useState<any[]>([]);
    const [limit, setLimit] = useState(20);
    const [isLoading, setIsLoading] = useState(false);


    const fetchPokemon = async () => {
        setIsLoading(true)     
        await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`)
           .then((res) => {setData(res.data.results)
           setIsLoading(false)     
        });
    }

    useEffect(() =>  {
        fetchPokemon();
    }, [limit]); 
    
    if(isLoading) return <h1>Loading...</h1>

    return {data, isLoading, setLimit};
    
}

export default Pokemon;