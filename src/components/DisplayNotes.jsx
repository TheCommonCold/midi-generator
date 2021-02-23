import React, { useEffect, useState } from "react";
import { Row } from "reactstrap";

export function DisplayNotes({ progression, max, min }) {
  const [cols, setCols] = useState([]);
  useEffect(() => {
    const height = max;
    const baseLine = min;
    let cols = [];
    let length = 0;
    for (let j = 0; j < progression.rythm.length; j++) {
      length += progression.rythm[j];
    }
    for (let j = 0; j < progression.notes.length; j++) {
      const chord = [
        ...progression.notes[j].chord,
        progression.notes[j].root,
      ].map((note) => note.hight);
      let rows = [];
      for (let i = baseLine; i <= height; i++) {
        if (chord.includes(i))
          rows.push(
            <div
              key={j.toString() + i.toString()}
              style={{
                height: ((1 / (height - baseLine + 1)) * 100).toString() + "%",
                width: "100%",
                backgroundColor: "#c62828",
              }}
            ></div>
          );
        else
          rows.push(
            <div
              key={j.toString() + i.toString()}
              style={{
                height: ((1 / (height - baseLine + 1)) * 100).toString() + "%",
                width: "100%",
              }}
            ></div>
          );
      }
      cols.push(
        <div
          key={j}
          style={{
            height: "100%",
            width: ((progression.rythm[j] / length) * 100).toString() + "%",
          }}
        >
          {rows.reverse()}
        </div>
      );
    }
    setCols(cols);
  }, [progression, max, min]);
  return <Row className="w-100 m-0 h-100">{cols}</Row>;
}

export default React.memo(DisplayNotes);
