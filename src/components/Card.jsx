import "../styles/card.css"
import { AiFillPlayCircle, AiFillStar }from 'react-icons/ai'


const Card = ({beatmap_id, name, imageURL, difficulty, note_count, bpm, duration, setNumber}) => {


    const board = (e) => {
        setNumber(beatmap_id)
    }
    const setzero = (e) => {
        setNumber(0)
    }

    return (
        <div className="container" onMouseOver={board} onMouseLeave={setzero}>
            <img src={imageURL} alt="" />
            <div class="top-left">
                <p>{name}</p>
            </div>

            <div class="bottom-left">
                <p><AiFillPlayCircle size={25}/> {duration}min</p>
            </div>

            <div class="top-right">
                <p>
                    {Array.from(Array(difficulty).keys()).map(star => <AiFillStar size={40}/>)}
                </p>
            </div>
        </div>

    )
}

export default Card