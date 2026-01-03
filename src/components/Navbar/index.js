import { Nav, Logo, NavLinks, NavLink, NavButton } from './Navbar.styles';

export default function Navbar() {
  return (
    <Nav>
      <Logo>
        GLASS<span>COFFEE</span>
      </Logo>
      <NavLinks>
        <NavLink><a href="#">Início</a></NavLink>
        <NavLink><a href="#">Menu</a></NavLink>
        <NavLink><a href="#">Sobre</a></NavLink>
        <NavLink><a href="#">Contato</a></NavLink>
      </NavLinks>
      <NavButton>
        Pedir Agora
      </NavButton>
    </Nav>
  );
}