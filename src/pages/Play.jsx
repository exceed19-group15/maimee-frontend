import "../styles/play.css";
import { useEffect, useState } from "react";
import { update_Gamestate } from "../services/Mai.js";
import Button from "@mui/material/Button";
import ProgressBar from "../components/Progress";
import { useParams } from "react-router-dom";
import { getBeat } from "../services/Maimee";

const Play = () => {

  const [Giveup, setGiveup] = useState([]);
  const { id } = useParams()
  const [beat, setBeat] = useState([])

//   useEffect(() => {
//     getgame_state().then((data) => setGiveup(data));
//   }, []);

   useEffect(() => {
      getBeat(id).then(data => setBeat(data))
  //   getRecodes().then(data => setRecords(data))
   })

  const handleonclick = (event) => {
    const val = "FINISHED";
    setGiveup(val);
    update_Gamestate({ game_state: val, beatmap_id: null });
  };
  
  return (
    <html className="main">
      <style jsx>{`
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
        {/* <ExampleCounter/> */}
        <ProgressBar duration={beat.duration}/>

        <div className="btt">
          <Button onClick={handleonclick}>Give up</Button>
        </div>
      </div>
    </html>
  );
};
export default Play;
