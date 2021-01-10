const notesMap = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B'
  ]

export class Note{
    constructor(hight, start, duration) {
        this.hight = hight
        this.start = start
        this.end = start+duration
        this.duration = duration

        const octave = Math.floor(hight/12);
        const note = notesMap[hight%12];
        this.note = note+octave.toString();
    }

    existsInWindow(window){
        if((window[0]>=this.start && window[0]<=this.end)||(window[1]>=this.start && window[1]<=this.end)){
            return true
        }
        return false
    }
}