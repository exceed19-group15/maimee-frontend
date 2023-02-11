import "../styles/play.css";
import { useEffect, useState } from "react";
import { update_Gamestate } from "../services/Mai.js";
import Button from "@mui/material/Button";
import ProgressBar from "../components/Progress";
import { useParams } from "react-router-dom";
import { getBeat } from "../services/Maimee";
import sweetalert from "../services/fisnish";
import sweethem from "../services/sweetal";
import { getgame_state } from "../services/Mai.js";
import { getRecent } from "../services/Maimee";


const Play = () => {
  const { id } = useParams()
  const [beat, setBeat] = useState([])
  const [state, setState] = useState([])
  const [recent, setRecent] = useState([])
  let check = true

   useEffect(() => {
    if (!check) {
      getRecent().then(data => setRecent(data))
      return;
    }
      getBeat(id).then(data => setBeat(data))
      getgame_state().then(data => setState(data))

   },[check, id, state])

   let time = beat.duration

   
   if (state.game_state === "FINISHED" || state.game_state === "GIVEUP") {
        check = false
  
   }

   if (state.game_state === "FINISHED") {
    sweetalert(id, recent.score, recent.hit, recent.miss, beat.name)
  }

  const handleonclick = () => {
    sweethem(id)
    update_Gamestate({ "game_state": "GIVEUP", "beatmap_id": id });
  };
  
  return (
    <div className="main">
      <style jsx="true">{`
        html {
          background: url(${beat.image_url}) no-repeat center center fixed;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
        }
      `}</style>
      <div className="container-play">
        <img src={beat.image_url} alt="" />
        <h1 className="song">{beat.name}</h1>
        <ProgressBar duration={time} checkstate={check}/>
        <div className="btt">
          <Button onClick={handleonclick} >Give up</Button>
        </div>
      </div>
    </div>
  );
};
export default Play;
