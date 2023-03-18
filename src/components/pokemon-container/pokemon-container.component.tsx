import "./pokemon-container.styles.css";

interface PokemonContainerProps {
    imageSrc: string;
    pokemonName: string;
}

export const PokemonContainer = ({
    imageSrc,
    pokemonName,
}: PokemonContainerProps): JSX.Element => {
    return (
        <div className="pokemonContainer">
            <img src={imageSrc} />
            <h3>{pokemonName}</h3>
        </div>
    );
};
