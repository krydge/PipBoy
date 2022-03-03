import { useEffect, useState } from "react";
import axios from 'axios'
import statsimg from '../fixedPip.gif'
import StatsTop from "./StatsTop";

function SpecialPage(props) {
    const [Stats, setStats] = useState(props.stats)
    const [page, setPage] = useState(props.page)
    const [Special, setSpecial] = useState('')

    useEffect (async () => {
        let res = await axios.get("http://localhost:5001/user/Special/tasha/")
        console.log(res.data)
        setSpecial(res.data)
    }, [props])


    return (
        <div className="statsmainContent">
            <StatsTop page={page} Stats={Stats}></StatsTop>
            <div>
                <h2>Strength: {Special.Strength}</h2>
                <h2>Perception: {Special.Perception}</h2>
                <h2>Endurance: {Special.Endurance}</h2>
                <h2>Charisma: {Special.Charisma}</h2>
                <h2>Inteligence: {Special.Inteligence}</h2>
                <h2>Agility: {Special.Agility}</h2>
                <h2>Luck: {Special.Luck}</h2>
            </div>
        </div>
    )
}

export default SpecialPage;