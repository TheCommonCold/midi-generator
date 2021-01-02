import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap'
import {playProgression} from '../sound/player'


function MidiDisplay(props){
  const height = 60

  const play = () => {
    playProgression(props.progression.chords, props.progression.rythm)
  }

  const baseLine = 12
  let cols = []
  let length = 0
  for(let j = 0; j<props.progression.rythm.length; j++ ){
    length+=props.progression.rythm[j]
  }
  for(let j = 0; j<props.progression.chords.length; j++ ){
    const chord = props.progression.chords[j]
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
    cols.push(<div style={{height: '100%', width: (props.progression.rythm[j]/length*100).toString()+'%'}}>{rows.reverse()}</div>)
  }
  return (<Container>
    <Row>
    <Row className='w-100' style={{height:"200px"}}>{cols}</Row>
    <Col>
      <Button className='w-100' onClick={play}>Play progression</Button>
      </Col>
    </Row>
  </Container>)
}

export default MidiDisplay;
