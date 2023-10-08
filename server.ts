import ArLocal from "arlocal";
(async () => {
    const arlocal = new ArLocal(8080, true, 'db', true);
    await arlocal.start()
})()