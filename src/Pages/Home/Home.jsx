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
  Nav
} from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Row, Col } from "reactstrap";
import fetchy from "../../Utils/Fetcher";
import "react-lazy-load-image-component/src/effects/blur.css";

let filteredFlags = [];
let checkedFilter = [];
const Home = (props) => {
  const [flags, setFlags] = useState([]);
  // const [filterFlags, setFilterFlags] = useState([]);
  const [checkedFlags, setCheckedFlags] = useState([]);
  const [dropdownSortOpen, setDropdownSortOpen] = useState(false);
  const [FilterDropdown, SetFilDropdown] = useState(true);
  const [ninja, SetNinja] = useState("ninjaVanish");

  const toggleSort = () => setDropdownSortOpen((prevState) => !prevState);
  // const toggleFilter = () => setDropdownFilterOpen((prevState) => !prevState);

  const ok = () => {
    fetchy("https://openflags.net/all").then(async (data) => {
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
      SetNinja("ninjaVanish")
    });
  };

  useEffect(() => {
    ok();
  }, []);

  // const sortAZ = () => {
  //   // fetchy("https://openflags.net/all").then(async (data) => {
  //     // console.log(flags);
  //     let allFlags = flags;
  //     setFlags(allFlags);
  //   // });
  // };

  const sortZA = () => {
    // fetchy("https://openflags.net/all").then(async (data) => {
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
        e.target.checked=false;
        let filterIndex = checkedFilter.indexOf(tar);
        checkedFilter.splice(filterIndex, 1);
        console.log(checkedFilter);
        fetchy("https://openflags.net/all").then(async (data) => {
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
            fetchy("https://openflags.net/all").then(async (data) => {
              const allFlagz = await data.allFlags;
              setFlags(allFlagz);
              return;
            });
          }
        });
        return;
      }
        e.target.checked=true;
        // console.log(filterFlags)
      checkedFilter.push(e.target.name);
      console.log(checkedFilter);
      fetchy("https://openflags.net/all").then(async (data) => {
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

  const sortCountryAZ = () => {
    // fetchy("https://openflags.net/all").then(async (data) => {
      // let allFlags = await data.allFlags;
      let allFlags = flags;
      const sortObject = allFlags.sort(compareAZ);
      console.log(sortObject);
      setFlags(sortObject);
  };
  const sortCountryZA = () => {
    // fetchy("https://openflags.net/all").then(async (data) => {
      // let allFlags = await data.allFlags;
      let allFlags = flags;
      const sortedFlags = allFlags.sort(compareZA);
      console.log(sortedFlags);
      setFlags(sortedFlags);
  };
  const onClick = () => {
    if(FilterDropdown===true){
      SetNinja("ninja")
      console.log('okkkkkkkkkkkkkkkkk')
    SetFilDropdown(false)};
  if(FilterDropdown===false){
    console.log('false okkkkkkkkkkkkkkkkk')
    SetNinja("ninjaVanish")
  SetFilDropdown(true)};
}


  return (
    <Container className="mt-5" fluid>
      <Row className="mt-5" >^</Row>
      <br/>
      <Row className="pt-2 dropButt" ><Button size="lg" onClick={onClick}>^</Button></Row>
        <Nav className={ninja}>
      <Row  className={ninja} className="mt-5" >
        <Col>
          <Dropdown className={ninja} className="ml-5" isOpen={dropdownSortOpen} toggle={toggleSort}>
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
          {/* <Dropdown isOpen={dropdownFilterOpen} toggle={toggleFilter}>
            <DropdownToggle caret>Filter Flags By</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Filter by Country</DropdownItem> */}
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
                        {ff}
                      </Label>
                    </FormGroup>
                  );
                })}
              </Form>
            {/* </DropdownMenu>
          </Dropdown> */}
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
