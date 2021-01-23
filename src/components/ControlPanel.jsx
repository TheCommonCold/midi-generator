import React, {useEffect, useState} from 'react';
import {Jumbotron, Container, Row, Col} from 'reactstrap'
import { useDispatch } from 'react-redux'
import {Button, TextField} from '@material-ui/core';

import {createPopulation} from '../genetic/population'
import {addSpeciman, deletePopulation} from '../actions/populationActions'
import NewGeneration from './NewGeneration'
import { setTempo } from '../genetic/synth'

function ControlPanel() {
    const [generation, setGeneration] = useState(0)

    const [state, setState] = useState({
        populationSize: 8,
        jazziness: 5,
        numberOfNotes: 4,
        progressionLength: 4,
        windowmin:2,
        windowmax:6
    })

    const [tempo, settempo] = useState(120)

    const dispatch = useDispatch()

    let disabled = 0
    if(generation>0)
        disabled = 1

    const handleChange = (e) => {
        if(e.target.name==='tempo'){
            settempo(e.target.value)
            setTempo(e.target.value)
        }
        else
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
        createPopulation(state.populationSize, state.jazziness, state.numberOfNotes, {min:state.windowmin,max:state.windowmax}, state.progressionLength).map(x => dispatch(addSpeciman(x)))
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
                <Col><TextField name='tempo' label="Tempo" type="number" onChange={handleChange} value={tempo}/></Col>
                <Col><TextField disabled={disabled} name='progressionLength' label="Progression Length" type="number" onChange={handleChange} value={state.progressionLength}/></Col>
                <Col><TextField disabled={disabled} name='populationSize' label="Population size" type="number" onChange={handleChange} value={state.populationSize}/></Col>
            </Row>
            <Row className='p-5'>
                        <Col>
                        <TextField disabled={disabled} name='windowmin' label="Min note len" type="number" onChange={handleChange} value={state.windowmin}/>
                        </Col>
                        <Col>
                        <TextField disabled={disabled} name='windowmax' label="Max note len" type="number" onChange={handleChange} value={state.windowmax}/>
                        </Col>
                        <Col><TextField disabled={disabled} name='jazziness' label="Jazziness" type="number" onChange={handleChange} value={state.jazziness}/></Col>
                <Col><TextField disabled={disabled} name='numberOfNotes' label="Number of notes" type="number" onChange={handleChange} value={state.numberOfNotes}/></Col> 
                    </Row>
            <Row>
                <Button variant="contained" color="primary" onClick={restart}>
                    Restart
                </Button>
                <NewGeneration updateGeneration={updateGeneration} params={state}/>
            </Row>
        </Container>
    </Jumbotron>
  );
}

export default ControlPanel;
