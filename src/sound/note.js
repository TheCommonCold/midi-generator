export class Note{
    constructor(hight, start, duration) {
        this.hight = hight
        this.start = start
        this.end = start+duration
        this.duration = duration
    }

    existsInWindow(window){
        if((window[0]>=this.start && window[0]<=this.end)||(window[1]>=this.start && window[1]<=this.end)){
            return true
        }
        return false
    }
}