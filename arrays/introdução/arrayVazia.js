const arrayVazia = [];
console.log(arrayVazia) // []
console.log(arrayVazia.length) // 0 


const arrayVazia1 = [];
console.log(arrayVazia1[0]) // undefined


const arrayVazia2 = [,,,];
console.log(arrayVazia2.length) // 3
console.log(arrayVazia2[0]) // undefined
console.log(arrayVazia2[1]) // undefined
console.log(arrayVazia2[2]) // undefined


const arrayVazia3 = [,,,];
console.log(arrayVazia3.length) // 3
arrayVazia3.push(50)
console.log(arrayVazia3) // [ <3 empty items>, 50 ]
console.log(arrayVazia3.length) // 4