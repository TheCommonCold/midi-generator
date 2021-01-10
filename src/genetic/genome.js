export class Genome{
    constructor(chords, rythm, scale){
        const notes = [...new Set(chords.flat())]
        let mean = notes.reduce((a, b) => a + b) / notes.length;
        const length = rythm.reduce((a, b) => a + b);
        
        this.scale= scale
        this.length= length
        this.notes= notes
        this.switches= rythm.length
        this.mean= mean
    }
}