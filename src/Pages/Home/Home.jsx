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
import "react-lazy-load-image-component/src/effects/blur.css";
import bb from '../../Utils/BASE_URLs'
const BASE_API_URL = bb.BASE_API_URL

let filteredFlags = [];
let checkedFilter = [];
const Home = (props) => {
  const [flags, setFlags] = useState([]);
  // const [filterFlags, setFilterFlags] = useState([]);
  const [checkedFlags, setCheckedFlags] = useState([]);
  const [dropdownSortOpen, setDropdownSortOpen] = useState(false);
  const [FilterDropdown, SetFilDropdown] = useState(true);
  const [dropArrow, setDropArrow] = useState("▼");
  const [ninja, SetNinja] = useState("ninjaVanish");

  const toggleSort = () => setDropdownSortOpen((prevState) => !prevState);
  // const toggleFilter = () => setDropdownFilterOpen((prevState) => !prevState);

  const ok = () => {
    fetchy(`${BASE_API_URL}/all`).then(async (data) => {
      const allFlagz = await data.allFlags;
      setFlags(allFlagz);
      //make a set to take out repeat vals
      const filterSet = new Set();
      // foreach all flags and return filterSet unique vals
      allFlagz.forEach((e) => {
        filterSet.add(e.country);
      });
      const fSet = [...filterSet];
      // console.log(fSet)
      setCheckedFlags(fSet);
      // setFilterFlags(fSet);
      SetNinja("ninjaVanish");
    });
  };

  useEffect(() => {
    ok();
  }, []);



  const sortZA = () => {
    // fetchy("http://localhost:4443/all").then(async (data) => {
    let allFlags = flags;
    setFlags(allFlags.reverse());
    // });
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

  const filterCheckedFlags = (e) => {
    // while (checkedFilter != [""]) {
    // let filterIndex = checkedFilter.indexOf(e.target.name)
    let tar = e.target.name;
    if (checkedFilter.includes(tar)) {
      // console.log(filterFlags)
      e.target.checked = false;
      let filterIndex = checkedFilter.indexOf(tar);
      checkedFilter.splice(filterIndex, 1);
      console.log(checkedFilter);
      fetchy("http://localhost:4443/all").then(async (data) => {
        let allFlags = await data.allFlags;
        let filteredFlags = [];
        for (let i = 0; i < checkedFilter.length; i++) {
          const el = checkedFilter[i];
          let fillyFlags = allFlags.filter((x) => {
            return x.country === el;
          });
          filteredFlags.push(...fillyFlags);
        }
        console.log(checkedFilter);

        setFlags(filteredFlags);
        if (checkedFilter[0] == null) {
          fetchy(`${BASE_API_URL}/all`).then(async (data) => {
            const allFlagz = await data.allFlags;
            setFlags(allFlagz);
            return;
          });
        }
      });
      return;
    }
    e.target.checked = true;
    // console.log(filterFlags)
    checkedFilter.push(e.target.name);
    console.log(checkedFilter);
    fetchy(`${BASE_API_URL}/all`).then(async (data) => {
      let allFlags = await data.allFlags;
      let filteredFlags = [];
      for (let i = 0; i < checkedFilter.length; i++) {
        const el = checkedFilter[i];
        let fillyFlags = allFlags.filter((x) => {
          return x.country === el;
        });
        filteredFlags.push(...fillyFlags);
      }
      console.log(checkedFilter);

      setFlags(filteredFlags);
    });
    return;
    // }
  };

  // const sortCountryAZ = () => {
  //   // fetchy("http://localhost:4443/all").then(async (data) => {
  //   // let allFlags = await data.allFlags;
  //   let allFlags = flags;
  //   const sortObject = allFlags.sort(compareAZ);
  //   console.log(sortObject);
  //   setFlags(sortObject);
  // };
  // const sortCountryZA = () => {
  //   // fetchy("http://localhost:4443/all").then(async (data) => {
  //   // let allFlags = await data.allFlags;
  //   let allFlags = flags;
  //   const sortedFlags = allFlags.sort(compareZA);
  //   console.log(sortedFlags);
  //   setFlags(sortedFlags);
  // };
  const onClick = () => {
    if (FilterDropdown === true) {
      setDropArrow("▲");
      SetNinja("ninja");

      SetFilDropdown(false);
    }
    if (FilterDropdown === false) {
      SetNinja("ninjaVanish");
      setDropArrow("▼");
      SetFilDropdown(true);
    }
  };

  return (
    <Container className="mt-5" fluid>
      <Row className="mt-5">^</Row>
      <br />
      <Row className="pt-2 ml-3 dropButt">
        <Button size="lg" onClick={onClick}>
          Filter & Sort {dropArrow}
        </Button>
      </Row>
      <Nav className={ninja}>
        <Row className={ninja} className="mt-5">
          <Col>
            <Dropdown
              className={ninja}
              className="ml-5"
              isOpen={dropdownSortOpen}
              toggle={toggleSort}
            >
              <DropdownToggle caret>Sort Flags By</DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Sort By</DropdownItem>
                {/* <DropdownItem onClick={sortAZ}>Region A ~ Z</DropdownItem> */}
                <DropdownItem onClick={sortZA}>Reverse A ~ Z</DropdownItem>
                {/* <DropdownItem onClick={sortCountryAZ}>Country A ~ Z</DropdownItem> */}
                {/* <DropdownItem onClick={sortCountryZA}>Country Z ~ A</DropdownItem> */}
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Filter by Country: </CardSubtitle>

            <Form>
              {checkedFlags.map((ff) => {
                return (
                  <FormGroup check inline>
                    <Input
                      id="InlineCheckboxes-checkbox-1"
                      name={ff}
                      onChange={filterCheckedFlags}
                      type="checkbox"
                    />
                    <Label for="InlineCheckboxes-checkbox-1" check>
                    <CardText  tag="h6">{ff}</CardText>
                    </Label>
                  </FormGroup>
                );
              })}
            </Form>
           
          </Col>
        </Row>
      </Nav>
      <Row xl="3" lg="2" md="1" xs="1" fluid>
        {flags.map((fl) => {
          return (
            <Col className="mt-5">
              <Card>
                <a
                  href={
                    `${BASE_API_URL}/` +
                    fl.country +
                    "/region/" +
                    fl.region +
                    ".svg"
                  }
                >
                  <LazyLoadImage
                    id="pics"
                    // placeholder={baser}
                    placeholderSrc={`${BASE_API_URL}/${fl.country}/region/${fl.region}.svg`}
                    alt=""
                    threshold="1"
                    effect="blur"
                    delayMethod="debounce"
                    src={`${BASE_API_URL}/${fl.country}/region/${fl.region}.svg`} // use normal <img> attributes as props
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
                      href={`${BASE_API_URL}/${fl.country}/region/${fl.region}.svg`
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
                        `${BASE_API_URL}/api/json/flagInfo/${fl.country}/${fl.region}`}
                      className="button mt-3 mb-3"
                      color="dinus"
                      size="lg"
                      block
                    >
                      JSON Link
                    </Button>
                  </Col>
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
