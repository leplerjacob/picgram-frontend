import React from 'react'
import SignUp from './components/SignUp.js'
import Login from './components/Login.js'
// import {Route, Switch} from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <center>
        <h1>Welcome to Picgram!</h1>
        {/* <Switch>
          <Route exact path='/signup' render={({history}) => <SignUp history={history}/>}/>
          <Route exact path='/login' component={Login}/>
        </Switch> */}
        <SignUp/>
        <Login/>
      </center>
    </div>
  )
}

export default App;
