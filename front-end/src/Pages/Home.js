import React from 'react';
import NewGiraffe from '../Images/NewGiraffe.jpeg'
import FingerMonkey from '../Images/FingerMonkey.jpeg'
import { Container, Row, Col, Image } from 'react-bootstrap'

export default function Home() {

    return (
        <div>
            <Container style={{margin: '100px'}}>
                <Row style={{marginBottom: '80px'}}>
                    <Col>
                        <Image className='h-80' src={FingerMonkey} rounded fluid />
                    </Col>
                    <Col>
                        <h3 className='text-center header' style={{fontSize: '40px'}}>Welcome to</h3>
                        <h1 className='text-center mb-5' style={{fontSize: '60px', marginTop: '80px'}}>My New Best Friend</h1>
                        <h3 className='text-center' style={{marginTop: '100px'}} >In our shop (much like in life) you can choose your best friend!</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className='text-center mb-5'>We are here for all of your exotic animal needs.</h2>
                        <h3 className='text-center'>This can be your new BFF on YOUR couch!</h3>
                    </Col>
                    <Col>
                        <Image className='float-right' src={NewGiraffe} alt='Cute pocket giraffe' rounded fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
