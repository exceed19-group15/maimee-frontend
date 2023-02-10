import "../styles/home.css";
import Card from "../components/Card";
import { useState } from "react";
import { useEffect } from "react";
import Board from "../components/Board";

const sampleData = [
  {
    beatmap_id: 1,
    name: "YOYO",
    difficulty: 3,
    note_count: 20,
    bpm: 100,
    duration: 4,
    imageURL:
      "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/40/a1/31/40a13176-1ec4-7506-0fe4-6f7d2a133aa6/10_001_K1LLUA_-_Wabisabi.jpg/400x400cc.jpg",
  },
  {
    beatmap_id: 2,
    name: "YOYO2",
    difficulty: 5,
    note_count: 20,
    bpm: 50,
    duration: 3,
    imageURL:
      "https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg",
  },
  {
    beatmap_id: 3,
    name: "YOYO",
    difficulty: 3,
    note_count: 20,
    bpm: 0,
    duration: 4,
    imageURL:
      "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/40/a1/31/40a13176-1ec4-7506-0fe4-6f7d2a133aa6/10_001_K1LLUA_-_Wabisabi.jpg/400x400cc.jpg",
  },
  {
    beatmap_id: 4,
    name: "YOYO2",
    difficulty: 5,
    note_count: 20,
    bpm: 0,
    duration: 3,
    imageURL:
      "https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg",
  },
  {
    beatmap_id: 5,
    name: "YOYO",
    difficulty: 3,
    note_count: 20,
    bpm: 0,
    duration: 4,
    imageURL:
      "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/40/a1/31/40a13176-1ec4-7506-0fe4-6f7d2a133aa6/10_001_K1LLUA_-_Wabisabi.jpg/400x400cc.jpg",
  },
  {
    beatmap_id: 6,
    name: "YOYO2",
    difficulty: 5,
    note_count: 20,
    bpm: 0,
    duration: 3,
    imageURL:
      "https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg",
  },
];

const recordData = [
  {
    username: "string",
    beatmap_id: 1,
    score: 30,
    hit: 0,
    miss: 0,
    time: "2023-02-10T04:19:40.219Z",
  },
  {
    username: "string2",
    beatmap_id: 3,
    score: 50,
    hit: 0,
    miss: 0,
    time: "2023-02-10T04:19:40.219Z",
  },
  {
    username: "string3",
    beatmap_id: 1,
    score: 60,
    hit: 0,
    miss: 0,
    time: "2023-02-10T04:19:40.219Z",
  },
];

const Home = () => {
  const [beats, setBeats] = useState(sampleData);
  const [records, setRecords] = useState(recordData)
  const [number, setNumber] = useState(0);

  recordData.sort(function (a, b) {
    return b.score - a.score;
  });

//   useEffect(() => {
//       getBeats().then(data => setBeat(data))
//       getRecodes().then(data => setRecords(data))
//   })

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
