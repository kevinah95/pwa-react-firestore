import React, { Component } from "react";
import {connect} from 'react-redux'





const Top = () => (
  <div className="columns is-mobile is-centered is-vcentered">
    <div className="column is-one-fifth is-centered has-text-centered">
      <a className="button">RESTART</a>
    </div>
    <div className="column is-centered has-text-centered">
      <div className="buttons has-addons is-centered">
        <span className="button">1 Set</span>
        <span className="button">3 Sets</span>
        <span className="button">5 Sets</span>
        <span className="button">7 Sets</span>
      </div>
    </div>
    <div className="column is-one-fifth is-centered has-text-centered">
      <a className="button">EDIT</a>
    </div>
  </div>
);

const Game = ({ onFirstClick, onSecondClick, firstCounter, secondCounter }) => (
  <div className="columns is-mobile is-centered is-vcentered">
    <div className="column is-one-fifth has-text-centered">
      <a 
        className="button is-medium"
        onClick={()=>{
          onFirstClick()
        }}>
        <span className="icon">
          <i className="fas fa-plus fa-lg" />
        </span>
      </a>
    </div>
    <div className="column is-centered">
      <div className="columns is-mobile is-centered is-vcentered">
        <div className="column is-one-third is-centered">
          <h1 className="title has-text-centered">Team 1</h1>
          <h1 className="subtitle is-1 has-text-centered">{firstCounter}</h1>
        </div>
        <div className="column is-one-third is-centered">
          <h1 className="title has-text-centered">
            <span className="icon">
              <i className="fas fa-times fa-lg" />
            </span>
          </h1>
        </div>
        <div className="column is-one-third is-centered">
          <h1 className="title has-text-centered">Team 2</h1>
          <h1 className="subtitle is-1 has-text-centered">{secondCounter}</h1>
        </div>
      </div>
    </div>
    <div className="column is-one-fifth has-text-centered">
      <a 
        className="button is-medium"
        onClick={()=>{
          onSecondClick()
        }}>
        <span className="icon">
          <i className="fas fa-plus fa-lg" />
        </span>
      </a>
    </div>
  </div>
);
const mapStateToGameProps = state => {
  return {
    firstCounter: state,
    secondCounter: state
  }
}

const mapDispatchToGameProps = dispatch => {
  return {
    onFirstClick: () => {
      dispatch({type:'INCREMENT_FIRST'});
    },
    onSecondClick: () => {
      dispatch({type:'INCREMENT_SECOND'});
    },
  }
}
const VisibleGame = connect(mapStateToGameProps,mapDispatchToGameProps)(Game)

const Footer = () => (
  <div className="columns is-mobile is-centered is-vcentered">
    <div className="column is-one-fifth is-centered has-text-centered">
      <a className="button">SHARE</a>
    </div>
    <div className="column is-centered has-text-centered">
      
    </div>
    <div className="column is-one-fifth is-centered has-text-centered">
      <a className="button">CLEAN</a>
    </div>
  </div>
)

class App extends Component {
  render() {
    return (
      <section className="section is-large">
        <Top />
        <VisibleGame />
        <Footer/>
        
      </section>
    );
  }
}

export default App;
