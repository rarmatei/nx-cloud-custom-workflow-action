const {execSync} = require('child_process');

console.log("This is happening on our post step.")

execSync(`for i in {1..10}; do date +"%H:%M:%S"; sleep 1; done`, {stdio: "inherit"})