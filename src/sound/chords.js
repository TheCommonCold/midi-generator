import {constructRythm} from './rythm'

const maj = 'major'
const min = 'minor'


const scales = {
    major: {
        notes: [0,2,4,5,7,9,11],
        mode: [maj,min, min, maj, maj, min, min]
    }
}

const chords = {
    major:[0,4,7,2,11,6,9,1,8,3,10,5],
    minor:[0,3,7,2,10,5,9,4,11,6,8,1]
}


export function createRandomProgression(jazziness, numberOfNotes){
    let chords = []
    let lengths = constructRythm(8)
    for(let i = 0; i<lengths.length; i++){
        chords.push(RandomChord(0,'major',numberOfNotes,jazziness+3))
    }
    const scale = Math.floor(Math.random() * 12)

    chords = chords.map(chord => chord.map(note => note + scale))

    return {chords, rythm: lengths}
}

export function RandomChord(octave,scaleType,numberOfNotes, jazziness){
    const scale = scales[scaleType]
    const randomNote = Math.floor(Math.random() * scale.notes.length);

    const mode = scale.mode[randomNote]
    let rootNote = scale.notes[randomNote]

    let chord = randomVoicing(rootNote,mode, numberOfNotes,scale.notes,jazziness,octave)

    let transposed = chord.map(x => x + 36 + (12*octave))
    if(Math.random()-(1/4)>rootNote/12)
        rootNote+=12
    // transposed.push(rootNote+24)
    transposed.push(rootNote+12)

    return transposed
}

function randomVoicing(root,mode,numberOfNotes, scale, jazziness=5, octave, dispersion = 0){
    let chord = []
    let overload=0
    for(let i = 0; i<numberOfNotes; i++){
        const choice = Math.floor(Math.random() * jazziness + Math.floor(overload/(jazziness*2)))
        let note = chords[mode][choice];
        note += root
        if(Math.random()<(((choice/(1+octave))/12) - dispersion)){
            note+=12
        }
        if(Math.random()<(((note/2*(1+octave))/12) - dispersion) && choice!==0){
            note-=12
        }

        if (chord.includes(note) || !scale.includes(note%12))
        {
            overload++
            i--
            continue
        }

        chord.push(note)
    }
    return chord
}
