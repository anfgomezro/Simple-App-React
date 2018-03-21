import React, { Component } from 'react';

import {Sparklines,SparklinesLine} from 'react-sparklines';
import logo from './logo.svg';
import './App.css';

import { Notifications } from './components/common/Notifications.js';
import { Button, Input, Divider, Grid, Segment, Rail } from 'semantic-ui-react'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      texto : '',
      numbers : [],
      displayNot : true,
      nots : [],
      active : true,
    }
  }

  handleChange = (event) => {
    this.setState({texto : event.target.value})
  }

  addNumber = () => {
    const {numbers} = this.state
    isNaN(parseInt(this.state.texto)) ? alert('IS NOT A NUMBER') : numbers.push(this.state.texto)
    this.setState({numbers: numbers})
  }

  delete = () => {
    this.setState({numbers : []})
  }

  addNotificationSpotify = () => {
    const {nots} = this.state
    nots.push({ icon : 'spotify icon',
                title: 'Spotify Notification',
                text : 'You should listen this song!!'})
    this.setState({nots: nots})   
  }

  addNotificationSteam = () => {
    const {nots} = this.state
    nots.push({ icon : 'steam icon',
                title: 'Steam Notification',
                text : 'We have new games'})
    this.setState({nots: nots})   
  }

  addNotificationYoutube = () => {
    const {nots} = this.state
    nots.push({ icon : 'youtube icon',
                title: 'YouTube Notification',
                text : 'Your video was succesfully upload'})
    this.setState({nots: nots})   
  }

  addNotificationWhatsapp = () => {
    const {nots} = this.state
    nots.push({ icon : 'whatsapp icon',
                title: 'Whatsapp Notification',
                text : 'You have a new message'})
    this.setState({nots: nots})   
  }

  addNotificationSlack = () => {
    const {nots} = this.state
    nots.push({ icon : 'slack icon',
                title: 'Slack Notification',
                text : 'You have a new message'})
    this.setState({nots: nots})   
  }

  addNotificationGithub = () => {
    const {nots} = this.state
    nots.push({ icon : 'github icon',
                title: 'GitHub Notification',
                text : 'You have a new Pull Request'})
    this.setState({nots: nots})   
  }

  addNotificationInstagram = () => {
    const {nots} = this.state
    nots.push({ icon : 'instagram icon',
                title: 'Instagram Notification',
                text : 'Someone wants to follow you'})
    this.setState({nots: nots})   
  }

  addNotificationPinterest = () => {
    const {nots} = this.state
    nots.push({ icon : 'pinterest icon',
                title: 'Pinterest Notification',
                text : 'Look this new Pin!!'})
    this.setState({nots: nots})   
  }

  addNotificationTumblr = () => {
    const {nots} = this.state
    nots.push({ icon : 'tumblr icon',
                title: 'Tumblr Notification',
                text : 'You have new content'})
    this.setState({nots: nots})   
  }

  handleClick = () => {
    this.setState({ active: !this.state.active })  
    this.setState({displayNot : !this.state.displayNot})
  }



  render() {

    let notifications = '';
    if(this.state.displayNot){
      notifications = <Notifications nots = {this.state.nots}/>;
    }

    const divStyle = {
      textAlign : 'center'
    }

    return (
      <div className="App">
        <header className="ui text container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="ui hidden divider"></div>
        <Input placeholder='Number...' onChange = {this.handleChange} value = {this.state.texto}/>
        <div className="ui hidden divider"></div>
        <div>
          <Button primary onClick={this.addNumber}>Add Number</Button>
          <Button secondary onClick={this.delete}>Delete</Button>
        </div>
        <div className="ui hidden divider"></div>
        <Sparklines data={this.state.numbers} width={100} height={20} margin={5}>
          <SparklinesLine />
        </Sparklines>
    
        <h4 className="ui horizontal divider header">
          <i className="paper plane outline icon"></i>
            Notifications
        </h4>

          <Grid centered columns={3}>
            <Grid.Column>
              <Segment basic>
                <br/>
                <div style={divStyle}>
                <Button circular onClick={this.addNotificationSpotify} color='olive' icon='spotify'/>
                <Button circular onClick={this.addNotificationSteam} color='blue' icon='steam' />
                <Button circular onClick={this.addNotificationYoutube} color='youtube' icon='youtube' />
                </div>
                <br/>
                <div style={divStyle}>
                <Button circular onClick={this.addNotificationWhatsapp} color='green' icon='whatsapp' />
                <Button circular onClick={this.addNotificationSlack} color='violet' icon='slack' />
                <Button circular onClick={this.addNotificationGithub} color='teal' icon='github' />
                </div>
                <br/>
                <div style={divStyle}>
                <Button circular onClick={this.addNotificationPinterest} color='red' icon='pinterest' />
                <Button circular onClick={this.addNotificationInstagram} color='instagram' icon='instagram' />
                <Button circular onClick={this.addNotificationTumblr} color='brown' icon='tumblr' />
                </div>
                <Rail position='right'>
                  {notifications}
                </Rail>
              </Segment>
            </Grid.Column>
          </Grid>

        <Divider hidden />
        <Button toggle active={this.state.active} onClick={this.handleClick}>
        Clear
      </Button>
        
        </div>
    );
  }
}

export default App;
