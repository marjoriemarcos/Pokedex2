

function NavBar({currentIndex, handlePrev, handleNext, tabLength}) {

    return  <div className="nav-bar">
                {currentIndex > 0 ? <button onClick={handlePrev}>Précédent</button> : null}
                {currentIndex < tabLength ? <button onClick={handleNext}>Suivant</button> : null}
            </div>

}

export default NavBar;