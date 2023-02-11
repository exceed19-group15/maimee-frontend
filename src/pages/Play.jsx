import "../styles/play.css";
import { useEffect, useState } from "react";
import { update_Gamestate } from "../services/Mai.js";
import Button from "@mui/material/Button";
import ProgressBar from "../components/Progress";
import { useParams } from "react-router-dom";
import { getBeat } from "../services/Maimee";
import sweethem from "../services/sweetal";

const Play = () => {
  const { id } = useParams()
  const [beat, setBeat] = useState([])

//   useEffect(() => {
//     getgame_state().then((data) => setGiveup(data));
//   }, []);

   useEffect(() => {
      getBeat(id).then(data => setBeat(data))
  //   getRecodes().then(data => setRecords(data))
   })

   let time = beat.duration
   

  const handleonclick = () => {
    sweethem(id)
    update_Gamestate({ "game_state": "FINISHED", "beatmap_id": id });
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
        <ProgressBar duration={time}/>
        <div className="btt">
          <Button onClick={handleonclick} >Give up</Button>
          
        </div>
      </div>
    </div>
  );
};
export default Play;
