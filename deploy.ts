import { WarpFactory } from "warp-contracts";
import { readFileSync } from "fs";
import { DeployPlugin } from "warp-contracts-plugin-deploy";
const contractSrc = readFileSync("./dist/init.js", "utf-8");
const stateSrc = readFileSync("./dist/init.json", "utf-8");
// Sc03k9lGDCove17se7FUPbGaV1lRxdCwuboAVwU6AlM
async function run() {
    const warp = WarpFactory.forLocal(8080).use(new DeployPlugin());
    const wallet = readFileSync("./wallet.json", "utf-8");
    const txN = await warp.deploy({
        wallet: JSON.parse(wallet),
        src: contractSrc,
        initState: stateSrc,
    });
    console.log(txN.contractTxId);
}

run()
    .then(() => console.log("Worked"))
    .catch((data) => console.log(data));
