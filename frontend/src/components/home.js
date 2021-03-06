

import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Header from './header'
import { Redirect } from 'react-router-dom';
import MeetAdd from './meetAdd';
import MeetList from './meetList';
import Profile from './profile';


class Home extends Component{
  constructor(props){
      super(props)
      this.state = {
          activeItem: 'home',
          user: this.props.location.state, 
      }
      this.directPage = this.directPage.bind(this);
      this.handleClick = this.handleClick.bind(this);
  }


  directPage(user){
    if(this.state.activeItem === 'home')
      return <MeetList user={user} />;
    if(this.state.activeItem === 'create')
      return <MeetAdd user={this.state.user}/>;
    if(this.state.activeItem === 'profile')
      return <Profile user={this.state.user}/>;
    if(this.state.activeItem === 'logout')
      return <Redirect to='/'/>;
  }

  handleClick = (e, { name }) => {
    this.setState({ activeItem: name });
  }


  render() {
      return (
         <Grid divided>
            <Grid.Row>
                <Grid.Column>
                    <Header onClick={this.handleClick} activeItem={this.state.activeItem}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                   {this.directPage(this.state.user)}
                </Grid.Column>
            </Grid.Row>
            
        </Grid>
      );
  }
}

export default Home;
