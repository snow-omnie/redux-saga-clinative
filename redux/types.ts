export enum ActionTypes {
    GET_POSTS = "GET_POSTS",
    GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
    GET_POSTS_FAIL = "GET_POSTS_FAIL",
    SPINNER = "SPINNER"
}

interface IActionPost {
    type: ActionTypes.GET_POSTS,
    // articles: object
}

interface IActionPostSuccess {
    type: ActionTypes.GET_POSTS_SUCCESS,
    payload: object
}

interface IActionPostFail {
    type: ActionTypes.GET_POSTS_FAIL,
    error: object
}

export type IAction = IActionPost | IActionPostSuccess | IActionPostFail


export type BottomStackParamList = {
    Post: undefined;
    Profile: { userId: string };
    Setting: { sort: 'latest' | 'top' } | undefined;
}
export type NativeStackParamList = {
    Home: undefined;
    Posts: { userId: string };
    WebScreen: undefined;
    Login: undefined;

}