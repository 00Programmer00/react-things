//@flow
import * as React from 'react';

export class Second extends React.Component<{}, { count: number }> {
  state = {
    count: 0,
  }

  button: ?HTMLButtonElement;

  handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button ref={button => (this.button = button)} onClick={this.handleClick}>
          Increment
        </button>
      </div>
    )
  }
}