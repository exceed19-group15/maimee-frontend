import "../styles/Board.css"

const Board = ({username, beatmap_id, score, hit, miss, time}) => {
    return (
        <div>
            <h3>{username} : {score}</h3>
        </div>
    )
}


export default Board