import axios from "axios";

import types from "./home.types";

export const getLaunchRockets = () => {
    return {
        type: types.GET_LAUNCHROCKETS,
        payload: axios({
            method: "get",
            url: "https://api.spacexdata.com/v3/launches"
        })
    }
} 