import React, { useState, useEffect } from "react";
import MidiDisplay from "./MidiDisplay";
import { Container, Row, Col } from "reactstrap";
import { useSelector } from "react-redux";

function Grid() {
  const numberPerRow = 4;
  const population = useSelector((state) => {
    return state.population;
  });

  const [populationFormatted, setPopulationFormatted] = useState([]);
  useEffect(() => {
    let arr = [...population];
    let populationFormatted = [];
    while (arr.length) populationFormatted.push(arr.splice(0, numberPerRow));
    setPopulationFormatted(populationFormatted);
  }, [population]);

  const max = Math.max(
    ...population.map((progression) =>
      Math.max(
        ...progression.notes.map((chord) =>
          Math.max(...chord.chord.map((note) => note.hight), chord.root.hight)
        )
      )
    )
  );

  const min = Math.min(
    ...population.map((progression) =>
      Math.min(
        ...progression.notes.map((chord) =>
          Math.min(...chord.chord.map((note) => note.hight), chord.root.hight)
        )
      )
    )
  );

  return (
    <Container className="p-4">
      <Container>
        {populationFormatted.map((row, i) => {
          return (
            <Row key={i}>
              {row.map((progression, j) => {
                return (
                  <Col
                    className="m-1 midi-field"
                    key={j}
                    style={{ height: "170px", minWidth: "150px" }}
                  >
                    <MidiDisplay
                      progression={progression}
                      index={i * numberPerRow + j}
                      max={max}
                      min={min}
                    />
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </Container>
    </Container>
  );
}

export default Grid;
