import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import {playProgression} from '../sound/player'
import { useDispatch } from 'react-redux'
import Slider from '@material-ui/core/Slider';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import DisplayNotes from './DisplayNotes'
import { setSpecimanScore} from '../actions/populationActions'

function MidiDisplay(props){
  const dispatch = useDispatch()

  const setScore = (_, value) => {
    dispatch(setSpecimanScore({index: props.index ,score: value}))
  }

  const play = () => {
    playProgression(props.progression.notes, props.progression.rythm)
  }

  return (<Container className='p-0 h-100'>
      <Row className='w-100 m-0 h-75'>
          <DisplayNotes color='#c62828' notes={props.progression} />
          <div className='vote' onClick={play}><PlayCircleOutlineIcon style={{ fontSize: 80 }} className='vote-text'/></div>
      </Row>
      <Row>
        <Col sm={3}>
          <small>
            Score
          </small>
        </Col>
        <Col>
        <Slider
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          min={0}
          max={100}
          onChange={setScore}
          value={props.progression.score}
        />
        </Col>
      </Row>
  </Container>)
}

export default React.memo(MidiDisplay);
