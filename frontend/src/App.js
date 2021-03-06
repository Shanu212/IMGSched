import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import {Button} from 'semantic-ui-react';
import Authenticate from './components/authenticate';
import Signin from './components/signin';
import Home from './components/home';
import Profiles from './components/profiles';
import NotFound from './components/notfound';
import Glogin from './components/login';
//import Index from './components/index';

class App extends Component{
  render(){
    return (
        <BrowserRouter>
        <Switch>   
        	<Route exact path='/signup' component={Authenticate} />
        	<Route exact path='/' component={Signin} />
        	<Route exact path='/google' component={Glogin} />
        	<Route path='/home' component={Home} />
        	<Route path='/users/:id' component={Profiles} />
        	<Route component={NotFound} />
        </Switch>	
        </BrowserRouter>   
    );
  }
}

export default App;
