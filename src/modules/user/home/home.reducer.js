import types from "./home.types";

const initialState = {
    launchRockets: []
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case types.GET_LAUNCHROCKETS_FULFILLED:{
            return {
                ...state,
                launchRockets: action.payload.data
            }
        }

        default:
            return state
    }
}

export default reducer;