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
} from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Row, Col } from "reactstrap";
import fetchy from "../../Utils/Fetcher";
import "react-lazy-load-image-component/src/effects/blur.css";

const Home = (props) => {
  useEffect(() => {
    fetchy("https://openflags.net/all").then(async (data) => {
      let allFlags = await data.allFlags;
      setFlags(allFlags);
      console.log();
    });
  }, []);

  const [flags, setFlags] = useState([]);
  const [dropdownSortOpen, setDropdownSortOpen] = useState(false);
  const [dropdownFilterOpen, setDropdownFilterOpen] = useState(false);

  const toggleSort = () => setDropdownSortOpen((prevState) => !prevState);
  const toggleFilter = () => setDropdownFilterOpen((prevState) => !prevState);

  const sortAZ = () => {
    fetchy("https://openflags.net/all").then(async (data) => {
      console.log(flags);
      let allFlags = await data.allFlags;
      setFlags(allFlags);
    });
  };

  const sortZA = () => {
    fetchy("https://openflags.net/all").then(async (data) => {
      let allFlags = await data.allFlags;
      setFlags(allFlags.reverse());
    });
  };

  function compareAZ(a, b) {
    if (a.country < b.country) {
      return -1;
    }
    if (a.country > b.country) {
      return 1;
    }
    return 0;
  }
  function compareZA(a, b) {
    if (a.country < b.country) {
      return 1;
    }
    if (a.country > b.country) {
      return -1;
    }
    return 0;
  }

  const sortCountryAZ = () => {
    fetchy("https://openflags.net/all").then(async (data) => {
      let allFlags = await data.allFlags;
      const sortObject = allFlags.sort(compareAZ);
      console.log(sortObject);
      setFlags(sortObject);
    });
  };
  const sortCountryZA = () => {
    fetchy("https://openflags.net/all").then(async (data) => {
      let allFlags = await data.allFlags;
      const sortObject = allFlags.sort(compareZA);
      console.log(sortObject);
      setFlags(sortObject);
    });
  };

  return (
    <Container className="mt-5" fluid>
      <br></br>
      <Row className="mt-5">
        <Col>
          <Dropdown isOpen={dropdownSortOpen} toggle={toggleSort}>
            <DropdownToggle caret>Sort Flags By</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Sort By</DropdownItem>
              <DropdownItem onClick={sortAZ}>Region A ~ Z</DropdownItem>
              <DropdownItem onClick={sortZA}>Region Z ~ A</DropdownItem>
              <DropdownItem onClick={sortCountryAZ}>Country A ~ Z</DropdownItem>
              <DropdownItem onClick={sortCountryZA}>Country Z ~ A</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col>
          <Dropdown isOpen={dropdownFilterOpen} toggle={toggleFilter}>
            <DropdownToggle caret>Filter Flags By</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Filter by Country</DropdownItem>
              <Form>
              {flags.map((fl) => {
                return (
                  <FormGroup check inline>
        <Input id="InlineCheckboxes-checkbox-1" type="checkbox" />
        <Label for="InlineCheckboxes-checkbox-1" check>
          {fl.country}
        </Label>
      </FormGroup>
                )
              })}
      
      <FormGroup check inline>
        <Input id="InlineCheckboxes-checkbox-2" type="checkbox" />
        <Label for="InlineCheckboxes-checkbox-2" check>
          Some other input
        </Label>
      </FormGroup>
    </Form>
            </DropdownMenu>
          </Dropdown>
        </Col>
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
