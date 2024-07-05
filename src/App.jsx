import './App.css'
import PokemonCard from "./components/PokemonCard.jsx"
import { useState } from "react";


function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePrev = () => {
    setPokemonIndex(pokemonIndex - 1)
  }
  const handleNext = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];


  return (
    <>
      <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex > 0 ? <button onClick={handlePrev}>Précédent</button> : null}
      {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleNext}>Suivant</button> : null}
      </div>
    </>
  )
}



export default App
