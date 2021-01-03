import React from 'react';
import MidiDisplay from './MidiDisplay';
import {Container, Row, Col} from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'

import {createPopulation} from '../genetic/population'
import {addSpeciman} from '../actions/populationActions'

function Grid(props) {

    const dispatch = useDispatch()
    const numberPerRow = 4;
    createPopulation(16).map(x => dispatch(addSpeciman(x)))

    const populationFormatter = (arr) => {
        let populationFormatted = []
        while(arr.length) populationFormatted.push(arr.splice(0,numberPerRow));
        return populationFormatted
    }

    const population = useSelector(state => state.population)

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
