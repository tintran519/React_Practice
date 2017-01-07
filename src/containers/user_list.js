import React, {Component} from 'react';
import {bindActioncreators} from 'redux';
import {connect} from 'react-redux';

class UserList extends Component {

  render() {
    return (
        <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
        </ul>
      )
  }
}
