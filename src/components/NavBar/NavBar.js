import { Navbar, Button } from 'react-daisyui';

const NavBar = props => {
    return (
        <nav className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <Navbar {...args}>
                <ul className='menu menu-vertical lg:menu-horizontal bg-base-100 rounded-box'>
                    <li><a>Inicio</a></li>
                    <li><a>Nosotros</a></li>
                    <li tabIndex={0}>
                        <span>Mezclas</span>
                        <ul className='bg-base-100'>
                            <li><a>Altos de Chiapas</a></li>
                            <li><a>Soconusco</a></li>
                            <li><a>Jaltenango</a></li>
                            <li><a>Cerro Brujo</a></li>
                        </ul>
                    </li>
                    <li><a>Tienda</a></li>
                    <li><a>Registrarse</a></li>
                    <li><a>Entrar</a></li>
                </ul>
            </Navbar>
        </nav>
    )
}

export default NavBar;