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

//container function
//takes piece of state, part of store, and sends to component as props
function mapStateToProps(state) {
  return {
    users: state.users
  };
}

//below is exported container
export default connect(mapStateToProps)(UserList);
