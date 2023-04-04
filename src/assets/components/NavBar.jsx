import "./NavBar.css"
import {Button, ButtonGroup} from "@mui/material";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <header>
        <div>
        <Button className="logo" color="primary" href="/">Objetos para Siempre</Button></div>
            <nav>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button href="/" variant="outlined">Inicio</Button>
                <Button href="/productos" variant="outlined">Productos</Button>
                <Button href="/nuevas" variant="outlined">Jarrones</Button>
                <Button href="/usadas" variant="outlined">Tazas</Button>
                <Button href="/quienes-somos" disabled variant="outlined">Quienes somos</Button>
                <CartWidget />
            </ButtonGroup>
            </nav>
        </header>
    );
}

export default Navbar;