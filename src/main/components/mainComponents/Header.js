import {Nav, Navbar} from "react-bootstrap";
import {Outlet} from "react-router";
import {Link} from "react-router-dom";
import mainLogo from "../../images/mainLogo.jpg";
import "../../styles/header.css";

export default function Header() {
    return (
        <div className={'header'}>
            <Navbar fixed={'top'} key={'lg'} expand={'lg'} className={`navbar`}>
                <Navbar.Brand className={`navBar-brand text-light flex-fill`}>
                    <img
                        src={mainLogo}
                        alt={`Main logo`}
                        className={'mainHeaderImage'}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className={'bg-opacity-25 mx-2'}>
                    <Nav>
                        <Link to={'/'} className={'navbar-buttons'}>მთავარი გვერდი</Link>
                        <Link to={'/about'} className={'navbar-buttons'}>ჩვენს შესახებ</Link>
                        <Link to={'/contacts'} className={'navbar-buttons'}>კონტაქტი</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Outlet/>
        </div>
    )
}