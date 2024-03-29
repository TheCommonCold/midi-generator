import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Card,
} from "@mui/material/";
import ReplayIcon from "@mui/icons-material/Replay";
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

  return (
    <Container className="p-4">
      <Container>
        <Row>
          <h2>Pokolenie: {generation}</h2>
        </Row>
        <hr />
        <Row className="p-3">
          <Col className="pb-1" style={{ minWidth: "200px" }}>
            <Card className="p-3">
              <TextField
                className="w-100 pb-3"
                InputProps={{ inputProps: { min: 1 } }}
                name="populationSize"
                label="Rozmiar populacji"
                type="number"
                onChange={handleChange}
                value={state.populationSize}
              />
              <TextField
                className="w-100"
                InputProps={{ inputProps: { min: 0, max: 1, step: 0.05 } }}
                name="mutationChance"
                label="Szansa mutacji"
                type="number"
                onChange={handleChange}
                value={state.mutationChance}
              />
            </Card>
          </Col>
          <Col className="pb-3" style={{ minWidth: "200px" }}>
            <Card className="p-3">
              <TextField
                className="w-100 pb-3"
                InputProps={{ inputProps: { min: 1 } }}
                name="tempo"
                label="Tempo"
                type="number"
                onChange={handleChange}
                value={tempo}
              />
              <TextField
                className="w-100"
                InputProps={{
                  inputProps: { min: state.numberOfNotes, max: 12 },
                }}
                name="jazziness"
                label="Złożoność akordów"
                type="number"
                onChange={handleChange}
                value={state.jazziness}
              />
            </Card>
          </Col>
          <Col className="pb-3" style={{ minWidth: "200px" }}>
            <Card className="p-3">
              <div className="pb-2">
                <InputLabel shrink>Min. długość nuty</InputLabel>
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
              </div>
              <div>
                <InputLabel shrink>Max. długość nuty</InputLabel>
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
              </div>
            </Card>
          </Col>
          <Col className="pb-3" style={{ minWidth: "200px" }}>
            <Card className="p-3">
              <TextField
                className="w-100 pb-3"
                InputProps={{ inputProps: { min: 1, max: 10 } }}
                disabled={disabled}
                name="numberOfNotes"
                label="Liczba nut w akordzie"
                type="number"
                onChange={handleChange}
                value={state.numberOfNotes}
              />
              <TextField
                className="w-100"
                InputProps={{ inputProps: { min: 1 } }}
                disabled={disabled}
                name="progressionLength"
                label="Długość frazy"
                type="number"
                onChange={handleChange}
                value={state.progressionLength}
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
                Zacznij od nowa <ReplayIcon />
              </Button>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-center">
              <NewGeneration
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
    </Container>
  );
}

export default ControlPanel;
