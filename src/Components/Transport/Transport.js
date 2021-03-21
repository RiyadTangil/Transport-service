
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./transport.css"


const Transport = (props) => {
    const { id, img, name } = props.transport;
    console.log(img);

    return (
        <div >
            <Link to={"/transport/" + id}>
                <Card className="card-container">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <h5 variant="primary">{name}</h5>
                    </Card.Body>
                </Card>

            </Link>

        </div>
    );
};

export default Transport;