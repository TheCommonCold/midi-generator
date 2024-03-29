import { Genome } from "./genome";
import { constructRythm, rythms, mapRythm } from "./rythm";
import { Note } from "./note";
import { RandomChord } from "./chords";
import { synth, getPlaying, setPlaying, getTempo } from "./synth";
import { constructVoicing } from "./population";
import * as Tone from "tone";
import midiWriter from "midi-writer-js";
import FileSaver from "file-saver";

export function createRandomProgression(
  jazziness,
  numberOfNotes,
  noteLengths = 0,
  progressionLength
) {
  let octave = 0;
  let notes = [];
  let lengths = constructRythm(progressionLength, noteLengths);
  const scale = Math.floor(Math.random() * 12);
  for (let i = 0; i < lengths.length; i++) {
    const chord = RandomChord(octave, "major", numberOfNotes - 1, jazziness);
    notes.push({
      chord: chord.chord.map(
        (x) => new Note(x + scale, lengths[i].beginning, lengths[i].rythm)
      ),
      root: new Note(
        chord.root + scale,
        lengths[i].beginning,
        lengths[i].rythm
      ),
    });
  }

  const genome = new Genome(notes, lengths, scale);
  return new Progression({
    notes: notes,
    rythm: lengths.map((x) => x.rythm),
    genome: genome,
  });
}

export class Progression {
  constructor({ rythm, genome, score = 1, notes, amIPlaying = false }) {
    this.notes = notes;
    this.rythm = rythm;
    this.genome = genome;
    this.score = score;

    this.amIPlaying = amIPlaying;
  }

  getAllNotes() {
    return this.notes.map((chord) => [...chord.chord, chord.root]).flat();
  }

  play(callback) {
    console.log("play")
    Tone.start()
    synth.sync();
    if (Tone.Transport.state === "stopped") {
      setPlaying(1);
      let end = 0;
      const notes = this.getAllNotes();
      for (let i = 0; i < notes.length; i++) {
        synth.triggerAttack(
          notes[i].note,
          (notes[i].start * 2 * 120) / getTempo()
        );
        synth.triggerRelease(
          [notes[i].note],
          (notes[i].end * 2 * 120) / getTempo()
        );
        if (notes[i].end > end) end = notes[i].end;
      }
      Tone.Transport.start();
      callback();
      clearTimeout(getPlaying().timeout);
      setPlaying({
        timeout: setTimeout(function () {
          callback();
          synth.releaseAll();
          Tone.Transport.stop();
          Tone.Transport.cancel();
        }, (end * 2 * 1000 * 120) / getTempo()),
        whichOne: () => callback(),
      });
    } else {
      clearTimeout(getPlaying().timeout);
      Tone.Transport.stop();
      Tone.Transport.cancel();
      synth.releaseAll();
      if (!this.amIPlaying) {
        if (getPlaying().whichOne) getPlaying().whichOne();
        this.play(callback);
      } else {
        if (getPlaying().whichOne) getPlaying().whichOne();
      }
    }
  }

  stop(){
    clearTimeout(getPlaying().timeout);
    Tone.Transport.stop();
    Tone.Transport.cancel();
    synth.releaseAll();
  }

  compare(progression) {
    const notes = progression.getAllNotes().map((note) => JSON.stringify(note));
    const thisNotes = this.getAllNotes().map((note) => JSON.stringify(note));
    let counter = 0;
    for (let i = 0; i < notes.length; i++) {
      if (thisNotes.includes(notes[i])) counter++;
    }
    if (counter === notes.length) return true;
    return false;
  }

  download() {
    var track = new midiWriter.Track();

    for (let i = 0; i < this.notes.length; i++) {
      track.addEvent(
        [
          new midiWriter.NoteEvent({
            pitch: [
              ...this.notes[i].chord.map((x) => x.note),
              this.notes[i].root.note,
            ],
            duration: mapRythm(this.rythm[i]),
          }),
        ],
        function (event, index) {
          return { sequential: false };
        }
      );
    }

    var write = new midiWriter.Writer(track);
    let blob;
    blob = new Blob([write.buildFile()], {
      type: "audio/midi",
    });
    FileSaver.saveAs(blob, "midi");
  }

  transpose(scale) {
    const diff = scale - this.genome.scale;
    const notes = this.notes.map((chord) => {
      return {
        chord: chord.chord.map(
          (x) => new Note(x.hight + diff, x.start, x.duration)
        ),
        root: new Note(
          chord.root.hight + diff,
          chord.root.start,
          chord.root.duration
        ),
      };
    });
    const genome = new Genome(notes, this.rythm, this.genome.scale + diff);
    return new Progression({ ...this, genome, notes });
  }

  mutate(jazziness, noteLengths, mutationChance) {
    let newProgression = this.mutateScale();
    newProgression = this.mutateRythm(mutationChance, jazziness, noteLengths);
    newProgression = this.mutateMelody(mutationChance, jazziness);
    return newProgression;
  }

  mutateMelody(p, jazziness) {
    let newRythm = [];
    let notes = [];
    let beginning = 0;
    for (let i = 0; i < this.rythm.length; i++) {
      if (Math.random() < p && i < this.rythm.length - 1) {
        const tmp = RandomChord(
          0,
          "major",
          this.notes[0].chord.length,
          jazziness
        );
        const root = new Note(
          tmp.root + this.genome.scale,
          beginning,
          this.rythm[i]
        );
        const chord = tmp.chord.map((x) => x + this.genome.scale);
        notes.push({
          chord: chord.map((note) => new Note(note, beginning, this.rythm[i])), // eslint-disable-line
          root: new Note(root.hight, beginning, this.rythm[i]),
        });
        newRythm.push(this.rythm[i]);
        beginning += this.rythm[i];
        continue;
      }
      newRythm.push(this.rythm[i]);
      beginning += this.rythm[i];
      notes.push(this.notes[i]);
    }
    const genome = new Genome(notes, newRythm, this.genome.scale);
    return new Progression({ ...this, genome, notes, rythm: newRythm });
  }

  mutateScale() {
    const newScale = Math.floor(Math.random() * 3) - 1 + this.genome.scale;
    return this.transpose(newScale);
  }

  mutateRythm(p, jazziness, window) {
    let temp;
    const [tempNewRythm, tempNotes] = this.joinChord(p, jazziness);
    temp = new Progression({ ...this, notes: tempNotes, rythm: tempNewRythm });
    const [newRythm, notes] = temp.breakChord(p, jazziness, window);
    const genome = new Genome(notes, newRythm, this.genome.scale);
    return new Progression({ ...this, genome, notes, rythm: newRythm });
  }

  breakChord(p, jazziness, window) {
    let newRythm = [];
    let notes = [];
    let beginning = 0;
    const max = window.max;
    const min = window.min;
    for (let i = 0; i < this.rythm.length; i++) {
      let avaibleRythms = [];
      rythms.forEach((x, index) => {
        if (x < this.rythm[i] && index < max && index >= min)
          avaibleRythms.push(x);
      });
      if (Math.random() < p && avaibleRythms.length > 0) {
        const choice =
          avaibleRythms[Math.floor(Math.random() * avaibleRythms.length)];

        const tmp = RandomChord(
          0,
          "major",
          this.notes[0].chord.length,
          jazziness
        );
        const root = new Note(
          tmp.root + this.genome.scale,
          beginning,
          this.rythm[i]
        );
        const chord = tmp.chord.map((x) => x + this.genome.scale);

        if (Math.round(Math.random()) <= 2) {
          notes.push({
            chord: this.notes[i].chord.map(
              (note) => new Note(note.hight, beginning, choice) // eslint-disable-line
            ),
            root: new Note(this.notes[i].root.hight, beginning, choice),
          });
          notes.push({
            chord: chord.map(
              (note) => // eslint-disable-line
                new Note(note, beginning + choice, this.rythm[i] - choice)
            ),
            root: new Note(
              root.hight,
              beginning + choice,
              this.rythm[i] - choice
            ),
          });
          newRythm.push(this.rythm[i] - choice);
          newRythm.push(choice);
        } else {
          notes.push({
            chord: chord.map((note) => new Note(note, beginning, choice)), // eslint-disable-line
            root: new Note(root.hight, beginning, choice),
          });
          notes.push({
            chord: this.notes[i].chord.map(
              (note) => // eslint-disable-line
                new Note(note.hight, beginning + choice, this.rythm[i] - choice) 
            ),
            root: new Note(
              this.notes[i].root.hight,
              beginning + choice,
              this.rythm[i] - choice
            ),
          });
          newRythm.push(choice);
          newRythm.push(this.rythm[i] - choice);
        }

        beginning += this.rythm[i];
        continue;
      }
      newRythm.push(this.rythm[i]);
      beginning += this.rythm[i];
      notes.push(this.notes[i]);
    }
    return [newRythm, notes];
  }

  joinChord(p, jazziness) {
    let newRythm = [];
    let notes = [];
    let beginning = 0;
    for (let i = 0; i < this.rythm.length; i++) {
      if (Math.random() < p && i < this.rythm.length - 1) {
        const chordsToJoin = [
          ...this.notes[i].chord,
          ...this.notes[i + 1].chord,
        ];
        const root = this.notes[i + Math.round(Math.random())].root;
        const chord = constructVoicing(
          chordsToJoin,
          root,
          this.genome.scale,
          jazziness,
          this.notes[i].chord.length
        );
        notes.push({
          chord: chord.map(
            (note) => // eslint-disable-line
              new Note(note, beginning, this.rythm[i] + this.rythm[i + 1])
          ),
          root: new Note(
            root.hight,
            beginning,
            this.rythm[i] + this.rythm[i + 1]
          ),
        });
        newRythm.push(this.rythm[i] + this.rythm[i + 1]);
        beginning += this.rythm[i] + this.rythm[i + 1];
        i++;
        continue;
      }
      newRythm.push(this.rythm[i]);
      beginning += this.rythm[i];
      notes.push(this.notes[i]);
    }
    return [newRythm, notes];
  }
}
