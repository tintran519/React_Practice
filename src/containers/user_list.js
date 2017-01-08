import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class UserList extends Component {

createListItems() {
  return this.props.users.map((user) => {
    return (
      <li
        key={user.id}
        onClick={() => this.props.selectUser(user)}
        >
          {user.first} {user.last}
      </li>
      );
  });
}

  render() {
      return (
          <ul>
              {this.createListItems()}
          </ul>
        )
  }
}

//container function
//takes piece of state, which is part of the store, and passes it to component as a property
//parameter, state, equals the value of store, so state.users equals allReducers.user
function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectUser: selectUser}, dispatch)
}

//below is exported container
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
