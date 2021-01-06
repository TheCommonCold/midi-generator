import React, {useEffect} from 'react';
import MidiDisplay from './MidiDisplay';
import {Container, Row, Col} from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'

import {createPopulation} from '../genetic/population'
import {addSpeciman} from '../actions/populationActions'
import GridLayout from 'react-grid-layout';

function Grid(props) {
    const numberPerRow = 4;
    const dispatch = useDispatch()
    const population = useSelector(state => {
        return state.population
    })
    
    useEffect(() => {
        createPopulation(16).map(x => dispatch(addSpeciman(x)))
      }, []);

    const generateLayout = () => {
        return population.map((_, i) => {
          return {
            x: i,
            y: 1,
            w: 1,
            h: 1,
            i: i.toString()
          };
        });
    }

    const layout = generateLayout();

  return (
    <Container>
        {/* {populationFormatted.map((row,i) => {
            return (
                <Row key={i}>
                    {
                        row.map((progression,j) => {
                            return (
                            <Col key={j}>
                                <MidiDisplay progression={progression} index={i*numberPerRow+j}/>
                            </Col>
                            )
                        })
                    }
                </Row>
            )
        })} */}
      <Row>
        <GridLayout className="layout" layout={layout} cols={numberPerRow} rowHeight={200} width={1200} isResizable={false} verticalCompact={false}>
        {population.map((progression,i) => {
                    return (
                        <div key={i} style={{height:"200px"}}> <MidiDisplay progression={progression} index={i}/></div>
                    )
                    })
        }
        </GridLayout>
      </Row>
    </Container>
  );
}

export default Grid;
