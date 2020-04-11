import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     text: '',
  //   };
  // }

  state = {
    text: ''
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input type="text" value={this.state.text} onChange={this.handleChange} />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: data => dispatch({type: 'ADD_TODO', payload: data})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo)
