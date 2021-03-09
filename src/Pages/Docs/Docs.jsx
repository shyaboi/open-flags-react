import React, { useState } from "react";
import CodeBlock from "@tenon-io/tenon-codeblock";
import {
  TabContent,
  TabPane,
  NavItem,
  Nav,
  NavLink,
  Container,
  Row,
  Col,
  Card,
  Button,
  CardTitle,
  CardText,
} from "reactstrap";
import classnames from "classnames";
const Docs = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Container className="mt-5 navB">
      <br />
      <Row className="mt-5">
        <div className="mt-2">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                Docs Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Availible Routes
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row className="mt-5">
                <Col sm="11" className="m-5">
                  <h1 className="display-5">Open Flags API Documentation</h1>
                  <hr />
                  <p>The Open Flags API is currently in αlpha</p>
                </Col>
                <Col className="m-5">
                  <h1 className="display-5"> Use Case</h1>
                  <hr />
                  <p>
                    The main usage intention for this flag API is to simply have
                    an endpoint for a HTML, or any other information helpful to
                    users in JSON object form related to flags. The API endpoint
                    can be use by any program that can work with images, SVGs,
                    URLs, or JSONs
                  </p>
                </Col>
                <Col className="m-5">
                <h1 className="display-5"> Contribution</h1>
                <hr/>
                <p >
                   Until I have more than myself working on this, I
                  will need you to please contact me directly at 
                 <a href="https://ianss.dev/"> ianss.dev</a> To contribute
                  to the Open Flags API project. You can find the Open Flags API
                  github page here. I look forward to working with you ( ͡° ͜ʖ ͡°)
                  </p>
                </Col>
                <Col md="12">
                <h1 className="display-5"> Why are the documents the way they are?</h1>

                <CodeBlock
          codeString={`        
People don't want to explained to death line by line...
They just want big chunks of example code that gets the job done with minimal changing.
                                                                                  -Shyaboi`}/>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
              <Col sm="11" className="m-5">
                  <h1 className="display-5">Availible Routes</h1>
                  <hr />
                  <p>There are several enpoints that you can get flag data from The basic breakdown of routes is as follows;</p>
                  <CodeBlock
          codeString={`
          //will return a random direct link to a flag .svg
          GET https://openflags.net/rando     
          
          //will return JSON of availible flagInfo based on country/region search
          GET https://openflags.net/api/json/flagInfo/:country/:region   
          
          //will return JSON of availible flagInfo based on ISO 3166 region code
          GET https://openflags.net/api/json/ISO3166/:regionCode    
          
          //will return a direct link to the .svg flag at that country/region
          GET https://openflags.net/:country/:region/:region.svg
          
          //will return an array of JSON objects of all flags from the :country on the Open Flags API
          GET https://openflags.net/api/list/country/:country

          //will return an array of JSON objects of all flags availible on the Open Flags API
          GET https://openflags.net/all`
          }/>
                  </Col>

              </Row>
            </TabPane>
          </TabContent>
        </div>
      </Row>
    </Container>
  );
};
export default Docs;
