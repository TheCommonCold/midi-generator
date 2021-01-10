import React, {useEffect, useState} from 'react';
import MidiDisplay from './MidiDisplay';
import {Jumbotron, Container, Row, Col} from 'reactstrap'
import { useSelector } from 'react-redux'

import { cross } from '../genetic/population'

function Test() {

    const [child, setChild] = useState(null)
    const population = useSelector(state => {
        return state.population
    })

    useEffect(() => {
        if(population.length>1){
            setChild(cross(population[0], population[1]))
        }
      }, [population]);
    // population[0].notes = population[0].notes.map(x=>x.map(x=>50))
    // population[0].notes2 = population[0].notes2.map(x=> x= new Note(50, x.start, x.duration))

if (!child){
    return null
}
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
