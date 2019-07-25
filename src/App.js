//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [lionsScore, addLionPoints] = useState(0)
  const [tigersScore, addTigersPoints] = useState(0)

  const addLionTouchdown = () => {
    return addLionPoints(lionsScore + 6)
  }

  const addLionExtraPoint = () => {
    return addLionPoints(lionsScore + 1)
  }

  const addLionFieldGoal = () => {
    return addLionPoints(lionsScore + 3)
  }

  const addTigerTouchdown = () => {
    return addTigersPoints(tigersScore + 6)
  }

  const addTigerExtraPoint = () => {
    return addTigersPoints(tigersScore + 1)
  }

  const addTigerFieldGoal = () => {
    return addTigersPoints(tigersScore + 3)
  }

  // Removing scripts

  const subLionTouchdown = () => {
    return addLionPoints(lionsScore - 6)
  }

  const subLionExtraPoint = () => {
    return addLionPoints(lionsScore - 1)
  }

  const subLionFieldGoal = () => {
    return addLionPoints(lionsScore - 3)
  }

  const subTigerTouchdown = () => {
    return addTigersPoints(tigersScore - 6)
  }

  const subTigerExtraPoint = () => {
    return addTigersPoints(tigersScore - 1)
  }

  const subTigerFieldGoal = () => {
    return addTigersPoints(tigersScore - 3)
  }

  // Clearing Scripts
  const clearAll = () => {
    return (
      lionsScore === 0,
      tigersScore === 0
    )
  }


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={addLionTouchdown}>Home Touchdown</button>
          <button className="homeButtons__touchdown" onClick={addLionExtraPoint}>Home Extra Point</button>
          <button className="homeButtons__fieldGoal" onClick={addLionFieldGoal}>Home Field Goal</button>
        </div>
        <div className="homeButtons">
          <button className="homeButtons__touchdown" onClick={subLionTouchdown}>Remove Home Touchdown</button>
          <button className="homeButtons__touchdown" onClick={subLionExtraPoint}>Remove Home Extra Point</button>
          <button className="homeButtons__fieldGoal" onClick={subLionFieldGoal}>Remove Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={addTigerTouchdown}>Away Touchdown</button>
          <button className="awayButtons__touchdown" onClick={addTigerExtraPoint}>Away Extra Point</button>
          <button className="awayButtons__fieldGoal" onClick={addTigerFieldGoal}>Away Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={subTigerTouchdown}>Remove Away Touchdown</button>
          <button className="awayButtons__touchdown" onClick={subTigerExtraPoint}>Remove Away Extra Point</button>
          <button className="awayButtons__fieldGoal" onClick={subTigerFieldGoal}>Remove Away Field Goal</button>
        </div>
        <div>
          <button className="clearButtons" onClick={clearAll}>Clear All Scores</button>
        </div>
      </section>

    </div>
  );
}

export default App;
