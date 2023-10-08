import { checkUserExists } from "./action/read/checkUserExits";
import { checkUsername } from "./action/read/checkUsername";
import { getUser } from "./action/read/getUser";
import { Action, State, m_result } from "./action/types";
import { registerUser } from "./action/write/registerUser";
declare const ContractError: any;

export function handle(state: State, action: Action): m_result {
    switch (action.input.function) {
        case "check_username":
            return checkUsername(state, action)
        case "check_userexits":
            return checkUserExists(state, action)
        case "get_user":
            return getUser(state, action)
        case "register_user":
            return registerUser(state, action)
        default:
            throw new ContractError("Undefined method called")
    }
}