import React, { useState, useEffect } from "react";
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
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import fetchy from "../../Utils/Fetcher";
import baser from "../../Utils/Baser";
import Home from "../../Pages/Home/Home";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rando, setRando] = useState("");

  useEffect(() => {
    fetchy("https://openflags.net/rando").then(async (data) => {
      let rando = await data;
      console.log(rando);
      setRando(rando);

    });
  }, []);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Router>
      <div>
    <Navbar color="light" light expand="md" className="fixed-top nav">
        <LazyLoadImage
          id="pics"
          placeholderSrc={baser}
          placeholder={rando}
          alt={rando}
          effect="blur"
          src={rando} // use normal <img> attributes as props
          height="55px"
          width="100px"
        /> <a href="/">
      <NavbarBrand className='ml-4 brand' lhref="/">
        <h1>Open Flags API</h1>
      </NavbarBrand></a>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/sort">Docs</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>
          <Form>
            <FormGroup>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Search for flags"
              />
            </FormGroup>
          </Form>
        </NavbarText>
      </Collapse>
    </Navbar>
</div>










<div>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </div>
    </Router>
  );
};

export default Navi;
