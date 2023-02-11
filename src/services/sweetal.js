// import Swal from 'sweetalert2/dist/sweetalert2.js'

// import 'sweetalert2/src/sweetalert2.scss'
// import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import swal from "sweetalert"
import Home from "../pages/Home";
import { update_Gamestate } from "./Mai";

function sweethem(id){
    swal("Are you sure?", {
        buttons: {
          cancel: "GiveUp!",
          catch: {
            text: "Retry!",
            value: "catch",
          },
        },
      })
      .then((value) => {
        switch (value) {
          case "catch":
            // swal("Okay!", "Restart again", "success");
            window.location = `/play/${id}`;
            update_Gamestate({ "game_state": "PLAYING", "beatmap_id": id });
            break;
       
          default:
            // swal("Oops! your score gone");
            window.location = '/';
            update_Gamestate({ "game_state": "MENU", "beatmap_id": null });

        }
      });
}
export default sweethem
