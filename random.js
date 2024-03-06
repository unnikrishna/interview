//////////////////////////////////////////////////////PROMISE ALL ANY ///////////////////////////////////////////

Promise.myAny = function(promises){
  let result = [];
  let promiseCount = 1

  return new Promise((resolve, reject)=> {
    promises.forEach((promise, index) => {

        promise.then(val => {
     result[index] = val
        if(promiseCount === promises.length) {
          resolve(val)
      }
        }).catch(err => {
          if(promiseCount === promises.length) { 
             reject('ALL promises were rejected')
           } 
          promiseCount++;
         
          
        })
        
     
    })
  })
}

const p1 = new Promise((resolve,reject)=>reject(33))
const p2 = new Promise((resolve,reject)=>reject(34))
const p3 = new Promise((resolve, reject)=>reject(35))

const p4 = Promise.myAny([p1, p2, p3])

p4.then(val=> console.log(val))
p4.catch(val=> console.log(val))


//////////////////////////////////////////////////////JS ///////////////////////////////////////////
var a = 10;
function papa() { 
  console.log(a);
  var a = 5;
}
papa()

console.log(NaN == NaN)
console.log([]+[]+'foo'.split(""))
console.log('hello' instanceof String); 

/* async function asyncFunc() {
   console.log('A');
   await new Promise(resolve => {
   console.log('E')
   setTimeout(()=>{
   console.log('F')
    return resolve()
   }, 1000)
   });
   console.log('B');
}
console.log('C');
asyncFunc();
console.log('D'); */


/* console.log('Start');

Promise.resolve(console.log('Promise X')).then(() => console.log('Promise 1'));
setTimeout(() => console.log('Timeout 1'), 0);

Promise.resolve().then(() => console.log('Promise 2'));
setTimeout(() => console.log('Timeout 2'), 0); */

/* console.log('End'); */

function* generateSequence() {
   yield 1;
   yield 2;
   return 3;
}

const generator = generateSequence();
/* console.log(generator.next());
console.log(generator.next());
console.log(generator.next()); */
/* 
function add(a, b) {
  return a + b;
}

function multiplyBy(factor, number) {
  //return function (number) {
    return number * factor;
 // };
}

const addAndMultiplyByTwo = (a, b) => multiplyBy(add(a, b),8);
console.log(addAndMultiplyByTwo(3, 4)); */

/* function Parent() {
console.log('paarent')
}
function Child() {
console.log('child')

}
Child.prototype = new Parent();
var obj = new Child();
console.log(Child.prototype) */
/* 
function Person(name) {
 this.name = name;
}
Person.prototype.greet = function() {
 return "Hello, my name is " + this.name;
};
var person1 = new Person("Lokesh Prajapati");
var person2 = new Person("Lucky");
console.log(person2.greet())


var x = 10;
function testNum() {
 console.log(x);
 if (true) {
 var x = 20;
 }
 console.log(x);
}
testNum();

//////////////////////////////////////////////////////Missing element ///////////////////////////////////////////

function findMissingElements(inputArr) {
    const missingElements = [];
    for (let i = 1; i < inputArr.length; i++) {
        const diff = inputArr[i] - inputArr[i - 1];
        if (diff > 1) {
            for (let j = 1; j < diff; j++) {
                missingElements.push(inputArr[i - 1] + j);
            }
        }
    }
    return missingElements;
}

const inputArr = [1, 2, 4, 6, 9];
console.log(findMissingElements(inputArr)); */

/* 
let unSortArr = [9, 7, 5, 5, 11, 12, 2, 14, 3, 10, 6];

//////////////////////////////////////////////////////SORT ARR ///////////////////////////////////////////

function sortArray(unSrArr) {

  for(let i= 0; i< unSrArr.length; i++){
      for(let j= i+1; j< unSrArr.length; j++){
        if(unSrArr[i] > unSrArr[j]){
          const temp = unSrArr[i]
          unSrArr[i] = unSrArr[j]
          unSrArr[j] = temp
        }
        
      }
  }
  return unSrArr
}
//////////////////////////////////////////////////////QUICK SORT ///////////////////////////////////////////
function quickSort(array){
  if(array.length <= 1) return array;
  let pivot = array[0],
  left = [],
  right = [];
  
  for(i=1; i<array.length; i++)	{
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]) 
  }
  
  return quickSort(left).concat(pivot,quickSort(right) )
  
}

console.log(quickSort(unSortArr)) */
//////////////////////////////////////////////////////ELEMENT IN ARRAY ///////////////////////////////////////////
function elementInArray(array, key) {
	/* let start = 0;
	  let end = array.length;
	  while(start <= end) {
	  let middle = Math.floor((start+end)/2)
	    if(array[middle] === key)	{
	      return middle
	    } else if(array[middle] < key) {
	      start = middle+1
	    } else {
	      end = middle - 1
	    }
	    
	  }
	  return false */
    const str = array.join(',')
    if(str.includes(key)) return str.indexOf(key)
}

console.log(elementInArray([1,3,5,6,9,14,29,57,89],29));

//////////////////////////////////////////////////////PERFECT NUMBER ///////////////////////////////////////////
/* const isPerfectNum = (inputNum) => {
    let result = true;
    let factSum = 0;
    for(let i=1; i<inputNum; i++)
    {
        if(inputNum % i == 0)
            factSum = factSum+i;
    }
    return (factSum == inputNum) ? true : false;
}
console.log(isPerfectNum(6));
console.log(isPerfectNum(10));
console.log(isPerfectNum(28)); */

/* n =10;
let total = 0;
for(var i = 0; i < n ; i++){
  let week = parseInt(i / 7) + 1;
  total += week + (i % 7)
}
console.log(total)
 */
//////////////////////////////////////////////////////DEPOSIT ///////////////////////////////////////////
 function findDeposit(n) {
 
 	let total = 0;
  
  for(i=0; i<n; i++) {
  	let week = parseInt((i/7))+1
    total += week + (i%7)
  }
  
  return total;
 }
 console.log(findDeposit(10))

const sumArr = [1,3,5,7,8,9,12]

function findSum(arr, sum){
	let result = [];
  let map ={}
  for(i=0; i<arr.length; i++) {
  	let rem = sum - arr[i];
    console.log(i, map[arr[i]])
    if(map[arr[i]] !== undefined) {
    	result.push([i, map[arr[i]]])
    }
    map[rem]= i;
    
  }
  console.log(map)
  return result
}
console.log(findSum(sumArr,13))
//////////////////////////////////////////////////////CONVERT TO BINARY ///////////////////////////////////////////
function convertToBinaryAndOctal(number) {
    // Convert the number to binary (base 2)
    const binary = number.toString(2);

    // Convert the number to octal (base 8)
    const octal = number.toString(8);

    return { binary, octal };
}
function convertBase(num, base){
var s=[]
var st=""
   while( num > 0 ){
      st = num % base + st
      num = Math.floor(num /= base)
   }
   return  st
}
// Example usage:
const number = 24;
const result = convertBase(number, 8);
console.log(result)










