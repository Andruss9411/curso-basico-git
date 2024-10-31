/*  
   1-> MODULOS NATIVOS DE NODE JS 
*/

import {platform, release, arch, cpus, freemem, totalmem} from "node:os";
const {hash} = await import("node:crypto");

console.log("Sistema operativo: ",platform());
console.log("Release: ",release());
console.log("Arquitectura: ",arch());
console.log("CPUs: ",cpus());
console.log("Memoria libre: ",freemem());
console.log("Memoria total: ",totalmem());

console.log("hash: ", hash.digest("Ack3rman*"));