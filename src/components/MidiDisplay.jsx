import React, {useEffect} from 'react';
import '../style/App.css';
import midiFile from '../files/midi.mid';
import midiParser from 'midi-parser-js';
import {Container, Row, Col, Button} from 'reactstrap'
import {createRandomProgression} from '../sound/chords'
import {playProgression} from '../sound/player'


function makeGrid(height=60, progression){

  const play = () => {
    playProgression(progression.chords, progression.rythm)
  }

  const baseLine = 24
  let cols = []
  let length = 0
  for(let j = 0; j<progression.rythm.length; j++ ){
    length+=progression.rythm[j]
  }
  for(let j = 0; j<progression.chords.length; j++ ){
    const chord = progression.chords[j]
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
    cols.push(<div style={{height: '100%', width: (progression.rythm[j]/length*100).toString()+'%'}}>{rows.reverse()}</div>)
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

function MidiDisplay() {
  const progressions = [createRandomProgression(),createRandomProgression(),createRandomProgression(),createRandomProgression()]

    useEffect(() => {
        async function getData() {
          const response = await fetch(midiFile)
          const reader = response.body.getReader()
          const result = await reader.read()
          const results =  midiParser.parse(result.value)
          console.log(results)
          const noteBeginnings = results.track[0].event.filter(x => x.type===9 )
          const noteEndings  = results.track[0].event.filter(x => x.type===8 )

          let notes = []
          for(let i = 0; i<noteBeginnings.length; i++){
            for(let j = 0; j<noteBeginnings.length; j++){
              if (noteBeginnings[i].data[0] === noteEndings[j].data[0]){
                notes.push({note: noteBeginnings[i].data[0], startTime: noteBeginnings[i].deltaTime, endTime: noteEndings[j].deltaTime})
              }
            }
          }

        }
        getData()
      }, [])

  return (
    <Container>
      <Row>
        {progressions.map(progression => {
          return (
            <Col>
            {makeGrid(48,progression)}
          </Col>
          )
        })}
      </Row>
    </Container>
  );
}

export default MidiDisplay;
