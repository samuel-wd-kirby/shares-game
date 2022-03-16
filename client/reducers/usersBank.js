const initialState = { 
    Apples: 4, 
    Peanuts: 5,
    Coins: 50, 
}

function usersBank (state = initialState, action) { 
  switch(action.type) {
    case 'ADD_ITEM' : 
      return state[action.key]
    default: 
      return state
  }
}

export default usersBank