const initialState = { 
    Apples: [2,4, 6, 7 , 5, 4, 8 , 4, 3, 9, 4, 7], 
    Peanuts: [ 2, 4, 6, 4, 4, 8, 3, 5 ] 
}

function graphs (state = initialState, action) { 
  switch(action.type) {
    case 'UPDATE_GRAPH' : 
      return state[action.graphKey]
    default: 
      return state
  }
}

export default graphs