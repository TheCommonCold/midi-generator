import React from 'react';
import MidiDisplay from './MidiDisplay';
import {Jumbotron, Container, Row, Col} from 'reactstrap'
import { useSelector } from 'react-redux'

import { cross } from '../genetic/population'

function Test() {
    const population = useSelector(state => {
        return state.population
    })

    if(population.length<=2){
        return null;
    }
    const child = cross(population[0], population[1])
    child.score=8
    console.log(child)

  return (
    <Jumbotron>
        <Container>
            <Row className='p-3'>
                <Col><h2>Debug</h2></Col>
            </Row>
            <Row className='p-3'>
                <h4>Parent 1:</h4>
            </Row>
            <Row>
                <Col style={{height:"300px"}}>
                    <MidiDisplay progression={population[0]} index={0}/>
                </Col>
            </Row>
            <Row className='p-3'>
                <h4>Parent 2:</h4>
            </Row>
            <Row>
                <Col style={{height:"300px"}}>
                    <MidiDisplay progression={population[1]} index={1}/>
                </Col>
            </Row>
            <Row className='p-3'>
                <h4>Child:</h4>
            </Row>
            <Row>
                <Col style={{height:"300px"}}>
                    <MidiDisplay progression={child}/>
                </Col>
            </Row>
        </Container>
    </Jumbotron>
  );
}

export default Test;
