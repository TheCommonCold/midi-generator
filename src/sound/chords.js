import { calcGenome } from '../genetic/genome'
import {constructRythm} from './rythm'
import { Note } from './note'

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


export function createRandomProgression(jazziness, numberOfNotes, noteLengths=0){
    let octave = 0
    let chords = []
    let roots = []
    let notes = []
    let lengths = constructRythm(8, noteLengths)
    for(let i = 0; i<lengths.length; i++){
        const chord = RandomChord(octave,'major',numberOfNotes-1,jazziness+3)
        roots.push(chord.root)
        chords.push(chord.chord)
        chord.chord.map(x => notes.push(new Note(x,lengths[i].beginning, lengths[i].rythm)))
        notes.push(new Note(chord.root,lengths[i].beginning, lengths[i].rythm))
    }
    const scale = Math.floor(Math.random() * 12)

    chords = chords.map(chord => chord.map(note => note + scale))
    roots = roots.map(note => note + scale)
        
    chords = chords.map((_, index) => [...chords[index],roots[index]])
    
    const genome = calcGenome(chords, lengths, scale)
    return {notes: chords, rythm: lengths.map(x=>x.rythm), genome: genome, notes2:notes }
}

export function RandomChord(octave,scaleType,numberOfNotes, jazziness){
    const scale = scales[scaleType]
    const randomNote = Math.floor(Math.random() * scale.notes.length);

    const mode = scale.mode[randomNote]
    let rootNote = scale.notes[randomNote]

    if(numberOfNotes===0){
        rootNote+=12*3
        return {root: rootNote, chord: []}
    }
    let chord = randomVoicing(rootNote,mode, numberOfNotes,scale.notes,jazziness,octave)

    let transposed = chord.map(x => x + 12*(3+octave))
    if(Math.random()-(1/4)>rootNote/12)
        rootNote+=12


    return {chord: transposed, root: rootNote+12}
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