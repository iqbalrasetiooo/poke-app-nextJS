'use client';
import axios from "axios";
import React, { useState, useEffect } from "react";

export function getPokemon() {

    const [data, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);  

    const [offset, setOffset] = useState(0);
    const [total, setTotal] = useState(0);
    
   

    const fetchPokemon = async () => {
        setIsLoading(true)     
        await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`)
           .then((res) => {
            setData(res.data.results)
            setTotal(res.data.count)
            setIsLoading(false)     
        });
    }

    useEffect(() =>  {
        fetchPokemon();
    }, [offset]); 
    
    if(isLoading) return <h1>Loading...</h1>

    return {isLoading, data, total, offset, setOffset};
}


export default {getPokemon};