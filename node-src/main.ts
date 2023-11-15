import {execSync} from 'child_process';
import isOdd from 'is-odd'

console.log(`Is 5. odd: ${isOdd(5)}`);

const result = execSync(`echo "We can even execute bash commands in here!"`).toString();
console.log({result})

console.log("You can also pass inputs and access them as env values: ")
console.log({
    baseSha: process.env["BASE_SHA"],
    failFast: process.env["FAIL_FAST"]
})
