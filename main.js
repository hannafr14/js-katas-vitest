// commonjs - cost axios = require('axios');
//module - import {axios} from 'axios'; 

import { fizzBuzz } from "./src/fizzbuzz/fizzbuzz.js";

for (let num = 1; num <= 100; num +=1) {
    console.log(fizzBuzz(num));
}