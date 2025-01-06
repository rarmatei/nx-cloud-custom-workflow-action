const {execSync} = require('child_process');

execSync(`for i in {1..10}; do date +"%H:%M:%S"; sleep 1; done`, {stdio: "inherit"})
