import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";

export default function LinearDeterminate({ duration }) {
  console.log(duration)
  const [progress, setProgress] = useState(0.1);
  console.log(progress)


  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0.1 : prevProgress + 0.1
      );
    }, ((duration/1000) * 60) / 1000);
    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}
