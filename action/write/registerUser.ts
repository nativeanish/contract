import { checkUserExists } from "../read/checkUserExits";
import { checkUsername } from "../read/checkUsername";
import { Action, _state, State } from "../types";
declare const ContractError;
export function registerUser(state: State, action: Action): _state {
    {
        const result = checkUserExists(state, action)
        if (result.result.success && result.result.data === "Account Exists") {
            throw new ContractError("Account Exists")
        }
    }
    {
        const result = checkUsername(state, action)
        if (result.result.success && result.result.data === "Username is existed") {
            throw new ContractError("Username is resevered")
        }
    }
    {
        if (!action.input.name && action.input.name.length > 70 && action.input.name.length < 0) {
            throw new ContractError("Name is not defined according to length requirement")
        }
    }
    {
        if (!action.input.image.length) {
            throw new ContractError("Profile Picture is undefined")
        }
    }
    //@ts-ignore 
    const owner = SmartWeave.transaction.owner
    state.user_db.push({
        id: owner,
        name: action.input.name,
        username: action.input.username,
        image: action.input.image
    })
    return { state: state }
}