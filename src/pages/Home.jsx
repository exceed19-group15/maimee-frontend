import "../styles/home.css";
import Card from "../components/Card";
import { useState } from "react";
import { useEffect } from "react";
import Board from "../components/Board";
import { getBeats } from "../services/Maimee";
import { getLeaderBoard } from "../services/Maimee";
import { update_Gamestate } from "../services/Mai";


const Home = () => {
  const [beats, setBeats] = useState([]);
  const [records, setRecords] = useState([])
  const [number, setNumber] = useState(-1);


  records.sort(function (a, b) {
    return b.score - a.score;
  });

  useEffect(() => {
      getBeats().then(data => setBeats(data))
      getLeaderBoard(number, 5).then(data => setRecords(data))
      update_Gamestate({"game_state": "MENU", "beatmap_id": null})
  },[number])

  return (
    <div>
      <div className="col-1">
        <p>BEAT</p>
        {number === -1 ? null : <h1>LEADERBOARD</h1>}
        {number === -1
          ? null
          : records
              .map((record) => <Board {...record} />)}
      </div>
      <div className="col-2">
        {beats.map((beat) => (
          <Card {...beat} setNumber={setNumber} />
        ))}
      </div>
    </div>
  );
};

export default Home;
