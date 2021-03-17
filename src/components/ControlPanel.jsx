import React, { useEffect, useState } from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Card,
} from "@material-ui/core";
import ReplayIcon from "@material-ui/icons/Replay";
import { createPopulation } from "../genetic/population";
import { addSpeciman, deletePopulation } from "../actions/populationActions";
import NewGeneration from "./NewGeneration";
import { setTempo } from "../genetic/synth";
import { rythms } from "../genetic/rythm";
import qs from 'qs';

function ControlPanel() {
  const [generation, setGeneration] = useState(0);

  const [state, setState] = useState({
    populationSize: 8,
    mutationChance: 0.1,
    jazziness: 4,
    numberOfNotes: 3,
    progressionLength: 4,
    windowmin: rythms[1],
    windowmax: rythms[4],
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

  const isPL = qs.parse(window.location.search, { ignoreQueryPrefix: true }).lang==='pl'

  return (
    <Jumbotron className="p-4">
      <Container>
        <Row>
          <h2>{isPL ? "Pokolenie" : "Generation"}: {generation}</h2>
        </Row>
        <hr />
        <Row className="p-3">
          <Col className="pb-1" style={{ "min-width": "200px" }}>
            <Card className="p-2">
              <TextField
                className="w-100"
                InputProps={{ inputProps: { min: 1 } }}
                name="populationSize"
                label={isPL ? "Rozmiar populacji" : "Population size"}
                type="number"
                onChange={handleChange}
                value={state.populationSize}
              />
              <TextField
                className="w-100"
                InputProps={{ inputProps: { min: 0, max: 1, step: 0.05 } }}
                name="mutationChance"
                label={isPL ? "Szansa mutacji" : "Mutation chance"}
                type="number"
                onChange={handleChange}
                value={state.mutationChance}
              />
            </Card>
          </Col>
          <Col className="pb-3" style={{ "min-width": "200px" }}>
            <Card className="p-2">
              <TextField
                className="w-100"
                InputProps={{ inputProps: { min: 1 } }}
                name="tempo"
                label="Tempo"
                type="number"
                onChange={handleChange}
                value={tempo}
              />
              <TextField
                className="w-100"
                InputProps={{ inputProps: { min: 1 } }}
                disabled={disabled}
                name="progressionLength"
                label={isPL ? "Długość frazy" : "Phrase length"}
                type="number"
                onChange={handleChange}
                value={state.progressionLength}
              />
            </Card>
          </Col>
          <Col className="pb-3" style={{ "min-width": "200px" }}>
            <Card className="p-2">
              <InputLabel className="m-0" shrink>
                {isPL ? "Min. długość nuty" : "Min. note length"}
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
              <InputLabel className="m-0" shrink>
                {isPL ? "Max. długość nuty" : "Max. note length"}
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
            </Card>
          </Col>
          <Col className="pb-3" style={{ "min-width": "200px" }}>
            <Card className="p-2">
              <TextField
                className="w-100"
                InputProps={{ inputProps: { min: 1, max: 10 } }}
                disabled={disabled}
                name="numberOfNotes"
                label={isPL ? "Liczba nut w akordzie" : "No. of notes in a chord"}
                type="number"
                onChange={handleChange}
                value={state.numberOfNotes}
              />
              <TextField
                className="w-100"
                InputProps={{
                  inputProps: { min: state.numberOfNotes, max: 12 },
                }}
                name="jazziness"
                label="Złożoność akordów"
                label={isPL ? "Złożoność akordów" : "Chord complexity"}
                type="number"
                onChange={handleChange}
                value={state.jazziness}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex justify-content-center">
              <Button
                className="m-1"
                variant="contained"
                color="primary"
                onClick={restart}
              >
                {isPL ? "Zacznij od nowa" : "RESTART"}
                 <ReplayIcon />
              </Button>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-center">
              <NewGeneration
                isPL = {isPL}
                updateGeneration={updateGeneration}
                params={{
                  ...state,
                  windowmin: rythms.indexOf(state.windowmin),
                  windowmax: rythms.indexOf(state.windowmax),
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default ControlPanel;
