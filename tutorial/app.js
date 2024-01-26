const os = require("os"); //built in module

// info about current user
const user = os.userInfo();

// method returns the system uptime in seconds

console.log(os.uptime() / 3600);
