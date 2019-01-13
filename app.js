let disp = document.querySelector(".disp");


let arr = [1,2,4,5,6,7,8,9,10,11, 13 , 43, 89, 100];
let val = 0;

function check(arr){
	for(let i = 1; i <= 100; i++){
		if(arr.indexOf(i) == -1){
			console.log(i + " is not present");
		}
	}
}

//check(arr);


function add(n){
    return n*(n+1)/2;
}

function addManual(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum = sum + i;
    }
    return sum;
}
let t1, t2;

t1 = performance.now();
console.log(addManual(10000));
t2 = performance.now();

console.log("Time taken = " + (t2-t1));


t1 = performance.now();
console.log(add(10000));
t2 = performance.now();

console.log("Time taken = " + (t2-t1));