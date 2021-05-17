import {ReduxAction} from "../types";

type PageState = {
    pageTitle: string
}

const initialState: PageState = {
    pageTitle: "Home",
}

const pageReducer = (state = initialState, action:  ReduxAction) => {
    switch (action.type) {
        case "CHANGE_TITLE":
            return {
                pageTitle: action.payload
            }
        default:
            return {
                ...initialState
            }
    }
}

export {pageReducer};