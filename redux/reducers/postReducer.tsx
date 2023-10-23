import { ActionTypes, IAction, postState } from "../types"

const initialState: ArticleState = {
    articles: [],
    error: {}
}

export default (state: ArticleState = initialState, action: IAction) => {
    switch (action.type) {
        case ActionTypes.GET_POSTS: {
            return {
                posts: state.articles,
            }
        }
        case ActionTypes.GET_POSTS_SUCCESS: {
            return {
                ...state,
                posts: action.payload
            }
        }
        case ActionTypes.GET_POSTS_FAIL: {
            return {
                ...state,
                error: action.error
            }
        }
        default:
            return state
    }
}