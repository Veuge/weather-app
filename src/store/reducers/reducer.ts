import { combineReducers } from "redux";

const initialState = {
  favorites: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}

export default combineReducers({
  init: reducer
});