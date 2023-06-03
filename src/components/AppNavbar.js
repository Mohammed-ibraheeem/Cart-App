import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function AppNavbar() {
    const cart = useSelector(state => state.cart);
    return (
        <>
            <Navbar fixed='top' bg="light" expand="lg" >
                <Container>
                    <Link to={"/product"} className='navbar-brand' href="#home"> CardApp </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/product" className='navbar-brand ms-auto my-2' href="#home"> Products </Link>
                            {/* <Link to="/carT" className='navbar-brand' href="#link"> CarT-{cart.length}</Link>*/}
                            <Link to="/carT" class="navbar-brand position-relative ms-auto my-2">
                                CarT
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                                    {cart.length}
                                    <span class="visually-hidden"></span>
                                </span>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>)
}
export default AppNavbar;