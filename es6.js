
// "use strict"


// console.log(this)

// class Hello{
// 	constructor(name,age){
// 		this.name = name;
// 		this.age = age;
// 	}

// 	show(){
// 		console.log(`My name is ${this.name} and my age is ${this.age}`);
// 	}

// 	static countUsers(){
// 		console.log("there are 50 users");
// 	}
// }


// class Hi extends Hello{
// 	constructor(name, age, height){
// 		super(name, age);
// 		this.height = height;
// 	}

// 	dodo(){
// 		console.log(this.name);
// 	}
// }

// let x = new Hi("saikat", 26, 5.6);

// x.dodo();

// let btn = document.querySelector("button");


// let x = () => console.log(this);


// function fn(){
// 	console.log(this);
// }

// btn.addEventListener("click", x);


// let obj = {
// 	name:"saikat",
// 	greet(){
// 		return () => this.name;
// 	}
// }


// console.log(obj.greet()())

// function test(){
// 	console.log(this.greet()())
// }

// test.call(obj)



// let obj2 = {
// 	name:"paul",
// 	greet2(){
// 		console.log(this.name);
// 	}
// }
// //window.name = "harish"
// let xx = obj2.greet2;


// let obj3 = {
// 	name: "sandy",

// 	greet3(){
// 		let y = obj2.greet2;
// 		y();
// 	}
// }

// //obj3.greet3();

// obj2.greet2.call(obj3);

// let obj = {

// 			outer(){
// 			return function inner(){
// 				return this;
// 			}
// 		},

// 		fn(){
// 			return this;
// 		}

// }


// console.log(obj.outer()())				//returns window object

// console.log(obj.fn())					//returns obj object

//for(var i = 0; i < 10; i++){
	//console.log(i)
	

	// setTimeout(function(){
	// 	for(var i = 0; i < 100; i++){
	// 		console.log("hello2");
	// 		setTimeout(function(){
	// 			console.log("hello1");
	// 		}, 500)
	// 	}
	// }, 1000)
//}

//promise chaining

// let myPromise = new Promise(function(resolve, reject){
// 	resolve(1)
// });


// let myPromise2 = new Promise(function(resolve, reject){
// 	resolve(2)
// });


// myPromise
// .then(function(data){
// 	if(data){
// 		console.log(data)
// 		return myPromise2;
// 	}
// })
// .then(function(data){
// 	console.log(data)
// })
// .catch(function(err){
// 	console.log(err);
// })


// let g;
// {
// 	let a = 6;
// 	g=function(){
// 		 console.log(a);
// 	}
// }

// g();


// function counter(){
// 	let count = 0;
// 	return function(){
// 		return (count += 1);
// 	}
// }

// let c = counter()

// console.log(c())
// console.log(c())
// console.log(c())
// console.log(c())

// let a = "hello"
// let b = "";
// for(let i = a.length-1; i >= 0; i--){
// 	//console.log(a[i])
// 	b += a[i];
// }

// console.log(b);

/*
function same(arr1, arr2){
	if(arr1.length != arr2.length){
		return false;
	}

	let arrayObj1 = {};
	let arrayObj2 = {};

	for(let i of arr1){
		arrayObj1[i] = (arrayObj1[i] || 0) + 1; 
	}

	for(let i of arr2){
		arrayObj2[i] = (arrayObj2[i] || 0) + 1; 
	}

	for(let i in arrayObj1){
		if(!(i**2 in arrayObj2)){
			return false;
		}
		if(arrayObj1[i**2] != arrayObj2[i]){
			return false;
		}
	}
	return true;
}


console.log(same([1,2,3,2],[1,9,4,4,4]))

console.log(same([1,2,3],[1,9]))

console.log(same([1,2,1],[4,4,1]))

*/
/*
function anagram(str1, str2){
	str1 = str1.toLowerCase().split("");
	str2 = str2.toLowerCase().split("");

	if(str1.length != str2.length){
		return false;
	}

	let strObj1 = {};
	let strObj2 = {};

	for(let i of str1){
		strObj1[i] = (strObj1[i] || 0) + 1;
	}
	console.log(strObj1)
	for(let i of str2){
		strObj2[i] = (strObj2[i] || 0) + 1;
	}
	console.log(strObj2)
	for(let i in strObj1){
		if(!(i in strObj2)){
			return false;
		}
		if(strObj1[i] != strObj2[i]){
			return false;
		}
	}

	return true;
}

console.log(anagram("raT", "rat"))

*/

//multiple pointer

/*

function findSum(arr){
	let left = 0;
	let right = arr.length - 1;

		while(left < right){
			let sum = arr[left] + arr[right];
			if(sum == 0){
				return [arr[left],arr[right]];
			}else if(sum > 0){
				right--;
			}else{
				left++;
			}
		}
	
}


console.log(findSum([-3,-2,-1,0,1,2,3]))

console.log(findSum([-4,-2,-1,0,1,2]))

*/

//count unique value
/*
function countUniqueValue(arr){
	let uObj = {};
	let ctr = 0;

	for(let i of arr){
		uObj[i] = (uObj[i] || 0) + 1;
	}
	for(let i in uObj){
		if(i in uObj){
			ctr++;
		}
	}

	console.log(ctr);
}

countUniqueValue([])
*/

//sliding window
/*
function recurse(num){
	if(num==1) return 1;
	return num * recurse(num-1);
}

console.log(recurse(5))


let rev = 0, rem;

function reverse(val){
	while(val != 0){
		rem = val % 10;

		rev = rev * 10 + rem;
		
		val = Math.floor(val/10);
	}
	return rev;
}

console.log(reverse(1234))
*/
/*
let Person  = function(name, age){
	this.name = name;
	this.age = age;
}


let john = new Person("John", 26);

Person.prototype.print = function(){
	console.log(this.name + " " + this.age);
}

john.print();

*/
/*
class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	show(){
		console.log(this.name + " " + this.age);
	}
}

class John extends Person{
	constructor(name, age){
		super(name, age);
	}

	show2(){
		console.log("My name is " + this.name + " and my age is " + this.age);
	}
}


let x = new John("John", 25);

x.show2()
*/


// function Brick(){
// 	this.name = "Brick";
// }

// function Wall(){
// 	debugger
// 	Brick.call(this);
// 	return this.name;
// }


// console.log(Wall())
// "use strict"
// let obj = {
// 	greet(){
// 		return function(){
// 			return this;
// 		}
// 	}
// }


// console.log(obj.greet()())

/*

let palindrome = (val) => val === val.split("").reverse().join("") ? "Palindrome" : "Not Palindrome";

console.log(palindrome("anan"))
*/

// setTimeout(() =>{
// 	console.log("first TO");
// 	setTimeout(()=>{
// 		console.log("second TO");
// 		setTimeout(()=>{
// 			console.log("third TO");
// 		},1000)
// 	},1000)
// },1000)




// let myPromise = new Promise(function(resolve, reject){

// 	let x = true

// 	resolve(x);
// })
// .then(function(data){
// 	setTimeout(()=>{
// 		console.log("first TO");
// 	},1000);
// })
// .then(function(data){
// 	setTimeout(()=>{
// 		console.log("second TO");
// 	},2000);
// })
// .then(function(data){
// 	setTimeout(()=>{
// 		console.log("third TO");
// 	},3000);
// })
/*

function check(str, key){
	str = str.split("");

	if(str.indexOf(key) == -1){
		console.log("NOT FOUND");
		return 0;
	}

	let myObj = {}

	for(let i of str){
		myObj[i] = (myObj[i] || 0) + 1;
	}

	for(let i in myObj){
		if(key in myObj){
			console.log(myObj[key]);
			break;
		}
	}

	//console.log(myObj);
}


check("aaaa","i")

*/
/*

function linearSearch(arr, key){
	for(let i = 0; i < arr.length; i++){
		if(arr[i] == key){
			return i;
		}
	}
	return -1;
}
let t1 = performance.now();

console.log(linearSearch([22,11,45,21,94],45))

let t2 = performance.now();

console.log(t2 - t1);

*/

/*
function findDuplicate(arr){
	let obj = {}
	for(let i of arr){
		obj[i] = (obj[i] || 0) + 1;
	}

	//console.log(obj);
	let dcArr = [];
	for(let i in obj){
		if(obj[i] > 1){
			dcArr.push(Number(i));
		}
	}
	return dcArr;
}

console.log(findDuplicate([1,2,4,4,5,6,7,7,19,7,9,9,9,9]))

*/

function binarySearch(arr,key){
	let start = 0;
	let end = arr.length - 1;
	let middle = Math.floor((start + end) / 2);

	while(arr[middle] !== key && start <= end){
		if(key < arr[middle]) end = middle - 1;
		else start = middle + 1;
		middle = Math.floor((start + end) / 2);
	}
	return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([1,3,5,6,10,12,15,25,28,30,35],30));



[4,1,10,8].sort((a,b) => a-b);

let swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

let arr = [4,2,7,1];

console.log(swap(arr, 1,2))


function binarySort(arr){
    let swap;
    for(let i = arr.length; i > 0; i--){
        swap = true;
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                swap = false;
            }
        }
        if(swap)break;
    }
    return arr;
}

binarySort([12,1,45,19,-1])



function selectionSort(arr){
    let lowest;
    for(let i = 0; i < arr.length; i++){
        lowest = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i != lowest){
            [arr[lowest], arr[i]] = [arr[i], arr[lowest]];
        }
    }
    return arr;
}

selectionSort([22,12,9,34,14,-1])


function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        var cval = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > cval; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = cval;
    }
    return arr;
}

insertionSort([2,1,5,3,99,49])