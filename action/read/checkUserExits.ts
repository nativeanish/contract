import { Action, State, _result } from "../types";

export function checkUserExists(state: State, action: Action): _result {
    //@ts-ignore 
    const owner = SmartWeave.transaction.owner
    const user = state.user_db.filter((e) => String(e.id) === String(owner))
    if (user.length) {
        if (action.input.user_data) {
            return { result: { success: true, data: user[0] } }
        } else {
            return { result: { success: true, data: "Account Exists" } }
        }
    } else {
        return { result: { success: false, data: "No Account Found" } }
    }
}