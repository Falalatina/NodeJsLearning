const os = require("os"); //built in module

// info about current user
const user = os.userInfo();

// method returns the system uptime in seconds
//console.log(os.uptime() / 3600);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
