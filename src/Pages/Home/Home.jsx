import React, { useState, useEffect, Suspense } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Row, Col } from "reactstrap";
import "react-lazy-load-image-component/src/effects/blur.css";
import fetchy from '../../Utils/Fetcher'
import baser from "../../Utils/Baser";

const Home = (props) => {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    fetchy("https://openflags.net/all").then(async (data) => {
      let allFlags = await data.allFlags;
      setFlags(allFlags);
    });
  }, []);

  return (
    <Container className="mt-5" fluid>
      <br></br>
    <Row xl='3' lg='2' md="1" xs="1" fluid>
      {flags.map((fl) => {
        return (
          <Col className="mt-5">
            <Card >
              <a  href={"https://openflags.net/" + fl.country + "/region/" + fl.region + ".svg"}>
                <LazyLoadImage
                id='pics'
                  placeholderSrc={fl.directLink}
                  alt=""
                  threshold='1'
                  effect="blur"
                  delayMethod="debounce"
                  src={fl.directLink} // use normal <img> attributes as props
                  width="100%"
                  height='300vm'
                  opacity='50'
                />
              </a>
              <CardBody>
                <CardTitle tag="h5">
                  Region: {fl.region.charAt(0).toUpperCase() + fl.region.slice(1)}
                </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Country:{" "}
                  {fl.country.charAt(0).toUpperCase() + fl.country.slice(1)}
                </CardSubtitle>
                <CardText>
                 ISO 3166 Code(s):  {fl.ISO3166}
                </CardText>
                <Col>
                <Button href={"https://openflags.net/" + fl.country + "/region/" + fl.region + ".svg"} className='button mt-3 mb-3 purple-gradient' color="other" size="lg" block>Direct Image Link</Button>
                </Col>
                <Col>
                <Button href={"https://openflags.net/api/json/flagInfo/" + fl.country +'/'+ fl.region} className='button mt-3 mb-3' color="dinus" size="lg" block>JSON Link</Button>
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
