import React, { useEffect, useState } from 'react';
import {Row} from 'reactstrap'

export function DisplayNotes({notes}){
    console.log(notes)
    const [cols, setCols] = useState([])
    useEffect(() => {
        const height = Math.max(...notes.notes.map(chord => Math.max(...chord)))
        const baseLine = Math.min(...notes.notes.map(chord => Math.min(...chord)))
        let cols=[]
        let length = 0
        for(let j = 0; j<notes.rythm.length; j++ ){
            length+=notes.rythm[j]
        }
        for(let j = 0; j<notes.notes.length; j++ ){
            const chord = notes.notes[j]
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
            cols.push(<div key={j} style={{height: '100%', width: (notes.rythm[j]/length*100).toString()+'%'}}>{rows.reverse()}</div>)
        }
        setCols(cols)
      }, [notes]);
  return (
    <Row className='w-100 m-0 h-100'>
     {cols}
      </Row>
      );
}

export default React.memo(DisplayNotes);