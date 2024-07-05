import './App.css'
import PokemonCard from "./components/PokemonCard.jsx"
import NavBar from "./components/NavBar.jsx"
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
      
          <div>
          <NavBar 
              currentIndex={pokemonIndex}
              handlePrev={handlePrev}
              handleNext={handleNext}
              tabLength={pokemonList.length - 1} 
          />
          </div>

      </div>
    </>
  )
}



export default App
