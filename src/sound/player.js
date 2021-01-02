import * as Tone from 'tone'

const gain = new Tone.Gain(0.2).toDestination();
const filter = new Tone.Filter({frequency: 1000, type: "lowpass", rolloff: -12, Q: 0}).connect(gain);

const synth = new Tone.PolySynth(Tone.Synth,{
  oscillator : {
    count: 2,
    spread: 5,
    type : "sawtooth",
  },
  // envelope: {
  //   attack: 0.01,
  //   decay: 15,
  //   sustain: 0.20,
  //   release: 0.1,
  // },
    envelope: {
    attack: 0.002,
    decay: 0,
    sustain: 1,
    release: 0.1,
  },
}).connect(filter);

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

export function playProgression(chords, rythm){
  let lengths = rythm
  let delay = 0
  for(let i = 0; i<lengths.length; i++){
      setTimeout(function(){ playChord(chords[i],lengths[i]); }, delay*1000);
      delay += lengths[i]
  }
}

export function playChord(chord,duration){
  const now = Tone.now()
  const translatedNotes = translateNumbersIntoNotes(chord)
  synth.triggerAttack(translatedNotes, now);
  synth.releaseAll ( now + duration);
}

function translateNumbersIntoNotes(notes){
  return notes.map(x => {
    const octave = Math.floor(x/12);
    const note = notesMap[x%12];
    return note+octave.toString();
  })
}

export function noteOn(midiNote, duration) {

  var ac = new window.AudioContext();
  var o = ac.createOscillator();
  var g = ac.createGain();
  var f = ac.createBiquadFilter();
  const freq = Math.pow(2, (midiNote-69)/12)*440;
  o.frequency.value = freq;
  o.type = 'sawtooth';
  o.connect(g);
  g.gain.value = 0.25;
  g.connect(f);
  f.frequency.value = 1000;
  f.connect(ac.destination)
  o.start(0);
  setTimeout(function(s) {s.stop(0)}, duration, o);

  // var ac = new (window.AudioContext || window.webkitAudioContext);
  // var freqs = [261.63, 329.63, 392.00];
  // for(var i=0;i<freqs.length;i++) {
  //   var o = ac.createOscillator();
  //   var g = ac.createGain();
  //   o.frequency.value = freqs[i];
  //   o.connect(g);
  //   g.gain.value = 0.25;
  //   g.connect(ac.destination);
  //   o.start(0);
  //   setTimeout(function(s) {s.stop(0)}, 1000, o);
  // }
}
