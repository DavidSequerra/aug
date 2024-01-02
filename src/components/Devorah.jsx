import React from "react";
import Card from 'react-bootstrap/Card';

const Devorah = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>About Devorah</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">ITC Student, Full-Stack Development</Card.Subtitle>
                <Card.Text>
                    Fast Facts:
                    I live in Beit Shemesh.
                    I work for an EdTech company.
                    I am a mother of a 4 and 1.5 year old.
                    I love to bake!
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Devorah