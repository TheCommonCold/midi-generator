import React, {useEffect} from "react";
import { Container } from "reactstrap";
import { useDispatch } from "react-redux";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import DisplayNotes from "./DisplayNotes";
import {
  setSpecimanScore,
  setSpecimanPlaying,
} from "../actions/populationActions";

function MidiDisplay({ progression, index, max, min }) {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      progression.stop();
    }
    // eslint-disable-next-line
  }, [progression.notes]);

  const scoreUp = () => {
    if (progression.score < 10)
      dispatch(
        setSpecimanScore({ index: index, score: progression.score + 1 })
      );
  };

  const scoreDown = () => {
    if (progression.score > 0)
      dispatch(
        setSpecimanScore({ index: index, score: progression.score - 1 })
      );
  };

  const play = () => {
    const callback = () => {
      dispatch(setSpecimanPlaying({ index: index }));
    };
    progression.play(callback);
  };

  const download = () => {
    progression.download();
  };

  let scoreMeter = [];
  let tempScore = progression.score;
  for (let i = 0; i < 10; i++) {
    if (tempScore > 0) {
      scoreMeter.push(<div className="w-100 score-bar score-bar-color"></div>);
      tempScore--;
    } else {
      scoreMeter.push(<div className="w-100 score-bar"></div>);
    }
  }
  scoreMeter.reverse();

  return (
    <Container className="p-0 h-100 position-relative">
      <div className="w-100 m-0 h-100">
        <DisplayNotes
          color="#c62828"
          progression={progression}
          max={max}
          min={min}
        />
        {!progression.amIPlaying && (
          <div className="overlay play border-color" onClick={play}>
            <PlayCircleOutlineIcon
              style={{ fontSize: 80 }}
              className="overlay-text"
            />
          </div>
        )}
        {progression.amIPlaying && (
          <div className="overlay play border-color" onClick={play}>
            <PauseCircleOutlineIcon
              style={{ fontSize: 80 }}
              className="overlay-text"
            />
          </div>
        )}
        <div className="overlay up-vote border-color" onClick={scoreUp}>
          <ArrowUpwardIcon style={{ fontSize: 60 }} className="overlay-text" />
        </div>
        <div className="overlay down-vote border-color" onClick={scoreDown}>
          <ArrowDownwardIcon
            style={{ fontSize: 60 }}
            className="overlay-text"
          />
        </div>
        <div className="download border-color" onClick={download}>
          <SaveAltIcon style={{ fontSize: 20 }} className="overlay-text" />
        </div>
        <div className="score">{scoreMeter}</div>
        <div className="score">
          <small className="score-text">score: {progression.score}</small>
        </div>
      </div>
    </Container>
  );
}

export default React.memo(MidiDisplay);
