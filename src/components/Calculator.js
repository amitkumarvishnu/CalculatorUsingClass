import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, subtract, multiply, divide, reset } from '../redux/actions';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (e) => {
    this.setState({ value: parseFloat(e.target.value) });
  };

  handleAdd = () => {
    this.props.add(this.state.value);
  };

  handleSubtract = () => {
    this.props.subtract(this.state.value);
  };

  handleMultiply = () => {
    this.props.multiply(this.state.value);
  };

  handleDivide = () => {
    if (this.state.value !== 0) {
      this.props.divide(this.state.value);
    } else {
      alert('Cannot divide by zero');
    }
  };

  handleReset = () => {
    this.props.reset();
    this.setState({ value: 0 });
  };

  render() {
    return (
      <div className="calculator">
        <h2>Calculator</h2>
        <div>
          <input
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Enter number"
          />
        </div>
        <div>
          <button onClick={this.handleAdd}>Add</button>
          <button onClick={this.handleSubtract}>Subtract</button>
          <button onClick={this.handleMultiply}>Multiply</button>
          <button onClick={this.handleDivide}>Divide</button>
        </div>
        <div>
          <button onClick={this.handleReset}>Reset</button>
        </div>
        <div>
          <h3>Result: {this.props.result}</h3>
        </div>
      </div>
    );
  }
}

// Map state and dispatch to props
const mapStateToProps = (state) => ({
  result: state.result
});

const mapDispatchToProps = {
  add,
  subtract,
  multiply,
  divide,
  reset
};

// Connect the Calculator component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
