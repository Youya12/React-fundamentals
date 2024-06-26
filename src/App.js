import React from 'react';
import Name from "./components/Name";
import MyImg from './components/MyImg';
import Price from "./components/Price";
import Description from "./components/Description";
import Img from "./components/Img";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';

const firstName = "Yasmine";

const App = () => {
  return (
    <div className="container">
      <Card className="custom-card">
        <Img/>
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Card.Text>
            <Description />
          </Card.Text>
          <Price />
          <Button variant="primary">Purchace</Button>
        </Card.Body>
      </Card>
      <div className='myCalling'>Hello {firstName ? firstName : "there"}!! {firstName && <MyImg />}</div>
    </div>
  );
};

export default App;
