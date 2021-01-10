import React, {useState, useEffect} from 'react';
import MidiDisplay from './MidiDisplay';
import {Jumbotron, Container, Row, Col} from 'reactstrap'
import { useSelector } from 'react-redux'

function Grid() {
    const numberPerRow = 4;
    const population = useSelector(state => {
        return state.population
    })

    const [populationFormatted, setPopulationFormatted] = useState([])
    useEffect(() => {
        let arr = [...population];
        let populationFormatted = []
        while(arr.length) populationFormatted.push(arr.splice(0,numberPerRow));
        setPopulationFormatted(populationFormatted)
      }, [population]);

  return (
    <Jumbotron>
        <Container>
            {populationFormatted.map((row,i) => {
                return (
                    <Row key={i}>
                        {
                            row.map((progression,j) => {
                                return (
                                <Col key={j} style={{height:"200px"}}>
                                    <MidiDisplay progression={progression} index={i*numberPerRow+j}/>
                                </Col>
                                )
                            })
                        }
                    </Row>
                )
            })}
        </Container>
    </Jumbotron>
  );
}

export default Grid;
