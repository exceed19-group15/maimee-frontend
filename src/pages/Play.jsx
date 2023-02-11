import "../styles/play.css";
import { useEffect, useState } from "react";
import { update_Gamestate } from "../services/Mai.js";
import Button from "@mui/material/Button";
import ProgressBar from "../components/Progress";
import { useParams } from "react-router-dom";
import { getBeat } from "../services/Maimee";
import sweethem from "../services/sweetal";
import { getgame_state } from "../services/Mai.js";


const Play = () => {
  const { id } = useParams()
  const [beat, setBeat] = useState([])
  const [state, setState] = useState([])

   useEffect(() => {
      getBeat(id).then(data => setBeat(data))
      getgame_state().then(data => setState(data))
   },[id, state])

   let time = beat.duration

   let check = true
   
   if (state.game_state === "FINISHED" || state.game_state === "GIVEUP") {
        check = false
        sweethem(id)
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
