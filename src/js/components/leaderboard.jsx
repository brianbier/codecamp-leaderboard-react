import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Link} from 'react-router';

class LeaderBoard extends React.Component {
  render() {

    return (
      <div className="row">
        <div className="col-md-1">{this.props.counter}</div>
        <div className="col-md-3"><img src={this.props.data.img} width="100" /><p><a href={"https://www.freecodecamp.com/"+this.props.data.username} target="blank">{this.props.data.username}</a></p></div>
        <div className="col-md-4">{this.props.data.alltime}</div>
        <div className="col-md-2">{this.props.data.recent}</div>
      </div>
    )
  }
}

export default LeaderBoard;
