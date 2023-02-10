import "../styles/home.css"
import Card from "../components/Card"

const Home = () => {
    return (
        <div className="two-column">
            <div className="col-1">
            <p>BEAT</p>
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