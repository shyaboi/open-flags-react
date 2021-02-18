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

const Sort = (props) => {
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
     <Container>
         okfdposk
     </Container>
  );
}

export default Sort;