import axios from "axios"


export async function getgame_state() {
    try {
    const res = await axios.get("http://group15.exceed19.online/game-state")
    return res.data
    }
    catch(err) { 
        console.log(err)
    }
}
export async function update_Gamestate(body) {
    const res = await axios.post("http://group15.exceed19.online/game-state", body
    )

    return res.data
}
export async function getbeatmap_info() {
    try {
    const res = await axios.get("http://group15.exceed19.online/beatmap/info")
    return res.data
    }
    catch(err) { 
        console.log(err)
    }
}