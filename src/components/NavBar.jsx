

function NavBar({pokemonList, setPokemonIndex}) {

    
    return  (
            <div className="nav-bar">
                    <ul>
                        {pokemonList.map((pokemon, index) => (
                            
                                <li key={index}>
                                    <button onClick={() => setPokemonIndex(index)}>{pokemon.name}</button>
                                </li>
                            ))}       
                    </ul>
            </div>
    );
}

export default NavBar;