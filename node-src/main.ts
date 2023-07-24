import {execSync} from 'child_process';
import isOdd from 'is-odd'

console.log(`is 5 odd: ${isOdd(5)}`);

const result = execSync(`echo "from inside the node module"`).toString();
console.log({result})

console.log("Inputs results: ")
console.log({
    arg1: process.env["ARG_1"],
    arg2: process.env["ARG_2"]
})