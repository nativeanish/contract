import { Warp, WarpFactory } from "warp-contracts";
import Arweave from "./node_modules/warp-contracts/node_modules/arweave"
import { readFileSync } from "fs";
(async () => {
    const wallet = readFileSync("./wallet.json", "utf-8");
    const arweave = Arweave.init({
        host: "15.206.93.26",
        port: 8080,
        protocol: "http"
    })
    const warp = WarpFactory.forLocal(8080, arweave)
    const contract = warp.contract("X1p28JdeINYahFBlQR5yFr6F5QvmLUGt37gP9R035jw").connect(JSON.parse(wallet))
    const state = await contract.viewState({ function: "check_username", username: "nativeanish" })
    console.log(state)
})()