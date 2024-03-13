import { users } from "../data";

const LOAD_USERS = "usersState/load_users";
const SET_CURRENT_USER = "usersState/set_current_user"
const LOGOUT_CURRENT_USER = "usersState/logout_current_user"


export const loadUsers = (users) => ({
  type: LOAD_USERS,
  users
});

export const loginUser = (user) => ({
  type: SET_CURRENT_USER,
  user
})

export const logoutUser = () => ({
  type: LOGOUT_CURRENT_USER,
})


const initialState = {users: [], sessionUser: null};

const usersReducer = (state = initialState, action) => {
  switch(action.type){
    case LOAD_USERS:
      return {...state, users: [...action.users ]}
    case SET_CURRENT_USER:
      return {...state, sessionUser: action.user }
    case LOGOUT_CURRENT_USER:
      return {...state, sessionUser: null }
    default:
      return state
  }
};

export default usersReducer;