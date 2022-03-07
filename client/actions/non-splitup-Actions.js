export const UPDATE_GRAPH = "UPDATE_GRAPH"

export function updateGraph(newNum, graphKey) {
    return {
        type: UPDATE_GRAPH,
        newNum,
        graphKey
    }
}

export function updateGraphs(newNum1, newNum2) {
    return (dispatch) => {
            dispatch(updateGraph(newNum1, 'Apples'))
            dispatch(updateGraph(newNum2, 'Peanuts'))

    }
}