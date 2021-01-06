import React, { useEffect, useState } from 'react';

function DisplayNotes({notes}){
    const [cols, setCols] = useState([])
    useEffect(() => {
        const height = Math.max(...notes.chords.map(chord => Math.max(...chord)))
        const baseLine = Math.min(...notes.chords.map(chord => Math.min(...chord)))
        let cols=[]
        let length = 0
        for(let j = 0; j<notes.rythm.length; j++ ){
            length+=notes.rythm[j]
        }
        for(let j = 0; j<notes.chords.length; j++ ){
            const chord = notes.chords[j]
            let rows = []
            for(let i = baseLine; i<=height; i++ ){
            if(chord.includes(i))
                rows.push(
                <div key={j.toString()+i.toString()} style={{height: (1/(height-baseLine)*100).toString()+'%', width:'100%', "backgroundColor":'#c62828'}}>
                </div>)
            else
                rows.push(
                <div key={j.toString()+i.toString()} style={{height: (1/(height-baseLine)*100).toString()+'%', width:'100%'}}>
                </div>)
            }
            cols.push(<div key={j} style={{height: '100%', width: (notes.rythm[j]/length*100).toString()+'%'}}>{rows.reverse()}</div>)
        }
        setCols(cols)
      }, [notes]);
  return cols;
}

export default React.memo(DisplayNotes);