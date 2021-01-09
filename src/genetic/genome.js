export function calcGenome(chords, rythm, scale) {
    const notes = [...new Set(chords.flat())]
    let mean = notes.reduce((a, b) => a + b) / notes.length;
    const length = rythm.reduce((a, b) => a + b);
    const genome = {scale, length: length, notes: notes, switches: rythm.length, mean: mean}

    return genome
}