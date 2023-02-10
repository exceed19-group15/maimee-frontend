// // import { useState, useEffect } from 'react';

// // const ExampleCounter = () =>{
// //   const [counter, setCounter] = useState(0);
// // const Sampledata =[
// //     {
// //         "beatmap_id": 0,
// //         "name": "string",
// //         "difficulty": 0,
// //         "note_count": 0,
// //         "duration": 6,
// //         "image_url": "string"
// //       }
// // ]
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //         console.log(Sampledata.duration)
// //       setCounter((prevCounter) => prevCounter + 4*60/100);
// //     }, 1000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <div className="App">
// //       <h1>{counter}</h1>
// //     </div>
// //   );
// // }
// // export default ExampleCounter
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import CircularProgress from '@mui/material/CircularProgress';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function CircularProgressWithLabel(props) {
//   return (
//     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
//       <CircularProgress variant="determinate" {...props} />
//       <Box
//         sx={{
//           top: 0,
//           left: 0,
//           bottom: 0,
//           right: 0,
//           position: 'absolute',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           width: '100%'
//         }}
//       >
//         {/* <Typography variant="caption" component="div" color="text.secondary">
//           {`${Math.round(props.value)}%`}
//         </Typography> */}
//       </Box>
//     </Box>
//   );
// }

// CircularProgressWithLabel.propTypes = {
//   /**
//    * The value of the progress indicator for the determinate variant.
//    * Value between 0 and 100.
//    * @default 0
//    */
//   value: PropTypes.number.isRequired,
// };

// export default function CircularStatic() {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress+Math.floor(prevProgress*60/100)));
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return <CircularProgressWithLabel value={progress} />;
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = 4 * 60/100;
        return Math.min(oldProgress + diff, 100);
      });
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}