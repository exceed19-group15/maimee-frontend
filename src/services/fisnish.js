// import Swal from 'sweetalert2/dist/sweetalert2.js'

// import 'sweetalert2/src/sweetalert2.scss'
// import Swal from "sweetalert2";
import swal from "sweetalert";
import { update_Gamestate } from "./Mai";

function sweetalert(id) {
  swal({
    text: "Name",
    content: "input",
    buttons: {
      save: {
        text: "Save",
        value: "save",
      },
      catch: {
        text: "Retry!",
        value: "catch",
      },
      cancel: "Menu",
    },
  }).then((value) => {
    switch (value) {
      case "catch":
        window.location = `/play/${id}`;
        update_Gamestate({ game_state: "PLAYING", beatmap_id: id });
        break;
      case "save":
        window.location = "/";

        update_Gamestate({ game_state: "MENU", beatmap_id: id });
        break;

      default:
        window.location = "/";
        update_Gamestate({ game_state: "MENU", beatmap_id: null });
    }
  });
}
export default sweetalert;
