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
import fetchy from "../../Utils/Fetcher";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container, Row, Col } from 'reactstrap';
import Baser from '../../assets/baser'
const Home = (props) => {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    fetchy("http://localhost:4443/all").then(async (data) => {
      let allFlags = await data.allFlags;
      setFlags(allFlags);
    });
  });

  return (
    <Row md="3">


      <Suspense fallback={<div>Loading...</div>}>
        {flags.map((fl) => {
            return (
              <Col>
            <Card>
                 <LazyLoadImage
      alt={Baser}
    //   height={image.height}
      src={fl.directLink} // use normal <img> attributes as props
      width="300" />
            <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
  </Col>
          );
        })}
      </Suspense>
    </Row>
  );
};
export default Home;
