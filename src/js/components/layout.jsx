import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Link} from 'react-router';
import LeaderBoardList from './leaderboardList'

class Layout extends React.Component {
  render() {
    return (
        <LeaderBoardList />
    )
  }
}

export default Layout;
