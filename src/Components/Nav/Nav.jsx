import React, { useState, useEffect, lazy ,Suspense } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import fetchy from "../../Utils/Fetcher";
import baser from "../../Utils/Baser";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rando, setRando] = useState('');

useEffect(() => {
  fetchy("http://localhost:4443/rando").then(async (data) => {
    let rando = await data;
    console.log(rando)
    setRando(rando);
  });
}, []);



  const toggle = () => setIsOpen(!isOpen);
  return (
      <Navbar color="light" light expand="md" className="fixed-top nav">
        <Suspense fallback={<div>Loading...</div>}>
        <LazyLoadImage
                id='pics'
                  placeholderSrc={baser}
                  placeholder={rando}
                  alt=""
                  effect="blur"
                  
                  src={rando} // use normal <img> attributes as props
                  height="55px"
                  width='100px'
                 
                />
      </Suspense>
        <NavbarBrand href="/"><h1>Open Flags API</h1></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>    
            <Form>
      <FormGroup>
        <Input type="email" name="email" id="exampleEmail" placeholder="Search for flags" />
      </FormGroup>
      </Form>
      </NavbarText>
        </Collapse>
      </Navbar>
  );
}

export default Navi;