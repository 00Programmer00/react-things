//@flow
import React from 'react'
import './App.css'
import {MouseTracker} from './Components/Mouse'
// import First from './Components/First'
import {Second} from './Components/Second'
// import ComponentOne from './Components/ComponentOne'

function App() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      {/*<MouseTracker />*/}
      {/*<First testProp={12}/>*/}
      <Second testProp={12}/>
      {/*<React.StrictMode>*/}
      {/*  <div>*/}
      {/*    <ComponentOne />*/}
      {/*  </div>*/}
      {/*</React.StrictMode>*/}
    </div>
  );
}

export default App
