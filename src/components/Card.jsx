import "../styles/card.css"
import { AiFillPlayCircle }from 'react-icons/ai'


const Card = ({name, level, imgURL, info, min}) => {
    return (
        <div className="container">
            <img src="https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/40/a1/31/40a13176-1ec4-7506-0fe4-6f7d2a133aa6/10_001_K1LLUA_-_Wabisabi.jpg/400x400cc.jpg" alt="" />
            <div class="top-left">
                <p>BeatName</p>
            </div>

            <div class="bottom-left">
                <p><AiFillPlayCircle/>3min</p>
            </div>

        </div>

    )
}

export default Card