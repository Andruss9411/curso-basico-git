import DataAcces from "../dataAccess/dataAccess.js";

const dataAccess =  new DataAcces();

(async () => {    
    await dataAccess.connect();
})();
