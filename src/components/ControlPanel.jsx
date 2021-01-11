import React, {useEffect, useState} from 'react';
import {Jumbotron, Container, Row, Col} from 'reactstrap'
import { useDispatch } from 'react-redux'
import {Button, TextField} from '@material-ui/core';

import {createPopulation} from '../genetic/population'
import {addSpeciman, deletePopulation} from '../actions/populationActions'
import NewGeneration from './NewGeneration'

function ControlPanel() {
    const [generation, setGeneration] = useState(0)

    const [state, setState] = useState({
        populationSize: 8,
        jazziness: 4,
        numberOfNotes: 3,
        noteLengths: 12,
    })
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const updateGeneration = () => {
        setGeneration(generation+1)
    }

    const restart = () => {
        setGeneration(0)
        dispatch(deletePopulation())
        createPopulation(state.populationSize, state.jazziness, state.numberOfNotes, state.noteLengths).map(x => dispatch(addSpeciman(x)))
    }

    useEffect(() => {
        restart()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [state]);


  return (
    <Jumbotron>
        <Container>
            <Row>
                <h2>Generation: {generation}</h2>
            </Row>
            <Row className='p-5'>
                <Col><TextField name='populationSize' label="Population size" type="number" onChange={handleChange} value={state.populationSize}/></Col>
                <Col><TextField name='jazziness' label="Jazziness" type="number" onChange={handleChange} value={state.jazziness}/></Col>
                <Col><TextField name='numberOfNotes' label="Number of notes" type="number" onChange={handleChange} value={state.numberOfNotes}/></Col> 
                <Col><TextField name='noteLengths' label="Note lengths" type="number" onChange={handleChange} value={state.noteLengths}/></Col>
            </Row>
            <Row>
                <Button variant="contained" color="primary" onClick={restart}>
                    Restart
                </Button>
                <NewGeneration updateGeneration={updateGeneration}/>
            </Row>
        </Container>
    </Jumbotron>
  );
}

export default ControlPanel;
