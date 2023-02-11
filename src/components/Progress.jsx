import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";
import add_score from "../services/add_name";
import { getrecent } from "../services/Mai";

export default function LinearDeterminate({ duration }) {
  duration = 10/(duration/1000)
  
  const [player, setPlayer] = useState([]);
  const [progress, setProgress] = useState(0.1);
  console.log(player)

  if (!progress)
  {
    window.location.reload();
  }
  useEffect(()=>{
    getrecent().then(data => setPlayer(data))
  })

    if (progress>=100) {
      add_score(player.beatmap_id, player.score,player.hit, player.miss)
    }
    

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 110 ? 100 : prevProgress + duration
      );
    }, (100));
    return () => {
      
      clearInterval(timer);
     
    };
  }, [duration, progress]);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}
