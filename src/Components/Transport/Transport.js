
import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Transport = (props) => {
    const { id, img, name } = props.transport;
    console.log(img);

    return (
        <div >
            <Link to={"/transport/" + id}>
                <Card className="card-container" style={{ width: '15rem', margin: '10px', height: "250px" }}>
                    <Card.Img variant="top" style={{ width: "200px", hight: "200px" }} src={img} />
                    <Card.Body>
                        <h3 variant="primary">{name}</h3>
                    </Card.Body>
                </Card>

            </Link>

        </div>
    );
};

export default Transport;