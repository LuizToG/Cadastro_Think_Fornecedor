import React, { useState } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, Collapse } from 'reactstrap';
import logo from '/xampp/htdocs/think_cadastro_fornecedor/src/components/img/logo_branca.png';
import './MenuSuperior.css';


const MenuSuperior = (props) => {
  const [isOpen, setIsOpen] = useState(false);
    
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/"><img src={logo} className="imagen"></img></NavbarBrand>
        <NavbarToggler onClick={toggle} className="Hamburger" />
        <Collapse isOpen={isOpen} navbar>
          <Nav >
          <UncontrolledDropdown nav inNavbar>
            <NavItem >
              <NavLink href="" className="opcao1">Cadastro de Fornecedor</NavLink>
            </NavItem>
          </UncontrolledDropdown>
          </Nav>
            <NavItem id="BotaoSair">
              <NavLink href="/" className="btn"><i className="material-icons md-36 souza-left ">exit_to_app</i>SAIR</NavLink>
            </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MenuSuperior;