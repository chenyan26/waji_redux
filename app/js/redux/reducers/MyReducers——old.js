import { SET_USERNAME, SET_NUMBER } from '../actions/MyActions'

const initialState =
  {
    username: '',
    // password: '',
    logined: false
  }

function account(state = initialState, action) {
  switch (action.type) {
    // case SET_NAME:
    //   return [
    //     ...state,
    //     {
    //       name: action.text,
    //     }
    //   ]
      case SET_USERNAME:
      return Object.assign({}, state, { username: action.username })

      // case SET_NUMBER:
      //   return [
      //     ...state,
      //     {
      //       number: action.text,
      //     }
      //   ]
    // case TOGGLE_TODO:
    //   return state.map((todo, index) => {
    //     if (index === action.index) {
    //       return Object.assign({}, todo, {
    //         completed: !todo.completed
    //       })
    //     }
    //     return todo
    //   })
    default:
      return state
  }
}

export default account
