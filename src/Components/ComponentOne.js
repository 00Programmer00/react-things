import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export class ComponentOne extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentWillUpdate() {
    // Use componentDidUpdate instead
  }

  componentWillMount() {
    // Use componentDidMount instead
  }

  componentWillReceiveProps() {
    // Use static getDerivedStateFromProps
  }

  render() {
    return <input type="text" ref={this.inputRef} />;
  }

  componentDidMount() {
    this.inputRef.current.focus();
    ReactDOM.findDOMNode(this)
  }
}

export default ComponentOne