// PACKAGE DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS

import App from './components/App';

// STYLES

import 'normalize.css';
import './styles/app.scss';

function MySecondNestedDocument() {
    return (
        <h1> Jeszcze bardziej super </h1>
    );
}

function MyFirstComponent() {
    let result = [];
    for (let i = 0; i < 10; i++) {
        result.push(
            <div>
                <h1> Adam jest super </h1>
                <MySecondNestedDocument />
            </div>
        );
    }
    return result;
}


class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

    return (
	<div>
            {this.renderSquare(0)}}
	</div>
    );
}



class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(Board(), document.getElementById('app2'));
