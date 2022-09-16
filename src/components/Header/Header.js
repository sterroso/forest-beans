// Elemento header dentro de la App.
import Brand from "../Brand/Brand";
import NavBar from "../NavBar/NavBar";

const Header = props => {
    return (
        <header className='Header'>
            <Brand props={ props } />
            <NavBar props={ props } />
        </header>
    )
}

export default Header;