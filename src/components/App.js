import React, { Component } from "react";
import { connect } from "react-redux";
import StopWatchTimerContainer from "../containers/StopWatchTimerContainer";

const Top = ({ onStartTimer }) => (
  <div className="columns is-mobile is-centered is-vcentered">
    <div className="column is-one-fifth is-centered has-text-centered">
      <a
        className="button"
        onClick={() => {
          onStartTimer();
        }}
      >
        RESTART
      </a>
    </div>
    <div className="column is-centered has-text-centered">
      {/* <div className="buttons has-addons is-centered">
        <span className="button">1 Set</span>
        <span className="button">3 Sets</span>
        <span className="button">5 Sets</span>
        <span className="button">7 Sets</span>
      </div> */}
      <StopWatchTimerContainer />
    </div>
    <div className="column is-one-fifth is-centered has-text-centered">
      <a className="button">EDIT</a>
    </div>
  </div>
);

const mapDispatchToTopProps = dispatch => ({
  onStartTimer: () => {
    dispatch({ type: "START_TIMER" });
  }
});

const VisibleTop = connect(
  null,
  mapDispatchToTopProps
)(Top);

const Game = ({
  onPlusOneTeamAClick,
  onPlusTwoTeamAClick,
  onPlusThreeTeamAClick,
  onPlusOneTeamBClick,
  onPlusTwoTeamBClick,
  onPlusThreeTeamBClick,
  counterA,
  counterB,
  setA,
  setB
}) => (
  <div className="columns is-mobile is-centered is-vcentered">
    <div className="column is-one-fifth has-text-centered">
      <a
        className="button is-medium"
        onClick={() => {
          onPlusOneTeamAClick();
        }}
      >
        +1
      </a>
      <a
        className="button is-medium"
        onClick={() => {
          onPlusTwoTeamAClick();
        }}
      >
        +2
      </a>
      <a
        className="button is-medium"
        onClick={() => {
          onPlusThreeTeamAClick();
        }}
      >
        +3
      </a>
    </div>
    <div className="column is-centered">
      <div className="columns is-mobile is-centered is-vcentered">
        <div className="column is-one-third is-centered">
        
          <h1 className="title has-text-centered">Team 1</h1>
          <h1 className="subtitle is-1 has-text-centered">{counterA}</h1>
          <h1 className="has-text-centered">SET {setA}</h1>
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
          <h1 className="subtitle is-1 has-text-centered">{counterB}</h1>
          <h1 className="has-text-centered">SET {setB}</h1>
        </div>
      </div>
    </div>
    <div className="column is-one-fifth has-text-centered">
      <a
        className="button is-medium"
        onClick={() => {
          onPlusOneTeamBClick();
        }}
      >
        +1
      </a>
      <a
        className="button is-medium"
        onClick={() => {
          onPlusTwoTeamBClick();
        }}
      >
        +2
      </a>
      <a
        className="button is-medium"
        onClick={() => {
          onPlusThreeTeamBClick();
        }}
      >
        +3
      </a>
    </div>
  </div>
);
const mapStateToGameProps = state => {
  return {
    counterA: state.counterA.value,
    counterB: state.counterB.value,
    setA: state.setA.value,
    setB: state.setB.value
  };
};

const incrementCounterBy = (name, incrementByNumber) => {
  return (dispatch, getState) => {
    if (
      getState()["counter" + name].limit <= getState()["counter" + name].value
    ) {
      dispatch({ type: "INCREMENT_SET_COUNTER", name: name });
      return dispatch({ type: "RESET", name: name });
    }
    return dispatch({
      type: "INCREMENT",
      name: name,
      incrementBy: incrementByNumber
    });
  };
};

const mapDispatchToGameProps = dispatch => {
  return {
    onPlusOneTeamAClick: () => {
      dispatch(incrementCounterBy("A", 1));
    },
    onPlusTwoTeamAClick: () => {
      dispatch(incrementCounterBy("A", 2));
    },
    onPlusThreeTeamAClick: () => {
      dispatch(incrementCounterBy("A", 3));
    },
    onPlusOneTeamBClick: () => {
      dispatch(incrementCounterBy("B", 1));
    },
    onPlusTwoTeamBClick: () => {
      dispatch(incrementCounterBy("B", 2));
    },
    onPlusThreeTeamBClick: () => {
      dispatch(incrementCounterBy("B", 3));
    }
  };
};
const VisibleGame = connect(
  mapStateToGameProps,
  mapDispatchToGameProps
)(Game);

const resetCounters = name => {
  return dispatch => {
    dispatch({ type: "RESET", name: name });

    return dispatch({
      type: "RESET_SET_COUNTER",
      name: name
    });
  };
};

const Footer = ({ onCleanClick }) => (
  <div className="columns is-mobile is-centered is-vcentered">
    <div className="column is-one-fifth is-centered has-text-centered">
      <a className="button">SHARE</a>
    </div>
    <div className="column is-centered has-text-centered" />
    <div className="column is-one-fifth is-centered has-text-centered">
      <a className="button" onClick={() => onCleanClick()}>
        CLEAN
      </a>
    </div>
  </div>
);

const mapDispatchToFooterProps = dispatch => ({
  onCleanClick: () => {
    dispatch(resetCounters("A"));
    dispatch(resetCounters("B"));
  }
});

const VisibleFooter = connect(
  null,
  mapDispatchToFooterProps
)(Footer);

class App extends Component {
  render() {
    return (
      <section className="section is-large">
        <VisibleTop />
        <VisibleGame />
        <VisibleFooter />
      </section>
    );
  }
}

export default App;
