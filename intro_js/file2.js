// const myAge = require("./file1")
// const {myAge} = require("./file1")
// import age from './colorPrint.js'
import chalk from 'chalk';
import {age} from "./file1.js"

console.log("My age ", chalk.red(age))