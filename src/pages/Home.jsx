import "../styles/home.css";
import Card from "../components/Card";
import { useState } from "react";
import { useEffect } from "react";
import Board from "../components/Board";
import { getBeats } from "../services/Maimee";


const Home = () => {
  const [beats, setBeats] = useState([]);
  const [records, setRecords] = useState([])
  const [number, setNumber] = useState(0);

  records.sort(function (a, b) {
    return b.score - a.score;
  });

  useEffect(() => {
      getBeats().then(data => setBeats(data))
    //   getRecodes().then(data => setRecords(data))
  })

  return (
    <div>
      <div className="col-1">
        <p>BEAT</p>
        {number === 0 ? null : <h1>LEADERBOARD</h1>}
        {number === 0
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
