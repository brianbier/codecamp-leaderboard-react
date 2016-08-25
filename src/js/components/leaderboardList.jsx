import React from 'react';
import {Link} from 'react-router';
import LeaderBoard from './leaderboard';

class LeaderBoardList extends React.Component {
  constructor(){
    super();
    this.state = {
      leaderData: []
    }
  }
  handleRecentFromServer(){
    $.ajax({
      url: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({
          leaderData: data
        })
        console.log(this.state.leaderData);
      }.bind(this)
    })
  }
  handleAllTimeFromServer(){
    $.ajax({
      url: 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({
          leaderData: data
        })
        console.log(this.state.leaderData);
      }.bind(this)
    })
  }
  componentDidMount(){
  this.handleAllTimeFromServer();
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="text-xs-center">LeaderBoard</div>
        </div>
        <div className="row">
          <div className="col-md-1">Count</div>
          <div className="col-md-3">Image and User Name</div>
          <div className="col-md-4 btn btn-secondary" onClick={this.handleAllTimeFromServer.bind(this)}>All Time Score</div>
          <div className="col-md-2 btn btn-secondary" onClick={this.handleRecentFromServer.bind(this)}>recent Score</div>
        </div>
        {this.state.leaderData.map((leaderElementData,i)=>{
                return <LeaderBoard data={leaderElementData} key={i} counter={i+1}/>

        })}
      </div>
    )
  }
}

export default LeaderBoardList;
