import swal from "sweetalert"
import { update_Gamestate } from "./Mai";
import "../styles/swalthem.css"

function sweethem(id){
    swal({text:"YOU SUCK!!", 
    icon: "https://w0.peakpx.com/wallpaper/335/1005/HD-wallpaper-puppy-cute-green-caine-hand-dog-animal-sweet-thumbnail.jpg",
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
