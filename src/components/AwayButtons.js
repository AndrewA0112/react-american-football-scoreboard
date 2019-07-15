import React from 'react';
import "../App.css"

const AwayButtons = (props) => {

    const {awayScore, awaySetScore} = props;

    return (
        <div className="awayButtons">
            <button className="awayButtons__touchdown" onClick={() => awaySetScore(awayScore + 7)}>Away Touchdown</button>
            <button className="awayButtons__fieldGoal" onClick={() => awaySetScore(awayScore + 3)}>Away Field Goal</button>
        </div>
    );
};

export default AwayButtons;