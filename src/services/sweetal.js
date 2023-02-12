import swal from "sweetalert"
import { update_Gamestate } from "./Mai";
import "../styles/swalthem.css"

function sweethem(id){
    swal({text:"YOU SUCK!!", 
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
            window.location = `/play/${id}`;
            update_Gamestate({ "game_state": "PLAYING", "beatmap_id": id });
            break;
          case "giveup":
            window.location = '/';
            update_Gamestate({ "game_state": "MENU", "beatmap_id": null });
            break;
       
          // eslint-disable-next-line no-fallthrough
          default:

        }
      });
}
export default sweethem
