import { Genome } from './genome'
import {constructRythm} from './rythm'
import { Note } from './note'
import { RandomChord } from './chords'
import { synth } from './synth'
import * as Tone from 'tone'

export function createRandomProgression(jazziness, numberOfNotes, noteLengths=0){
    let octave = 0
    let notes = []
    let lengths = constructRythm(8, noteLengths)
    const scale = Math.floor(Math.random() * 12)
    for(let i = 0; i<lengths.length; i++){
        const chord = RandomChord(octave,'major',numberOfNotes-1,jazziness)
        notes.push({chord: chord.chord.map(x=>new Note(x+scale,lengths[i].beginning, lengths[i].rythm)), root: new Note(chord.root+scale,lengths[i].beginning, lengths[i].rythm)})
    }
        
    const genome = new Genome(notes, lengths, scale)
    return new Progression({notes: notes, rythm: lengths.map(x=>x.rythm), genome: genome })
}

export class Progression{
    constructor({rythm, genome, score= 10, notes}){
        this.notes = notes
        this.rythm = rythm
        this.genome = genome
        this.score = score
    }

    getAllNotes(){
        return this.notes.map(chord => [...chord.chord, chord.root]).flat()
    }

    play(){
        const notes = this.getAllNotes()
        const now = Tone.now()
        for(let i = 0; i<notes.length; i++){
          synth.triggerAttack(notes[i].note, now+notes[i].start);
          synth.triggerRelease([notes[i].note],now+notes[i].end);
        }
      }

    transpose(scale){
        const diff = scale - this.genome.scale
        const notes = this.notes.map(chord => { return {chord: chord.chord.map(x=>new Note(x.hight+diff, x.start, x.duration)), root: new Note(chord.root.hight+diff, chord.root.start, chord.root.duration)}})
        const genome = new Genome(notes, this.rythm, this.genome.scale + diff)
        return new Progression({...this,genome, notes })
    }
}
