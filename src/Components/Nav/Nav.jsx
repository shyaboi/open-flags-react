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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import fetchy from "../../Utils/Fetcher";
import baser from "../../Utils/Baser";
import Home from "../../Pages/Home/Home";
import Docs from "../../Pages/Docs/Docs";
import FAQs from "../../Pages/FAQs/FAQs";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rando, setRando] = useState("");
  const [navPos, setNavPos] = useState("fixed-top nav");

  const fetcher = () => {
    fetchy("https://openflags.net/rando").then(async (data) => {
      let rando = await data;
      setRando(rando);
    });
  };

  let setNav = async () => {
    let loc = window.location.href.toString();
    console.log(loc.length);
    if (loc.length > 24) {
      setNavPos("fixed-bottom nav");
    }
    if (loc.length < 24) {
      setNavPos("fixed-top nav");
    }
    console.log(window.location.href);
  };

  useEffect(() => {
    // setNav();
    fetcher()
  }, []);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Router>
      <div>
        <Navbar light expand="md" className="fixed-top navB">
          <LazyLoadImage
          onClick={fetcher}
            id="pics"
            placeholderSrc={baser}
            placeholder={rando}
            alt={rando}
            effect="blur"
            src={rando} // use normal <img> attributes as props
            height="55px"
            width="100px"
          />{" "}
          <a href="/">
            <NavbarBrand className="ml-4 brand" href="/">
              <p>Open Flags API</p>
            </NavbarBrand>
          </a>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/docs">Docs</NavLink>
              </NavItem>

              <NavItem>
                <NavLink disabled href="/faqs">
                  FAQs coming soon
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              {/* <Form> */}
              <FormGroup>
                <Input
                  type="search"
                  name="search"
                  id="exampleEmail"
                  placeholder="Search Coming Soon!"
                />
              </FormGroup>
              {/* </Form> */}
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>

      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/docs">
            <Docs />
          </Route>
          {/* <Route exact path="/faqs">
            <FAQs />
          </Route> */}
          s{" "}
        </Switch>
      </div>
    </Router>
  );
};

export default Navi;
