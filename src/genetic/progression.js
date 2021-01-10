import { Genome } from './genome'
import {constructRythm} from './rythm'
import { Note } from './note'
import { RandomChord } from './chords'
import { synth } from './synth'
import * as Tone from 'tone'

export function createRandomProgression(jazziness, numberOfNotes, noteLengths=0){
    let octave = 0
    let chords = []
    let roots = []
    let notes = []
    let lengths = constructRythm(8, noteLengths)
    const scale = Math.floor(Math.random() * 12)
    for(let i = 0; i<lengths.length; i++){
        const chord = RandomChord(octave,'major',numberOfNotes-1,jazziness+3)
        roots.push(chord.root+scale)
        chords.push(chord.chord.map(x=>x+scale))
        chord.chord.map(x => notes.push(new Note(x+scale,lengths[i].beginning, lengths[i].rythm)))
        notes.push(new Note(chord.root+scale,lengths[i].beginning, lengths[i].rythm))
    }
        
    chords = chords.map((_, index) => [...chords[index],roots[index]])
    const genome = new Genome(chords, lengths, scale)
    return new Progression({notes: chords, rythm: lengths.map(x=>x.rythm), genome: genome, notes2:notes })
}

export class Progression{
    constructor({notes, rythm, genome, notes2, score= 10}){
        this.notes = notes
        this.rythm = rythm
        this.genome = genome
        this.notes2 = notes2
        this.score = score
    }

    play(){
        const now = Tone.now()
        for(let i = 0; i<this.notes2.length; i++){
          synth.triggerAttack(this.notes2[i].note, now+this.notes2[i].start);
          synth.triggerRelease([this.notes2[i].note],now+this.notes2[i].end);
        }
      }

    transpose(scale){
        const diff = scale - this.genome.scale
        const genome = new Genome(this.notes, this.rythm, this.genome.scale + diff)
        const notes = this.notes.map(notes => notes.map(note => note + diff))
        const notes2 = this.notes2.map(note => new Note(note.hight + diff, note.start, note.duration))
        return new Progression({...this,genome, notes, notes2 })
    }
}
