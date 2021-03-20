
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import "./destination.css"


const Destination = () => {
    const [toggle, setToggle] = useState(true);
    const [destionation, setDestination] = useState({});
    const { transportKey } = useParams();




    const handleOnBlur = (e) => {
        let newDestination = { ...destionation };
        newDestination[e.target.name] = e.target.value;
        setDestination(newDestination);

        console.log(newDestination);
    }
    return (
        <div className="d-flex container">
            <div className="search-aria bg-light">
                <h1>{transportKey}</h1>

                {
                    toggle ? <Form >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Pick from</Form.Label>
                            <Form.Control type="text" name="from" onBlur={handleOnBlur} placeholder="from" />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Pick to</Form.Label>
                            <Form.Control type="text" name="to" onBlur={handleOnBlur} placeholder="to" />
                        </Form.Group>
                        <Button onClick={() => setToggle(!toggle)} type="submit" variant="primary" > Search </Button>
                    </Form> :
                        <div>
                            <div className="location">
                                <p>from: {destionation.from}</p>
                                <p> to:{destionation.to}</p>
                            </div>
                            <Button onClick={() => setToggle(!toggle)} type="submit" variant="primary" > Search </Button>

                        </div>

                }






            </div>
            <div className="map-aria">

                <h1>this is map ari</h1>
            </div>
        </div >
    );
};

export default Destination;