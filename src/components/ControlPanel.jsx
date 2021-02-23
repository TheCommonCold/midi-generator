import React, { useEffect, useState } from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";

import { createPopulation } from "../genetic/population";
import { addSpeciman, deletePopulation } from "../actions/populationActions";
import NewGeneration from "./NewGeneration";
import { setTempo } from "../genetic/synth";
import { rythms } from "../genetic/rythm";

function ControlPanel() {
  const [generation, setGeneration] = useState(0);

  const [state, setState] = useState({
    populationSize: 8,
    mutationChance: 0.1,
    jazziness: 4,
    numberOfNotes: 3,
    progressionLength: 4,
    windowmin: rythms[2],
    windowmax: rythms[5],
  });

  const [tempo, settempo] = useState(120);

  const dispatch = useDispatch();

  let disabled = 0;
  if (generation > 0) disabled = 1;

  const handleChange = (e) => {
    let contraint = false;
    let value = parseFloat(e.target.value);

    if (value > 0) {
      if (e.target.name === "tempo") {
        settempo(value);
        setTempo(value);
      } else if (!contraint)
        setState({
          ...state,
          [e.target.name]: value,
        });
    }
  };

  const updateGeneration = () => {
    setGeneration(generation + 1);
  };

  const restart = () => {
    setGeneration(0);
    dispatch(deletePopulation());
    createPopulation(
      state.populationSize,
      state.jazziness,
      state.numberOfNotes,
      {
        min: rythms.indexOf(state.windowmin),
        max: rythms.indexOf(state.windowmax),
      },
      state.progressionLength
    ).map((x) => dispatch(addSpeciman(x)));
  };

  useEffect(() => {
    if (generation === 0) restart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <Jumbotron className='p-4'>
      <Container>
        <Row>
          <h2>Generation: {generation}</h2>
        </Row>
        <Row className="p-3">
          <Col>
            <TextField
              className="pr-3"
              InputProps={{ inputProps: { min: 1 } }}
              name="populationSize"
              label="Population size"
              type="number"
              onChange={handleChange}
              value={state.populationSize}
            />
            <TextField
              InputProps={{ inputProps: { max: 1 } }}
              name="mutationChance"
              label="Mutation chance"
              type="number"
              onChange={handleChange}
              value={state.mutationChance}
            />
          </Col>
        </Row>
        <hr />
        <Row className="p-3">
        <Col style={{'min-width': '80px'}}>
            <TextField
              className="w-100"
              InputProps={{ inputProps: { min: 1 } }}
              name="tempo"
              label="Tempo"
              type="number"
              onChange={handleChange}
              value={tempo}
            />
          </Col>
          <Col style={{'min-width': '211px'}}>
            <InputLabel className="m-0" shrink>
              Min. possible note length
            </InputLabel>
            <Select
              className="w-100"
              name="windowmin"
              value={state.windowmin}
              onChange={handleChange}
            >
              {rythms.map((rythm, index) => {
                if (rythm < state.windowmax)
                  return (
                    <MenuItem key={index} value={rythm}>
                      {rythm}
                    </MenuItem>
                  );
                else return null;
              })}
            </Select>
          </Col>
          <Col style={{'min-width': '216px'}}>
            <InputLabel className="m-0" shrink>
              Max. possible note length
            </InputLabel>
            <Select
              className="w-100"
              name="windowmax"
              value={state.windowmax}
              onChange={handleChange}
            >
              {rythms.map((rythm, index) => {
                if (rythm > state.windowmin)
                  return (
                    <MenuItem key={index} value={rythm}>
                      {rythm}
                    </MenuItem>
                  );
                else return null;
              })}
            </Select>
          </Col>
          <Col style={{'min-width': '100px'}}>
            <TextField
              className="w-100"
              InputProps={{ inputProps: { min: state.numberOfNotes, max: 12 } }}
              name="jazziness"
              label="Chord complexity"
              type="number"
              onChange={handleChange}
              value={state.jazziness}
            />
          </Col>
          <Col style={{'min-width': '120px'}}>
            <TextField
              className="w-100"
              InputProps={{ inputProps: { min: 1, max: 10 } }}
              disabled={disabled}
              name="numberOfNotes"
              label="No. of notes in a chord"
              type="number"
              onChange={handleChange}
              value={state.numberOfNotes}
            />
          </Col>
          <Col style={{'min-width': '100px'}}>
            <TextField
              className="w-100"
              InputProps={{ inputProps: { min: 1 } }}
              disabled={disabled}
              name="progressionLength"
              label="Progression Length"
              type="number"
              onChange={handleChange}
              value={state.progressionLength}
            />
          </Col>
        </Row>
        <Row>
          <Button variant="contained" color="primary" onClick={restart}>
            Restart
          </Button>
          <NewGeneration
            updateGeneration={updateGeneration}
            params={{
              ...state,
              windowmin: rythms.indexOf(state.windowmin),
              windowmax: rythms.indexOf(state.windowmax),
            }}
          />
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default ControlPanel;
