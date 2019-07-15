//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./components/BottomRow";
import TopRow from "./components/TopRow"
import HomeButtons from "./components/HomeButtons";
import AwayButtons from "./components/AwayButtons";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, homeSetScore] = useState(0);
  const [awayScore, awaySetScore] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore = {homeScore} awayScore = {awayScore}/>
        <BottomRow />
      </section>
      <section className="buttons">
        <HomeButtons homeScore = {homeScore} homeSetScore = {homeSetScore} awayScore = {awayScore} awaySetScore = {awaySetScore}/>
        {/* <AwayButtons awayScore = {awayScore} awaySetScore = {awaySetScore}/> */}
      </section>
    </div>
  );
}

export default App;
