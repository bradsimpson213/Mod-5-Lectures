import { users } from "../data";

const LOAD_USERS = "userState/load_users";
const SET_CURRENT_USER = "userState/set_current_user"
const LOGOUT_CURRENT_USER = "userState/logout_current_user"


export const loadUsers = () => ({
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


const initialState = {users: users, sessionUser: null};

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case LOAD_USERS:
      return {...state, ...action.users}
    case SET_CURRENT_USER:
      return {...state, sessionUser: action.user }
    case LOGOUT_CURRENT_USER:
      return {...state, sessionUser: null }
    default:
      return state
  }
};

export default userReducer;