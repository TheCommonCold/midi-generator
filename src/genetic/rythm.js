export const rythms = [
    1/8,
    1/4,
    1/2,
    3/4,
    1,
    2,
    3,
    4
]

export function mapRythm(input){
    let output = []
    let sum = input
    while(sum!==0){
        for(let i = rythmMap.length-1; i >= 0; i--){
            const currentValue = 1/parseInt(rythmMap[i])
            if(sum>=currentValue){
                output.push(rythmMap[i])
                sum-=currentValue
                break
            }
        }
    }
    return output
}

export const rythmMap = [
    '64',
    '32',
    '16',
    '8',
    '4',
    '2',
    '1',
]
// const lengths = [2,4,8]

export function constructRythm(length, window){
    let currentLength = 0;
    let rythmStructure = []
    let previousValue= 0

    const max = window.max
    const min = window.min
    while(currentLength<length){
        let diff = 0 ;
        let randomNumber = Math.floor(Math.random() *  (max-min))+min 
        if(Math.random()<0.4 && previousValue!==0){
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