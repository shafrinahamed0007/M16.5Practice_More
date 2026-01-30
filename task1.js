/**
 * Write a JavaScript code to revers the array colors without using the reverse method
 */

let color = ["red", "blue", "green", "yellow", "orange"];
let  reversColor = [];

for(let i =0; i<color.length; i++){
    reversColor.unshift(color[i]);
}

console.log(reversColor);