import axios from "axios"


export async function getgame_state() {
    try {
    const res = await axios.get("http://group15.exceed19.online/game-state")
    console.log(res.data);
    return res.data
    }
    catch(err) { 
        console.log(err)
    }
}
export async function update_Gamestate(body, id) {
    const res = await axios.put(`http://group15.exceed19.online/game-state/${id}`, body
    )
    console.log(res.data);

    return res.data
}
export async function getbeatmap_info() {
    try {
    const res = await axios.get("http://group15.exceed19.online/beatmap/info/")
    console.log(res.data);
    return res.data
    }
    catch(err) { 
        console.log(err)
    }
}