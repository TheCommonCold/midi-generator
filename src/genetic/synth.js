import * as Tone from "tone";

const gain = new Tone.Gain(0.2).toDestination();
const filter = new Tone.Filter({
  frequency: 1000,
  type: "lowpass",
  rolloff: -12,
  Q: 0,
}).connect(gain);

var isPlaying = 0;
var tempo = 120;

export function getPlaying() {
  return isPlaying;
}

export let currentlyPlaying = null;

export function setPlaying(x) {
  isPlaying = x;
}

export function getTempo() {
  return tempo;
}

export function setTempo(x) {
  tempo = x;
}

export const synth = new Tone.PolySynth(Tone.Synth, {
  oscillator: {
    count: 2,
    spread: 5,
    type: "sawtooth",
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

// synth.sync()
document.querySelector('button')?.addEventListener('click', async () => {
  await Tone.start()
  console.log('audio is ready')
})