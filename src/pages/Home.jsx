import "../styles/home.css";
import Card from "../components/Card";
import { useState } from "react";
import { useEffect } from "react";
import Board from "../components/Board";
import { getBeats } from "../services/Maimee";
import { getRecords } from "../services/Maimee";


const Home = () => {
  const [beats, setBeats] = useState([]);
  const [records, setRecords] = useState([])
  const [number, setNumber] = useState(-1);

  records.sort(function (a, b) {
    return b.score - a.score;
  });

  useEffect(() => {
      getBeats().then(data => setBeats(data))
      getRecords().then(data => setRecords(data))
  },[])

  return (
    <div>
      <div className="col-1">
        <p>BEAT</p>
        {number === -1 ? null : <h1>LEADERBOARD</h1>}
        {number === -1
          ? null
          : records
              .filter((record) => record.beatmap_id === number)
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
