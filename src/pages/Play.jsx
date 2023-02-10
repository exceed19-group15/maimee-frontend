import "../styles/play.css"
import { useEffect, useState } from "react"
import { getgame_state, update_Gamestate} from '../services/Mai.js';
// import DisableElevation from "../components/Button"
import Button from '@mui/material/Button';
// import ExampleCounter from "../components/Progress";
// import { CircularProgress } from "@mui/material";
import CircularStatic from "../components/Progress";

const Play = () => {
    const [Giveup, setGiveup] = useState([])
    useEffect(() => {
        getgame_state().then(data => setGiveup(data))

        
    }, [])
    const handleonclick = (event) =>{
        const val = "FINISHED"
        setGiveup(val)
        update_Gamestate({game_state:val, beatmap_id:null})



    };
    return(
        <html className="main"  >
        <div className="container">
         
        <img src="https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/40/a1/31/40a13176-1ec4-7506-0fe4-6f7d2a133aa6/10_001_K1LLUA_-_Wabisabi.jpg/400x400cc.jpg" alt="" 
        />
        <h1 className="song">BEAT NAME</h1>
        {/* <ExampleCounter/> */}
        <CircularStatic/>

        <div className="btt">
        <Button onClick={handleonclick} >

      Give up
    </Button>
        </div>
        

    </div>
        
        </html>
    )
    
}
export default Play