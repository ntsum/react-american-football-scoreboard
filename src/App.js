//TODO: STEP 1 - Import the useState hook.
import "./App.css";
import BottomRow from "./BottomRow";
//importing useState hook from react to this project 
import React, { useState } from "react";

function App() {
  
  //banana is what it currently is and setBanana sets banana to what you want banana to be.
  //Using useState hooks, we take the state and set the state of hom and away to 0. 
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [state, setState] = useState({
    home: 0,
    away: 0
  }) 
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{state.home}</div> {/*changed value here from 32 to dynamically take in value when state.home is called */}
          </div>
          <div className="timer">00:07</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{state.away}</div> {/*changed value here from 32 to dynamically take in value when state.home is called */}
          </div>
        </div>

        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
           {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
           <button className="homeButtons__touchdown" onClick={() => setState({ ...state, home: state.home + 7 })}>Home Touchdown!!!</button>
          <button className="homeButtons__fieldGoal" onClick={() => setState({ ...state, home: state.home + 3 })}>Home Field Goal!!!</button>
        </div>

        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setState({ ...state, away: state.away + 7 })}>Away Touchdown!!!</button>
          <button className="awayButtons__fieldGoal" onClick={() => setState({ ...state, away: state.away + 3 })}>Away Field Goal!!!</button>
        </div>
      </section>
    </div>

//lines 38&39 + 43&44 takes the state and adds a click event for each time a button is pushed. If touchdown is pushed, +7 points to the specified team, 
//and +3 points for a field goal. using that ~~~dynamic~~~ state.away or state.home which makes the score update as the click event is being called. 
  );
}

export default App;
