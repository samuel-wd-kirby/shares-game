const initialState = { 
    Apples: [2,4], 
    Peanuts: [ 2, 4 ] 
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