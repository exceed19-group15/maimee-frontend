import "../styles/home.css"
import Card from "../components/Card"

const Home = () => {
    return (
        <div>
            <div className="col-1">
            <p className="sticky">BEAT</p>
            </div>

            <div className="col-2">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default Home