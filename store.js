// @ts-check
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const initialStoreState = {
  requests: [
    {
      address: '1234 Some Road Cool, TX 12345',
      avatar:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description: 'John wants to join your carpool!',
      id: '19374LKJDJF2982K',
      name: 'John Smith',
      seen: false,
    },
    {
      address: '1234 Some Road Cool, TX 12345',
      avatar:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description: 'John wants to join your carpool!',
      id: '19374LKJDJF2982C',
      name: 'John Smith',
      seen: false,
    },
    {
      address: '1234 Some Road Cool, TX 12345',
      avatar:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description: 'John wants to join your carpool!',
      id: '19374LKJDJF2982A',
      name: 'John Smith',
      seen: false,
    },
  ],
};

export const actionTypes = {
  REQUESTS_SEEN: 'REQUESTS_SEEN',
};

// REDUCERS
export const reducer = (state = initialStoreState, action) => {
  switch (action.type) {
    case actionTypes.REQUESTS_SEEN:
      return {
        ...state,
        requests: state.requests.map(req => ({
          ...req,
          seen: true,
        })),
      };
    default:
      return state;
  }
};

// ACTIONS
// export const incrementCount = () => dispatch => {
//   return dispatch({ type: actionTypes.INCREMENT });
// };

export function initializeStore(initialState = initialStoreState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
}
