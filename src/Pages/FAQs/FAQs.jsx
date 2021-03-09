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
import { Container, Row, Col } from "reactstrap";
import fetchy from "../../Utils/Fetcher";

const FAQs = () => {
  const [ff, setFAQs] = useState();

  const ok = () => {
    fetchy("https://openflags.net/faqs").then(async (data) => {
      console.log(data);
      let d = data.faq;
      console.log(d);
      setFAQs(d);
    });
    console.log(ff);
  };

  useEffect(() => {
    ok();
  }, []);

  return (
    <Container>
      <Row className="mt-5 text-center">
        <Col className="mt-5">
          <h1>FAQs</h1>

          <hr />
        </Col>
      </Row>
      <Container>
        <Row md="2">
          {ff.map((fl) => {
            return (
              <Row>
                <Col>
                  <Card body className="text-center">
                    <Row>
                      <Col>
                        <CardTitle tag="h5"> {fl.person}</CardTitle>
                        <hr />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <CardText>{fl.message}</CardText>
                        <hr />
                      </Col>
                    </Row>
                    {/* <Row>
                    <Col>
                    <CardText>{fl.vote}</CardText>
                    </Col>
                  </Row> */}
                    <Row>
                      <Col>
                        <p> Reply from OF Team: </p>
                        {fl.reply}
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default FAQs;
