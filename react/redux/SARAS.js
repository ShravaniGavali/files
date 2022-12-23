/**
 * axios -> Request to API endpoint
 * redux-thunk -> Define async-action creator & middleware
 */

const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;
const axios = require("axios");
const logger = require("redux-logger").createLogger();

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetUsersError = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_ERROR:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetUsersError(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunk, logger));
store.subscribe(() => {});
store.dispatch(fetchUsers());















/**
 * 3 core concept in redux
 * Store -> Holds state of application
 * Action -> Describes what happened
 * Reducer -> Ties stores and action together
 */

/**
 * 3 principles
 * The state of whole application is stored in an object tree within a single store
 * The only way to change the state is to emit / dispatch an action, an object describing what happended
 * To specify how state tree is transformed by actions, you write pure reducers (takes prev / next state as input and returns a new state)
 */

const { createStore } = require("redux");

/**
 * Implement Action
 */

const BUY_CAR = "BUY_CAR";
const BUY_BIKE = "BUY_BIKE";

function buyCar() {
  return {
    type: BUY_CAR,
  };
}

function buyBike() {
  return {
    type: BUY_BIKE,
  };
}

/**
 * Implement Reducer
 * (prevState, action) => newState
 */

const initialState = {
  numberOfCars: 10,
  numberOfBikes: 20,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CAR:
      return {
        ...state,
        numberOfCars: state.numberOfCars - 1,
      };
    case BUY_BIKE:
      return {
        ...state,
        numberOfBikes: state.numberOfBikes - 1,
      };
    default:
      return state;
  }
}

/**
 * Implement Store
 * Holds application state
 * Allow access to state via getState()
 * Allows state to be update via dispatch (action)
 * Registers listeners via subscribers (listener)
 * Handles unregistering of listners via the function returned by subsscribe(listener)
 */

const store = createStore(reducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
store.dispatch(buyCar());
store.dispatch(buyCar());
store.dispatch(buyCar());
store.dispatch(buyBike());
store.dispatch(buyBike());
store.dispatch(buyBike());
unsubscribe();


// Custom store

// function createStore(reducer) {
//     let initialState = {
//         numberOfCars: 10,
//         numberOfBikes: 20,
//     };
//     return {
//         dispatch: (action) => {
//             initialState = reducer(initialState, action)
//         },
//         getState: () => initialState
//     }
// }


