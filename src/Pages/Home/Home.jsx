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
} from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Row, Col } from "reactstrap";
import fetchy from "../../Utils/Fetcher";
import baser from "../../Utils/Baser";
import "react-lazy-load-image-component/src/effects/blur.css";

const Home = (props) => {
  const [flags, setFlags] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const sortAZ = ()=> {
    fetchy("https://openflags.net/all").then(async (data) => {
      let allFlags = await data.allFlags;
      setFlags(allFlags);
    });
  }

  const sortZA = ()=> {
    fetchy("https://openflags.net/all").then(async (data) => {
      let allFlags = await data.allFlags;
      setFlags(allFlags.reverse());
    });
  }

  const sortCountryAZ = ()=> {
    fetchy("https://openflags.net/all").then(async (data) => {
      console.log(data)
    });
  }

  useEffect(() => {
    fetchy("https://openflags.net/all").then(async (data) => {
      let allFlags = await data.allFlags;
      setFlags(allFlags);
    });
  }, []);

  return (
    <Container className="mt-5" fluid>
      <br></br>
      <Row className="mt-5">
        <Col>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Sort Flags By
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Sort By</DropdownItem>
        <DropdownItem onClick={sortAZ}>Region A ~ Z</DropdownItem>
        <DropdownItem onClick={sortZA}>Region Z ~ A</DropdownItem>
        <DropdownItem onClick={sortCountryAZ}>Country A ~ Z</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
    </Dropdown></Col>
      </Row>

      <Row xl="3" lg="2" md="1" xs="1" fluid>
        {flags.map((fl) => {
          return (
            <Col className="mt-5">
              <Card>
                <a
                  href={
                    "https://openflags.net/" +
                    fl.country +
                    "/region/" +
                    fl.region +
                    ".svg"
                  }
                >
                  <LazyLoadImage
                    id="pics"
                    // placeholder={baser}
                    placeholderSrc={fl.directLink}
                    alt=""
                    threshold="1"
                    effect="blur"
                    delayMethod="debounce"
                    src={fl.directLink} // use normal <img> attributes as props
                    width="100%"
                    height="300vm"
                    opacity="50"
                  />
                </a>
                <CardBody>
                  <CardTitle tag="h5">
                    Region:{" "}
                    {fl.region.charAt(0).toUpperCase() + fl.region.slice(1)}
                  </CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Country:{" "}
                    {fl.country.charAt(0).toUpperCase() + fl.country.slice(1)}
                  </CardSubtitle>
                  <CardText>ISO 3166 Code(s): {fl.ISO3166}</CardText>
                  <Col>
                    <Button
                      href={
                        "https://openflags.net/" +
                        fl.country +
                        "/region/" +
                        fl.region +
                        ".svg"
                      }
                      className="button mt-3 mb-3 purple-gradient"
                      color="other"
                      size="lg"
                      block
                    >
                      Direct Image Link
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      href={
                        "https://openflags.net/api/json/flagInfo/" +
                        fl.country +
                        "/" +
                        fl.region
                      }
                      className="button mt-3 mb-3"
                      color="dinus"
                      size="lg"
                      block
                    >
                      JSON Link
                    </Button>
                  </Col>
                  {/* <Col>
                <Button className='button mt-3 mb-3 bg-cc' color="primary" size="lg" block>Button</Button>
                </Col> */}
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default Home;
