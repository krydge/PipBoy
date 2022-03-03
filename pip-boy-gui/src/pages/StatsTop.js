function StatsTop(props) {
    
    return (
        <div className='statsTop'>
            <div>{props.page}</div>
            <div className="StatsBar">
                <div className="separator">____________</div>
                <h3>LVL {props.Stats.LVL}</h3>
                <div className="separator">____________</div>
                <h3>HP {props.Stats.HPCUR + "/" + props.Stats.HPMAX}</h3>
                <div className="separator">____________</div>
                <h3>AP {props.Stats.APAVAILABLE + "/" + props.Stats.APMAX}</h3>
                <div className="separator">____________</div>
                <h3>XP {props.Stats.XPERNED + "/" + props.Stats.XPNEEDED}</h3><div className="separator">____________</div>
            </div>
        </div>
    )
}

export default StatsTop;