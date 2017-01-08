export const selectUser = (user) => {
  console.log('clicked on user ', user.first);
  //return object that is the action
  return {
    type: "USER_SELECTED",
    payload: user
  }
};
