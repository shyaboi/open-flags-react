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

function Docs() {
  return (
    <Container>
      <Row className="mt-5"></Row>
      <Row className="mt-5">
        <Col className="mt-5">
          <h1>
            New Docs page coming soon! Currently hosted on;
            <a href="https://openflags.net/docs">
              Open Flags Current Docs
            </a>
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Docs;