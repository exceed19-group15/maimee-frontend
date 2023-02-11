import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";

export default function LinearDeterminate({ duration }) {
  duration = 10/(duration/1000)
  const [progress, setProgress] = useState(0.1);

  if (!progress)
  {
    window.location.reload();
  }


  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + duration
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
