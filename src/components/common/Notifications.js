import React from 'react';
import {Segment} from 'semantic-ui-react';

function Notifications(props){
    const listNots = props.nots.map((notification) =>
    <div className="ui icon message">
    <i className={notification.icon}></i>
    <div className="content">
      <div className="header">{notification.title}          
      </div>
      <p>{notification.text}</p>
    </div>
  </div>
    )
    return (
        <Segment>{listNots}</Segment>
    );
}

export {Notifications}