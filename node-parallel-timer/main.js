const {execSync} = require('child_process');

console.log("sleep before: " + new Date())
execSync('sleep 10')
execSync(`for i in {1..10}; do date +"%H:%M:%S"; sleep 1; done`, {stdio: "inherit"})
execSync('sleep 10')
console.log("sleep after: " + new Date())