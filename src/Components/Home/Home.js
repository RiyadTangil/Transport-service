import React from 'react';
import { Row } from 'react-bootstrap';
import Fakedata from '../FakeData/Fakedata.json'
import Header from '../Header/Header';
import Transport from '../Transport/Transport';
import './Home.css'

const Home = () => {
    const trasnports = Fakedata;
    return (
        <div className="home-container">
                  <Header></Header>
            <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '450px' }}>
                {
                    trasnports.map(trasnport => <Transport transport={trasnport}></Transport>)
                }
            </Row>


        </div>
    );
};

export default Home;