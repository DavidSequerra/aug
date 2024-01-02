import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Devorah = () => {
    return (
        <Card style={{ width: '30rem' }}>
            <Card.Body>
                <Card.Title>About Devorah</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">ITC Student, Full-Stack Development</Card.Subtitle>
                <Card.Text>
                    Fast Facts:
                    <ul>
                        <li>I live in Beit Shemesh.</li>
                        <li>I work for an EdTech company.</li>
                        <li>I am a mother of a 4 and 1.5 year old.</li>
                        <li> I love to bake!</li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Devorah