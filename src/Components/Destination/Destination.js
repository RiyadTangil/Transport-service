
import React, { useContext, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import "./destination.css";
import Fakedata from '../FakeData/Fakedata.json'
import Header from '../Header/Header';
import { UserContext } from '../../App';
import GoogleMap from './GoogleMap';


const Destination = () => {
    const [toggle, setToggle] = useState(true);
    const [destionation, setDestination] = useState({});
    const { transportKey } = useParams();
    const [loggedInUser] = useContext(UserContext)


    const transport = Fakedata.find(rider => rider.id === transportKey);
    const handleSearch = () => {
        setToggle(!toggle);
    }



    const handleOnBlur = (e) => {
        let newDestination = { ...destionation };
        newDestination[e.target.name] = e.target.value;
        setDestination(newDestination);

    }
    return (

        <div >
            <Header>
                <h5>{loggedInUser.name}</h5>
            </Header>
            <Row >
                <Col style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }} lg={6} md={12}>
                    <div className="search-aria">

                        {
                            toggle ? <div className="form-section">
                                <Form >
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Pick from</Form.Label>
                                        <Form.Control type="text" name="from" onBlur={handleOnBlur} placeholder="from" />

                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Pick to</Form.Label>
                                        <Form.Control type="text" name="to" onBlur={handleOnBlur} placeholder="to" />
                                    </Form.Group>
                                    <input type="date" name="" id=""/><br/><br/>

                                    <Button onClick={handleSearch} type="submit" variant="primary" > Search </Button>
                                </Form>
                            </div> :
                                <div className="form-section" >
                                    <div className="location-info">
                                        <p>from: {destionation.from}</p>
                                        <p> to : {destionation.to}</p>

                                    </div>
                                    <div className=" rider-options ">
                                        <img src={transport.img} alt="" />
                                        <h5>{transport.name}</h5>
                                        <h5> id:{transportKey}</h5>
                                        <h5> ${transport.price}</h5>
                                    </div>
                                    <div className=" rider-options ">
                                        <img src={transport.img} alt="" />
                                        <h5>{transport.name}</h5>
                                        <h5> id:{transportKey}</h5>
                                        <h5> ${transport.price}</h5>
                                    </div>
                                    <div className=" rider-options ">
                                        <img src={transport.img} alt="" />
                                        <h5>{transport.name}</h5>
                                        <h5> id:{transportKey}</h5>
                                        <h5> ${transport.price}</h5>
                                    </div>
                                    <Button onClick={handleSearch} type="submit" variant="primary" > Search again </Button>

                                </div>

                        }

                    </div>
                </Col>
                <Col lg={6} md={12}>
                    <div className="map-aria  ">
                        <GoogleMap></GoogleMap>

                    </div>
                </Col>
            </Row>
        </div >

    );
};

export default Destination;