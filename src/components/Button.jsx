import * as React from 'react';
import { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import "../styles/button.css"
import { getgame_state, update_Gamestate} from '/Users/kulisarazhou/maimee-frontend-1/src/services/Mai.js';

export default function DisableElevation() {
    const [Giveup, setGiveup] = useState([])
    useEffect(() => {
        getgame_state().then(data => setGiveup(data))
    },[])
    const handleonclick = (event) =>{
        console.log(event)
        setGiveup("FINISHED");
        update_Gamestate({"msg":"FINISHED"})

    };

  return (
    <div className='button'>
    <Button  variant="text"  onClick={handleonclick} >
      Give up
    </Button>
    </div>
  );
}
