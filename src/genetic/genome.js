export class Genome{
    constructor(chords, rythm, scale){
        let chordNotes = chords.map(chord => chord.chord)
        if(!chordNotes.flat()){
            chordNotes = chords.map(chord => chord.root)
        }
        const notes = [...new Set(chordNotes.flat())]
        //let mean = notes.reduce((a, b) => a + b) / notes.length;
        const length = rythm.reduce((a, b) => a + b);
        
        this.scale= scale
        this.length= length
        this.switches= rythm.length
        //this.mean= mean
    }
}