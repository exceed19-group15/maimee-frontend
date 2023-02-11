import axios from "axios"


export async function getBeats() {
    try {
    const res = await axios.get("http://group15.exceed19.online/beatmap")
    return res.data
    }
    catch(err) { 
        console.log(err)
    }
}

export async function getBeat(id) {
    try {
    const res = await axios.get(`http://group15.exceed19.online/beatmap/${id}`)
    return res.data
    }
    catch(err) { 
        console.log(err)
    }
}


export async function getRecords() {
    try {
    const res = await axios.get("http://group15.exceed19.online/play-record")
    return res.data
    }
    catch(err) { 
        console.log(err)
    }
}

export async function getLeaderBoard(id, limit) {
    try {
    const res = await axios.get(`http://group15.exceed19.online/leaderboard/${id}/?limit=${limit}`)
    return res.data
    }
    catch(err) { 
        console.log(err)
    }
}

export async function getRecent() {
    try {
    const res = await axios.get("http://group15.exceed19.online/recent")
    return res.data
    }
    catch(err) { 
        console.log(err)
    }
}