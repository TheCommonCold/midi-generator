import React from 'react';
import MidiDisplay from './MidiDisplay';
import {Container, Row, Col} from 'reactstrap'
import {createPopulation} from '../genetic/population'

function Grid(props) {

    const numberPerRow = 4;
    const population = createPopulation(16);

    const populationFormatter = (arr) => {
        let populationFormatted = []
        while(arr.length) populationFormatted.push(arr.splice(0,numberPerRow));
        return populationFormatted
    }

    const populationFormatted = populationFormatter(population)
  return (
    <Container>
        {populationFormatted.map(row => {
            return (
                <Row>
                    {
                        row.map(progression => {
                            return (
                            <Col>
                                <MidiDisplay progression={progression}/>
                            </Col>
                            )
                        })
                    }
                </Row>
            )
        })}
      <Row>
      </Row>
    </Container>
  );
}

export default Grid;
