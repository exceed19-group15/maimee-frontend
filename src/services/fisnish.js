import Swal from "sweetalert2";
import { update_Gamestate } from "./Mai";
import "../styles/swal.css";
import { update_record } from "./Mai";

function sweetalert(beatmap_id, score, hit, miss, name) {
  Swal.fire({
    title: name,
    html: `
        <p>Hit: ${hit}</p>
        <p>Miss: ${miss}</p>
        <p>Score: ${score}</p>
        <input type="text" id="name" class="swal2-input" placeholder="Name">
        `,
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Menu",
    denyButtonText: "Retry",
    cancelButtonText: "Save",
    focusConfirm: false,
    allowOutsideClick: false,
    preConfirm: () => {
      const name = Swal.getPopup().querySelector("#name").value;

      return { name: name };
    },
  }).then((result) => {
    if (result.isConfirmed) {
        update_Gamestate({ game_state: "MENU", beatmap_id: null });
        window.location = "/";
    } else if (result.isDenied) {
        update_Gamestate({ game_state: "PLAYING", beatmap_id: beatmap_id });
      window.location = `/play/${beatmap_id}`;
    } else {
      update_record(beatmap_id, {"username" : result.value.name, "score": score, "hit" : hit, "miss": miss})
      update_Gamestate({ game_state: "MENU", beatmap_id: null });
      window.location = "/";

    }
  });
}
export default sweetalert;
