import React, {useState} from 'react';
import "../App.css"
import { throwStatement } from '@babel/types';

const HomeButtons = (props) => {

    const {homeScore, homeSetScore, awayScore, awaySetScore} = props;

    const [selectedTeam, setSelectTeam] = useState('home')

    const [inputScore, setInputScore] = useState(0)

    function teamHandleChange(event) {
        setSelectTeam(event.target.value);
    };

    function scoreHandleChange(event) {
        if(isNaN(parseInt(event.target.value)))
        {
            setInputScore(0)
        }
        else {
            setInputScore(event.target.value);
        }
    }

    function setScore(team, score) {
        if(team === 'home')
        {
            homeSetScore(homeScore + parseInt(score))
        }
        else {
            awaySetScore(awayScore + parseInt(score))
        }
    }

    return (
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
            <select onChange = {teamHandleChange}>
                <option value = 'home'>Home</option>
                <option value = 'away'>Away</option>
            </select>
            <input placeholder='Score' onChange = {scoreHandleChange}></input>
            <button onClick = {() => setScore(selectedTeam, inputScore)}>Set Score</button>
        </div>
    );
};

export default HomeButtons;
