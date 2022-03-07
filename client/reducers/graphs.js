const initialState = { 
    Apples: [2,4], 
    Peanuts: [ 2, 4 ] 
}

function graphs (state = initialState, action) { 
  switch(action.type) {
    case 'ADD_ITEM' : 
      return state[action.key]
    default: 
      return state
  }
}

export default graphs