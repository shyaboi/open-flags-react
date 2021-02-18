import React from 'react';
import './App.css';
import Home from './Pages/Home/Home'
import { Container, Row, Col } from 'reactstrap';
import Nav from './Components/Nav/Nav'
function App() {
  return (
    <Container fluid>
      <Nav  />
<Home   />

</Container>
  );
}

export default App;
