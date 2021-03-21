import React from 'react';
import { Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Fakedata from '../FakeData/Fakedata.json'
import Header from '../Header/Header';
import Transport from '../Transport/Transport';
import './Home.css'

const Home = () => {
    const trasnports = Fakedata;
    return (
        <div className="home-container">
            <Header>
                <Button variant="outline-info"><Link to="/login">login</Link></Button>
            </Header>
            <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '450px' }}>
                {
                    trasnports.map(trasnport => <Transport transport={trasnport}></Transport>)
                }
            </Row>


        </div>
    );
};

export default Home;