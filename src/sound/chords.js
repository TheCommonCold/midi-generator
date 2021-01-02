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


export function createRandomProgression(){
    let chords = []
    let lengths = constructRythm(8)
    for(let i = 0; i<lengths.length; i++){
        chords.push(RandomChord(0,'major',2,5))
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

    let chord = randomVoicing(mode, numberOfNotes,scale.notes,jazziness)

    let transposed = chord.map(x => x + rootNote +36 + (12*octave))
    if(Math.random()-(1/4)>rootNote/12)
        rootNote+=12
    // transposed.push(rootNote+24)
    transposed.push(rootNote+12)

    return transposed
}

function randomVoicing(mode,numberOfNotes, scale, jazziness=5){
    let chord = []
    for(let i = 0; i<numberOfNotes; i++){
        const choice = Math.floor(Math.random() * jazziness)
        let note = chords[mode][choice];
        if (chord.includes(note) || !scale.includes(note))
        {
            i--
            continue
        }
        if(Math.random()<choice/24)
            note+=12
        chord.push(note)
    }
    return chord
}
