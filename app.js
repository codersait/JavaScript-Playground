/*----Modules--*/
import prompt from 'prompt-sync';
const input = prompt();

/* clear the console */
console.clear()

/* Start to code here*/

const name = input('What is your name? ');
console.log(`Hello ${name}`);