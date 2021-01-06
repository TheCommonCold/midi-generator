import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'reactstrap'
import { useDispatch } from 'react-redux'
import {Button, TextField} from '@material-ui/core';

import {createPopulation} from '../genetic/population'
import {addSpeciman, deletePopulation} from '../actions/populationActions'

function ControlPanel() {
    const [generation, setGeneration] = useState(0)

    const [state, setState] = useState({
        populationSize: 16,
        jazziness: 2,
        numberOfNotes: 3,
    })
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const restart = () => {
        setGeneration(0)
        dispatch(deletePopulation())
        createPopulation(state.populationSize, state.jazziness, state.numberOfNotes).map(x => dispatch(addSpeciman(x)))
    }

    useEffect(() => {
        restart()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [state]);


  return (
    <Container>
        <Row>
            <h2>Generation: {generation}</h2>
        </Row>
        <Row className='p-5'>
            <Col><TextField name='populationSize' label="Population size" type="number" onChange={handleChange} value={state.populationSize}/></Col>
            <Col><TextField name='jazziness' label="Jazziness" type="number" onChange={handleChange} value={state.jazziness}/></Col>
            <Col><TextField name='numberOfNotes' label="Number of notes" type="number" onChange={handleChange} value={state.numberOfNotes}/></Col>
        </Row>
        <Row>
            <Button variant="contained" color="primary" onClick={restart}>
                Restart
            </Button>
        </Row>
    </Container>
  );
}

export default ControlPanel;
