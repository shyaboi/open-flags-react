import React, { useState, useEffect, Suspense } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardHeader,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import fetchy from "../../Utils/Fetcher";

const FAQs = (props) => {
  const [ff, setFAQs] = useState([]);

  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const ok = (props) => {
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
    <Container fluid>
      <Row className="mt-5 text-center">
        <Col className="mt-5">
          <Row>
            <Col>
              <h1>Ask a questiong to the Open Flags API Team</h1>
            </Col>
          </Row>
          <Container>
            <Form method="POST" action="https://openflags.net/newfaq">
              <Row xs="1" md="2">
                <Col>
                  <FormGroup>
                    <Label for="exampleFormControlSelect2">Are You a...</Label>
                    <Input
                      type="select"
                      className="form-control"
                      id="exampleFormControlSelect2"
                      name="person"
                    >
                      <option>Developer</option>
                      <option>Flag Enthusiest</option>
                      <option>History Enthusiest</option>
                      <option>Crazy Person</option>
                      <option>Normal Person</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="inputState">
                      What kind of feedback are you providing?
                    </Label>
                    <Input
                      type="select"
                      id="inputState"
                      class="form-control"
                      name="type"
                    >
                      <option value="Question">Question</option>
                      <option value="Suggestion">Suggestion</option>
                      <option value="Comment">Comment</option>
                      <option value="Comment">Criticism</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleFormControlTextarea1">Message</Label>
                    <Input
                      type="textarea"
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="message"
                    ></Input>
                  </FormGroup>
                  <div>

                    <Modal isOpen={modal} toggle={toggle} className={className}>
                      <ModalHeader toggle={toggle}>Open Flags API</ModalHeader>
                      <ModalBody>
                      Thank you for your feedback submission! 
                      </ModalBody>
                      <ModalBody>
                      The Open Flags team will reply on your post as soon as they can.
                      </ModalBody>
                      <ModalFooter>
                        <Button color="other" onClick={toggle}>
                          Thank You
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </div>
                  <Button type="submit" className="btn btn-other" onClick={toggle}>
                      Submit
                    </Button>
                  
                </Col>
              </Row>
            </Form>
          </Container>
          <hr />
        </Col>
      </Row>
      <Container>
        <Row xs="1" xl="2">
          {ff.map((fl) => {
            return (
              <Row className="p-2 mt-5 text-center">
                <Col>
                  <Card body className="text-center">
                      <CardBody>
                    <Row>
                      <Col>
                        <CardHeader>{fl.person}</CardHeader>

                        <CardTitle tag="h5"> </CardTitle>
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
                        <p> Reply from Open Flags Team: </p>
                        {fl.reply}
                      </Col>
                    </Row>
                </CardBody>
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
