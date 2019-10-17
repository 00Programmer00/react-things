//@flow
import React, { Component } from 'react'

type Props = {
  testProp: number
};

class First extends Component<Props> {
  render () {
    return (
      <h1>
        Hello World!~
      </h1>
    )
  }
}

export default First
