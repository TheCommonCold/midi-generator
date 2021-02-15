import React, {useEffect, useState} from 'react';
import {Jumbotron, Container, Row, Col} from 'reactstrap'
import { useDispatch } from 'react-redux'
import {Button, TextField, Select, MenuItem, InputLabel} from '@material-ui/core';

import {createPopulation} from '../genetic/population'
import {addSpeciman, deletePopulation} from '../actions/populationActions'
import NewGeneration from './NewGeneration'
import { setTempo } from '../genetic/synth'
import {rythms} from '../genetic/rythm'

function ControlPanel() {
    const [generation, setGeneration] = useState(0)

    const [state, setState] = useState({
        populationSize: 8,
        mutationChance: 0.1,
        jazziness: 5,
        numberOfNotes: 4,
        progressionLength: 4,
        windowmin:rythms[4],
        windowmax:rythms[6]
    })

    const [tempo, settempo] = useState(120)

    const dispatch = useDispatch()

    let disabled = 0
    if(generation>0)
        disabled = 1

    const handleChange = (e) => {

        let contraint = false
        let value = parseFloat(e.target.value)

        if(value>0){
            if(e.target.name==='tempo'){
                settempo(value)
                setTempo(value)
            }
            else
                if(!contraint)
                    setState({
                        ...state,
                        [e.target.name]: value
                    });
        }
    }

    const updateGeneration = () => {
        setGeneration(generation+1)
    }

    const restart = () => {
        setGeneration(0)
        dispatch(deletePopulation())
        createPopulation(state.populationSize, state.jazziness, state.numberOfNotes, {min:rythms.indexOf(state.windowmin),max:rythms.indexOf(state.windowmax)}, state.progressionLength).map(x => dispatch(addSpeciman(x)))
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
                <Col><TextField className='w-100' InputProps={{ inputProps: { min: 1 } }} name='tempo' label="Tempo" type="number" onChange={handleChange} value={tempo}/></Col>
                <Col><TextField className='w-100' InputProps={{ inputProps: { min: 1 } }} disabled={disabled} name='progressionLength' label="Progression Length" type="number" onChange={handleChange} value={state.progressionLength}/></Col>
                <Col><TextField className='w-100' InputProps={{ inputProps: { min: 1 } }} disabled={disabled} name='populationSize' label="Population size" type="number" onChange={handleChange} value={state.populationSize}/></Col>
                <Col><TextField className='w-100' InputProps={{ inputProps: { max: 1 } }} disabled={disabled} name='mutationChance' label="Mutation chance" type="number" onChange={handleChange} value={state.mutationChance}/></Col>
            </Row>
            <Row className='p-5'>
                        <Col>
                            <InputLabel className='m-0' shrink >
                            Min. possible note length
                            </InputLabel>
                            <Select
                            className='w-100'
                            name='windowmin'
                            disabled={disabled}
                            value={state.windowmin}
                            onChange={handleChange}
                            >
                            {rythms.map((rythm, index) => {
                                if(rythm<state.windowmax)
                                return <MenuItem key={index} value={rythm}>{rythm}</MenuItem>
                                else
                                return null
                            })}
                            </Select>
                        </Col>
                        <Col>
                        <InputLabel className='m-0' shrink >
                        Max. possible note length
                            </InputLabel>
                            <Select
                            className='w-100'
                            name='windowmax'
                            disabled={disabled}
                            value={state.windowmax}
                            onChange={handleChange}
                            >
                            {rythms.map((rythm, index) => {
                                if(rythm>state.windowmin)
                                return <MenuItem key={index} value={rythm}>{rythm}</MenuItem>
                                else
                                return null
                            })}
                            </Select>
                        </Col>
                        <Col>
                        <TextField className='w-100' InputProps={{ inputProps: { min: state.numberOfNotes, max:12 } }} disabled={disabled} name='jazziness' label="Chord complexity" type="number" onChange={handleChange} value={state.jazziness}/>
                        </Col>
                        <Col>
                        <TextField className='w-100' InputProps={{ inputProps: { min: 1, max:10} }} disabled={disabled} name='numberOfNotes' label="No. of notes in a chord" type="number" onChange={handleChange} value={state.numberOfNotes}/>
                        </Col> 
                    </Row>
            <Row>
                <Button variant="contained" color="primary" onClick={restart}>
                    Restart
                </Button>
                <NewGeneration updateGeneration={updateGeneration} params={{...state, windowmin: rythms.indexOf(state.windowmin), windowmax:rythms.indexOf(state.windowmax)}}/>
            </Row>
        </Container>
    </Jumbotron>
  );
}

export default ControlPanel;
