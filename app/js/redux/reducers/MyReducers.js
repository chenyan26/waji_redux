import { SET_NAME, SET_NUMBER } from '../actions/MyActions'

const initialState =
  {
    name: 'aaaaa',
    number: '11111',
    id: 0
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
      case SET_NAME:
      return Object.assign({}, account, { name: action.name })

      case SET_NUMBER:
        return [
          ...state,
          {
            number: action.text,
          }
        ]
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
