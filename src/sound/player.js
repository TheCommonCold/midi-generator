import * as Tone from 'tone'

const synth = new Tone.PolySynth(Tone.Synth).toDestination();


export function playProgression(chords, rythm){
  let lengths = rythm
  let delay = 0
  for(let i = 0; i<lengths.length; i++){
      setTimeout(function(){ playChord(chords[i],lengths[i]*1000); }, delay*1000);
      delay += lengths[i]
  }
}

export function playChord(chord,duration){
  const now = Tone.now()
  synth.triggerAttack(chord, now);
  synth.triggerRelease(chord, now + duration);
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
