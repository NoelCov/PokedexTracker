import { PokemonContainer } from "../pokemon-container/pokemon-container.component";
import { useEffect } from "react";

import "./pokemon-table.styles.css";

export const PokemonTable = (): JSX.Element => {
    const getPokedexFromScarletAndViolet = async () => {
        const data = await fetch("https://pokeapi.co/api/v2/pokedex/31/");
        const response = await data.json();
        return response.pokemon_entries;
    };

    const getPokemonDetails = async (pokemonArray: []) => {
        for (const pokemon of pokemonArray) {
            const name = pokemon["pokemon_species"]["name"];
            console.log(name);
        }
    };

    useEffect(() => {
        const execute = async () => {
            const pokedex = await getPokedexFromScarletAndViolet();
            getPokemonDetails(pokedex);
        };

        execute();
    }, []);

    return <div className="pokemonContainer"></div>;
};
