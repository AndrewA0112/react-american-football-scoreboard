import React from 'react';
import "../App.css"

const HomeButtons = (props) => {

    const {homeScore, homeSetScore} = props;

    return (
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
            <button className="homeButtons__touchdown" onClick={() => homeSetScore(homeScore + 7)}>Home Touchdown</button>
            <button className="homeButtons__fieldGoal" onClick={() => homeSetScore(homeScore + 3)}>Home Field Goal</button>
        </div>
    );
};

export default HomeButtons;
