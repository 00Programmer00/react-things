import * as React from 'react';
import './styles.css'

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <img className='cat' style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
      </div>
    )
  }
}

class MouseWithCat extends React.Component {
  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.state = { x: 0, y: 0 }
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div style={{ height: '100%', width: '100%' }} onMouseMove={this.handleMouseMove}>

        {/*
          We could just swap out the <p> for a <Cat> here ... but then
          we would need to create a separate <MouseWithSomethingElse>
          component every time we need to use it, so <MouseWithCat>
          isn't really reusable yet.
        */}
        {this.props.render(this.state)}
      </div>
    )
  }
}

export class MouseTracker extends React.Component {
  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <h1>Move the mouse around!</h1>
        <MouseWithCat render={mouse => (
          <Cat testProp={'asdasdasd'} mouse={mouse} />
        )}/>
      </div>
    )
  }
}