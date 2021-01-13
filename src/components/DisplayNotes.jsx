import React, { useEffect, useState } from 'react';
import {Row} from 'reactstrap'

export function DisplayNotes({progression}){
    const [cols, setCols] = useState([])
    useEffect(() => {
        const height = Math.max(...progression.notes.map(chord => Math.max(...chord.chord.map(note => note.hight), chord.root.hight)))
        const baseLine = Math.min(...progression.notes.map(chord => Math.min(...chord.chord.map(note => note.hight), chord.root.hight)))
        // const height = 60
        // const baseLine = 24
        let cols=[]
        let length = 0
        for(let j = 0; j<progression.rythm.length; j++ ){
            length+=progression.rythm[j]
        }
        for(let j = 0; j<progression.notes.length; j++ ){
            const chord = [...progression.notes[j].chord, progression.notes[j].root].map(note => note.hight)
            let rows = []
            for(let i = baseLine; i<=height; i++ ){
                if(chord.includes(i))
                    rows.push(
                    <div key={j.toString()+i.toString()} style={{height: (1/(height-baseLine+1)*100).toString()+'%', width:'100%', "backgroundColor":'#c62828'}}>
                    </div>)
                else
                    rows.push(
                    <div key={j.toString()+i.toString()} style={{height: (1/(height-baseLine+1)*100).toString()+'%', width:'100%'}}>
                    </div>)
            }
            cols.push(<div key={j} style={{height: '100%', width: (progression.rythm[j]/length*100).toString()+'%'}}>{rows.reverse()}</div>)
        }
        setCols(cols)
      }, [progression]);
  return (
    <Row className='w-100 m-0 h-100'>
     {cols}
      </Row>
      );
}

export default React.memo(DisplayNotes);