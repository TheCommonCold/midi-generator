const rythms = [1/2,3/4,1,3/2,2,3,4]
// const lengths = [2,4,8]

export function constructRythm(length){
    let currentLength = 0;
    let rythmStructure = []
    while(currentLength<length){
        let diff = 0 ;
        let randomNumber = Math.floor(Math.random() * rythms.length)

        if(currentLength+rythms[randomNumber]-diff>length){
            diff = length - currentLength
            currentLength+=diff
            rythmStructure.push(diff)
            return rythmStructure
        }

        currentLength+=rythms[randomNumber]-diff
        rythmStructure.push(rythms[randomNumber]-diff)
    }

    return rythmStructure
}