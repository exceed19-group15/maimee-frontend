import axios from "axios"


export async function getBeats() {
    try {
    const res = await axios.get("http://group15.exceed19.online/beatmap/")
    console.log(res.data);
    return res.data
    }
    catch(err) { 
        console.log(err)
    }
}

export async function getBeat(id) {
    try {
    const res = await axios.get(`http://group15.exceed19.online/beatmap/${id}`)
    console.log(res.data);
    return res.data
    }
    catch(err) { 
        console.log(err)
    }
}
