import "../styles/play.css";
import { useEffect, useState } from "react";
import { getgame_state, update_Gamestate } from "../services/Mai.js";
// import DisableElevation from "../components/Button"
import Button from "@mui/material/Button";
// import ExampleCounter from "../components/Progress";
// import { CircularProgress } from "@mui/material";
import ProgressBar from "../components/Progress";

const Play = ({
  beatmap_id,
  name,
  difficulty,
  note_count,
  duration,
  image_url,
}) => {
  const [Giveup, setGiveup] = useState([]);
  useEffect(() => {
    getgame_state().then((data) => setGiveup(data));
  }, []);
  const handleonclick = (event) => {
    const val = "FINISHED";
    setGiveup(val);
    update_Gamestate({ game_state: val, beatmap_id: null });
  };
  return (
    <html className="main">
      <style jsx>{`
        html {
          background: url(${image_url}) no-repeat center center fixed;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
        }
      `}</style>
      <div className="container">
        <img src={image_url} alt="" />
        <h1 className="song">{name}</h1>
        {/* <ExampleCounter/> */}
        <ProgressBar />

        <div className="btt">
          <Button onClick={handleonclick}>Give up</Button>
        </div>
      </div>
    </html>
  );
};
export default Play;
