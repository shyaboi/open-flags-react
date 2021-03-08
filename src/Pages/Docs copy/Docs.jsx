import React, { useState, useEffect, Suspense } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Label,
  Input,
  Nav,
} from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Row, Col } from "reactstrap";
import fetchy from "../../Utils/Fetcher";
import "../Home/node_modules/react-lazy-load-image-component/src/effects/blur.css";

function Docs() {
    return (
      <Container >
          <Row className="mt-5">
              <Col className="mt-5">
              New Docs Coming soon, currently hosted on <a href="https://openflags.net/docs">Open Flags Current Documentations</a>
              </Col>
          </Row>
  </Container>
    );
  }

  export default Docs;