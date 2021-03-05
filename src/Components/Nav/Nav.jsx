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
import Docs from "../../Pages/Docs/Docs";
import FAQs from "../../Pages/FAQs/FAQs";

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
    <Navbar light expand="md" className="fixed-top nav">
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
      <NavbarBrand className='ml-4 brand' href="/open-flags-react">
        <p>Open Flags API</p>
      </NavbarBrand></a>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/open-flags-react">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/docs">Docs</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/faqs">FAQs</NavLink>
          </NavItem>
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
          <Route exact path="/open-flags-react">
            <Home />
          </Route>
          <Route exact path="/docs">
            <Docs />
          </Route>
          <Route exact path="/faqs">
            <FAQs />
          </Route>
s        </Switch>
    </div>
    </Router>
  );
};

export default Navi;
