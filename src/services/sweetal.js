// import Swal from 'sweetalert2/dist/sweetalert2.js'

// import 'sweetalert2/src/sweetalert2.scss'
// import Swal from "sweetalert2";
import swal from "sweetalert"
import { update_Gamestate } from "./Mai";
import "../styles/swal.css"

function sweethem(id){
    swal("Are you sure?", {
        buttons: {
          giveup:{ 
            text: "GiveUp!",
            value: "giveup"
          },
          catch: {
            text: "Retry!",
            value: "catch",
          },
        },
        closeOnClickOutside: false
      })
      .then((value) => {
        switch (value) {
          case "catch":
            // swal("Okay!", "Restart again", "success");
            window.location = `/play/${id}`;
            update_Gamestate({ "game_state": "PLAYING", "beatmap_id": id });
            break;
          case "giveup":
            window.location = '/';
            update_Gamestate({ "game_state": "MENU", "beatmap_id": null });
            break;
       
          // eslint-disable-next-line no-fallthrough
          default:
            // swal("Oops! your score gone");

        }
      });
}
export default sweethem
