export interface State {
    user_db: Array<user>
}
type user = {
    id: string;
    name: string;
    image: Array<string>;
    username: string
}
type call = "check_username" | "check_userexits" | "get_user" | "register_user"
export interface Action {
    input: {
        function: call;
        username: string;
        name: string;
        image: Array<string>;
        user_data: boolean;
    }
}
export type _result = { result: { success: boolean; data: string | user } }
export type _state = { state: State }
export type m_result = _result | _state 