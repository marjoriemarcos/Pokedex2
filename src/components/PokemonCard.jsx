import styles from './PokemonCard.module.css';

function PokemonCard() {
    let pokemon = pokemonList[0];
    return <div className={styles.container}>
            <figure> 
                {pokemon.imgSrc === undefined 
                    ? 
                    <p>???</p> 
                    :                 
                    <img 
                        src={pokemon.imgSrc}
                        alt={pokemon.name}>
                    </img>
                }

                <figcaption className={styles.title} >{pokemon.name}</figcaption>
            </figure>
            </div>
  }

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  
  export default PokemonCard;