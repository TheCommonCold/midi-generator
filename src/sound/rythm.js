
const rythms = [1/8,1/4,1/2,3/4,1,3/2,2,3,4]
// const lengths = [2,4,8]

export function constructRythm(length, window){
    window=window-rythms.length+1
    let currentLength = 0;
    let rythmStructure = []
    let previousValue= 0
    while(currentLength<length){
        let diff = 0 ;
        let randomNumber = Math.floor(Math.random() * (rythms.length - Math.abs(window)))+Math.max(window,0) 
        if(Math.random()<0.25){
            randomNumber = previousValue
        } else {
            previousValue = randomNumber
        }

        if(currentLength+rythms[randomNumber]-diff>length){
            diff = length - currentLength
            rythmStructure.push({rythm: diff,beginning: currentLength})
            currentLength+=diff
            return rythmStructure
        }

        rythmStructure.push({rythm: rythms[randomNumber]-diff,beginning: currentLength})
        currentLength+=rythms[randomNumber]-diff
    }

    return rythmStructure
}