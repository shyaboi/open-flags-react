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
    <Container className="mt-5  navB text-center" fluid>
      <Row>
        <Col>
          <br />
          <Nav tabs className="m-5 pt-4 navB text-center">
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
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "3" })}
                onClick={() => {
                  toggle("3");
                }}
              >
                cURL
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "4" })}
                onClick={() => {
                  toggle("4");
                }}
              >
                JavaScript Fetch
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "5" })}
                onClick={() => {
                  toggle("5");
                }}
              >
                Node.js
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "6" })}
                onClick={() => {
                  toggle("6");
                }}
              >
                JQuery
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "7" })}
                onClick={() => {
                  toggle("7");
                }}
              >
                Python
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
      <Container>
        <TabContent className="mt-2 text-center" activeTab={activeTab}>
          <TabPane tabId="1">
            <Container className=" text-center">
              <Row className="">
                <Col>
                  <h2 className="text-center">Open Flags API Documentation</h2>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>The Open Flags API is currently in αlpha</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2> Use Case</h2>
                  <hr />
                  <p>
                    The main usage intention for this flag API is to simply have
                    an endpoint for a HTML, or any other information helpful to
                    users in JSON object form related to flags. The API endpoint
                    can be use by any program that can work with images, SVGs,
                    URLs, or JSONs
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2> Contribution</h2>
                  <hr />
                  <p>
                    Until I have more than myself working on this, I will need
                    you to please contact me directly at
                    <a href="https://ianss.dev/"> ianss.dev</a> To contribute to
                    the Open Flags API project. You can find the Open Flags API
                    github page here. I look forward to working with you ( ͡° ͜ʖ
                    ͡°)
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2 className="text-center">
                    Why are the documents the way they are?
                  </h2>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col>
                  <CodeBlock
                    codeString={`        
People don't want to explained to death line by line...
They just want big chunks of example code that gets the job done with minimal changing.
                                                                                  -Shyaboi`}
                  />
                </Col>
              </Row>
            </Container>
          </TabPane>
          <TabPane tabId="2">
            <Container className="m-1 text-center">
              <Row>
                <Col>
                  <h2>Availible Routes</h2>
                  <hr />
                </Col>
              </Row>
              <Col>
                {" "}
                <p>
                  There are several enpoints that you can get flag data from The
                  basic breakdown of routes is as follows;
                </p>
              </Col>
              <Row>
                <Col>
                  <CodeBlock
                    codeString={`
          //will return a random direct link to a flag .svg
          GET http://localhost:4443/rando     
          
          //will return JSON of availible flagInfo based on country/region search
          GET http://localhost:4443/api/json/flagInfo/:country/:region   
          
          //will return JSON of availible flagInfo based on ISO 3166 region code
          GET http://localhost:4443/api/json/ISO3166/:regionCode    
          
          //will return a direct link to the .svg flag at that country/region
          GET http://localhost:4443/:country/:region/:region.svg
          
          //will return an array of JSON objects of all flags from the :country on the Open Flags API
          GET http://localhost:4443/api/list/country/:country
          
          //will return an array of JSON objects of all flags availible on the Open Flags API
          GET http://localhost:4443/all`}
                  />
                </Col>
              </Row>
            </Container>
          </TabPane>
          <TabPane tabId="3">
            <Container>
              <Row>
                <Col>
                  <h2>cURL Usage</h2>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    You can use this api with simple cURL requests. To get the
                    full code of a .svg file your cURL request should look like
                    the example below;
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CodeBlock
                    codeString={`curl http://localhost:4443/api/json/flagInfo/usa/colorado`}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  The output of the request will look something similar to the
                  example below;
                </Col>
              </Row>
              <Row>
                <Col>
                  <CodeBlock
                    codeString={`
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1800" height="1200">
<!-- Created per specification at http://www.50states.com/flag/coflag.htm by Robert Fleming -->
<rect width="1800" height="1200" fill="#002868"/>
<rect width="1800" height="400" y="400" fill="white"/>
<!-- 76 + 180*sqrt(55)/36 ~= 113.1 -->
<path d="M1130.81,750A400,400 0 1,1 1130.81,450L760,600Z" fill="#bf0a30"/>
<circle cx="760" cy="600" r="200" fill="gold"/>
</svg>`}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4>Download via cURL</h4>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    If you want to download the file locally via cURL, your cURL
                    request should look like the example below;
                  </p>
                </Col>
              </Row>
              <CodeBlock
                codeString={`
curl http://localhost:4443/usa/region/colorado.svg`}
              />
              <Row>
                <Col>
                  <p>
                    The cURL will download the file in the current working
                    directory, and give it the name following the "-o"
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4>cURL JSON</h4>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    If you want to generate a JSON response to your cURL, cURL
                    request should look like the example below;
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CodeBlock
                    codeString={`
http://localhost:4443/api/json/flagInfo/usa/colorado`}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <p>
                    This will generate a JSON response similar to the example
                    below;
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CodeBlock
                    codeString={`
flagInfo":
[{
            "_id":"5f51ca2c7cf1026aa0a50f95",
            "directLink":"http://localhost:4443/usa/region/colorado.svg",
            "quickLink":"colorado.svg",
            "region":"colorado",
            "country":"usa"
            "regionCode":'US-CO'
}]`}
                  />
                </Col>
              </Row>
            </Container>
          </TabPane>
          <TabPane tabId="4">
            <Container>
              <Row>
                <Col>
                  <h2>JavaScript Fetch Usage</h2>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    To use a Javascript fetch request to get information into
                    your JS code. you can make a similar request as the example
                    below;
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CodeBlock
                    codeString={`
fetch('http://localhost:4443/api/json/flagInfo/usa/colorado')
.then(response => response.json())
.then(data => console.log(data));`}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    The data variable alone will return many objects from the
                    server. The response will be similat to the example below;
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CodeBlock
                    codeString={`
{flagInfo: Array(1)}
flagInfo: Array(1)
0:
country: "usa"
directLink: "http://localhost:4443/usa/region/colorado.svg"
quickLink: "colorado.svg"
region: "colorado"
regionCode:'US-CO'
_id: "5f51ca2c7cf1026aa0a50f95"
__proto__: Object
length: 1
__proto__: Array(0)
__proto__: Object`}
                  />
                  <Row>
                    <Col>
                      <p>
                        Currently most flag responses will only return 1
                        position in the array, so it is safe to simply use
                        data.flagInfo[0] with 0 in the array index. you can make
                        a similar request as the example below;
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CodeBlock
                    codeString={`
fetch('http://localhost:4443/api/usa/colorado')
.then(response => response.json())
.then(data => console.log(data.flagInfo[0]));
The data.flagInfo[0] will return a JSON object from the input and desired region, and country.`}
                  />
                  <Row>
                    <Col>
                      <p>
                        The response will be a JSON obeject similar to the
                        example below;
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CodeBlock
                    codeString={`{
_id: "5f51ca2c7cf1026aa0a50f95", directLink: "http://localhost:4443/usa/region/colorado.svg", 
quickLink: "colorado.svg", 
region: "colorado", 
country: "usa"
regionCode:'US-CO'
}
country: "usa"
directLink: "http://localhost:4443/usa/region/colorado.svg"
quickLink: "colorado.svg"
region: "colorado"
_id: "5f51ca2c7cf1026aa0a50f95"
__proto__: Object`}
                  />
                </Col>
              </Row>
              <Row>
                <Col>Objects in the JSON object</Col>
              </Row>
              <Row>
                <Col>
                  You can call the parameters inside the object with dot
                  notation, similar to the example below;
                </Col>
              </Row>
              <Row>
                <Col>
                  <CodeBlock
                    codeString={`
fetch('http://localhost:4443/api/usa/colorado')
.then(response => response.json())
.then(data => {
const flagPicLink =  data.flagInfo[0].directLink
console.log(flagPicLink)
});`}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Setting a variable to after the flagInfo[0] obeject inside
                    the flagInfo object will allow you to use any of the values
                    in the object. In the above example, the response will
                    simply be a string with a direct link to a SVG image; see
                    below;
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CodeBlock
                    codeString={`
http://localhost:4443/usa/region/colorado.svg`}
                  />
                </Col>
              </Row>
            </Container>
          </TabPane>
          <TabPane tabId="5">
            <Container>
              <Row>
                <Col>
                  <h2>Node.js Usage</h2>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4>Node.js http module</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    To use Flag API with the standard Node library and not
                    download any dependencies, or extra packages, follow the
                    example below;
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CodeBlock
                    codeString={`
const https = require('https');

https.get('http://localhost:4443/api/usa/colorado', (response) => {
let data = '';

// called when a data chunk is received.
response.on('data', (chunk) => {
data = JSON.parse(chunk)
console.log(data)
});

// called when the complete response is received.
response.on('end', () => {
console.log(data);
});

}).on("error", (error) => {
console.log("Error: " + error.message);
});`}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    The data variable mutates into an object with an array of
                    objects from the server. The response will be similar to the
                    example below;
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CodeBlock
                    codeString={`
{
flagInfo: [
 {
_id: '5f51ca2c7cf1026aa0a50f95',
directLink: 'http://localhost:4443/usa/region/colorado.svg',
quickLink: 'colorado.svg',
region: 'colorado',
country: 'usa',
regionCode:'US-CO'
 }
]
}`}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Currently most flag responses will only return 1 position in
                    the array, so it is safe to simply use data.flagInfo[0] with
                    0 in the array index to get the data from the main flagInfo
                    object. you can make a similar request as the example below;
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CodeBlock
                    codeString={`
const https = require('https');

https.get('http://localhost:4443/api/usa/colorado', (response) => {
let data = '';

// called when a data chunk is received.
response.on('data', (chunk) => {
data = JSON.parse(chunk)
console.log(data.flagInfo[0])
});

// called when the complete response is received.
response.on('end', () => {
console.log(data.flagInfo[0]);
});

}).on("error", (error) => {
console.log("Error: " + error.message);
});`}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Running this code will return only a single flag JSON
                    object, such as the example below;
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CodeBlock
                    codeString={`
{
flagInfo: [
  {
    _id: '5f51ca2c7cf1026aa0a50f95',
    directLink: 'http://localhost:4443/usa/region/colorado.svg',
    quickLink: 'colorado.svg',
    region: 'colorado',
    country: 'usa'
    regionCode:'US-CO'
  }
]
  }`}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    With dot notation on the JSON object of flagInfo[0] you can
                    request specific items in the object, such as the example
                    below;
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CodeBlock
                    codeString={`
const https = require('https');

https.get('http://localhost:4443/api/usa/colorado', (response) => {
let data = '';

// called when a data chunk is received.
response.on('data', (chunk) => {
data = JSON.parse(chunk)
console.log(data.flagInfo[0].directLink)
});

// called when the complete response is received.
response.on('end', () => {
console.log(data.flagInfo[0].directLink);
});

}).on("error", (error) => {
console.log("Error: " + error.message);
});`}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    With 'directLink' after the data.flagInfo[0].directLink, the
                    response from the API server will be the contects of
                    dirctLink object, which is a String, such as the example
                    below;
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CodeBlock
                    codeString={`
"http://localhost:4443/usa/region/colorado.svg"`}
                  />
                </Col>
              </Row>
            </Container>
          </TabPane>
          <TabPane tabId="6">
            <Row>
              <Col>
                <h2>JQuery Usage</h2>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  to use the api with JQuery, you can make a simple GET request,
                  such as the example below;
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <CodeBlock
                  codeString={`
$.get( "http://localhost:4443/rando", function( data ) {
console.log(data)
})`}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  This will generate a JSON response similar to the example
                  below;
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <CodeBlock
                  codeString={`
flagInfo":
[{
  "_id":"5f51ca2c7cf1026aa0a50f95",
  "directLink":"http://localhost:4443/usa/region/colorado.svg",
  "quickLink":"colorado.svg",
  "region":"colorado",
  "country":"usa"
  "regionCode":'US-CO'
}]`}
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="7">
            <Row>
              <Col>
                <h2>Python Usage</h2>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  The simplest way to use Open Flags API with Python is with the
                  requests module. First install it with;
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <CodeBlock
                  codeString={`
pip install requests`}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  Then in your python app, setup your GET request such as the
                  code below;
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <CodeBlock
                  codeString={`
import requests

response = requests.get("http://localhost:4443/api/usa/california")

data = response.json()

print(data)`}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <p>The result will be a JSON response such as below;</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <CodeBlock
                  codeString={`
{
'flagInfo': 
  [{
      '_id': '5f7e5591a46a711d00667b40', 
      'directLink': 'http://localhost:4443/usa/region/california.svg', 
      'quickLink': 'california.svg', 
      'region': 'california', 
      'country': 'usa', 
      'regionCode':'US-CA'
  }]
}`}
                />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    </Container>
  );
};
export default Docs;
