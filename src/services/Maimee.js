import axios from "axios"


export async function getBeats() {
    try {
    const res = await axios.get("")
    console.log(res.data);
    return res.data
    }
    catch(err) { 
        console.log(err)
    }
}

export async function getRecodes() {
    try {
    const res = await axios.get("")
    console.log(res.data);
    return res.data
    }
    catch(err) { 
        console.log(err)
    }
}
