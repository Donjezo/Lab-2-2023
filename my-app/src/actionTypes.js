// actionTypes.js
export const SET_USER = "SET_USER";

// actions.js
export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};
