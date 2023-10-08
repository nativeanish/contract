import { Action, State, _result } from "../types";
declare const ContractError: any;
export function checkUsername(state: State, action: Action): _result {
    if (action.input.username.match(/^[a-z0-9]{5,30}$/)) {
        if (state.user_db.filter((e) => e.username === action.input.username).length) {
            return { result: { success: true, data: "Username is existed" } }
        } else {
            return { result: { success: false, data: "Username doesn't exist" } }
        }
    } else {
        throw new ContractError("username is not defined in correct way")
    }
}