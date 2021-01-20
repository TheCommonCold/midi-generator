import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import { useDispatch } from 'react-redux'
import Slider from '@material-ui/core/Slider';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

import DisplayNotes from './DisplayNotes'
import { setSpecimanScore} from '../actions/populationActions'

function MidiDisplay({progression, index}){
  const dispatch = useDispatch()

  const setScore = (_, value) => {
    dispatch(setSpecimanScore({index: index ,score: value}))
  }

  const play = () => {
    progression.play()
  }

  const download = () => {
    progression.download()
  }

  return (
  <Container className='p-0 h-100'>
      <Row className='w-100 m-0 h-75'>
          <DisplayNotes color='#c62828' progression={progression} />
          <div className='vote' onClick={play}><PlayCircleOutlineIcon style={{ fontSize: 80 }} className='vote-text'/></div>
          <div className='download' onClick={download}><SaveAltIcon style={{ fontSize: 20 }} className='vote-text'/></div>
      </Row>
      <Row>
        <Col sm={3}>
          <small>
            Score
          </small>
        </Col>
        <Col sm={1} className='pl-2'>
          <small>
            {progression.score}
          </small>
        </Col>
        <Col className='pl-2'>
        <Slider
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          min={0}
          max={100}
          onChange={setScore}
          value={progression.score}
        />
        </Col>
      </Row>
  </Container>)
}

export default React.memo(MidiDisplay);
