import React, {useState} from 'react';
import {Container, Row, Col, Button} from 'reactstrap'
import {playProgression} from '../sound/player'


function MidiDisplay(props){

  const [score, setScore] = useState(props.progression.score)

  const height = 60

  const increaseScore = () => {
    setScore(score+1)
  }

  const decreaseScore = () => {
    setScore(score-1)
  }

  const play = () => {
    playProgression(props.progression.notes.chords, props.progression.notes.rythm)
  }

  const baseLine = 12
  let cols = []
  let length = 0
  for(let j = 0; j<props.progression.notes.rythm.length; j++ ){
    length+=props.progression.notes.rythm[j]
  }
  for(let j = 0; j<props.progression.notes.chords.length; j++ ){
    const chord = props.progression.notes.chords[j]
    let rows = []
    for(let i = baseLine; i<height+baseLine; i++ ){
      if(chord.includes(i))
        rows.push(
          <div style={{height: (1/height*100).toString()+'%', width:'100%', "background-color":'red'}}>
          </div>)
      else
        rows.push(
          <div style={{height: (1/height*100).toString()+'%', width:'100%'}}>
          </div>)
    }
    cols.push(<div style={{height: '100%', width: (props.progression.notes.rythm[j]/length*100).toString()+'%'}}>{rows.reverse()}</div>)
  }
  return (<Container className='p-0'>
      <Row className='w-100 m-0' style={{height:"200px"}}>
          <div className='vote up' onClick={increaseScore}><div className='vote-text'>🡅</div></div>
          <div className='vote down' onClick={decreaseScore}><div className='vote-text'>🡇</div></div>
          {cols}
      </Row>
      <Row>
        <Col>
          <Button className='w-100 p-0' onClick={play}>Play</Button>
        </Col>
        <Col sm={1}>
        {score}
        </Col>
      </Row>
  </Container>)
}

export default MidiDisplay;
