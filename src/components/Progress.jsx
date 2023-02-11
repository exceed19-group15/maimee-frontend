import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";

export default function LinearDeterminate({ duration, checkstate}) {
  duration = 9/(duration/1000)
  const [progress, setProgress] = useState(0.1);

  if (!progress)
  {
    window.location.reload();
  }


  useEffect(() => {
    if (!checkstate) {
      setProgress(100)
      console.log("FINISHED")
      return;
    }
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + duration
      );
    }, (100));
    return () => {
      clearInterval(timer);
    };
  }, [checkstate,duration, progress]);


  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}
