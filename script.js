// Function that reverses a string
function reverse(str){
	return str.reverse();
}

// Function that counts the number of characters in a string
function count(str){
	return str.length;
}

// function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(sentence) {
	// Split the sentence into an array of words
	let words = sentence.split(' ');
	
  //   Iterate over each word and capitalize the first letter
	for (let i = 0; i < words.length; i++) {
	  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
	}
	
	// Join the words back into a sentence
	return words.join(' ');
  }
  
  console.log(capitalizeWords('hello world'));

//  Functions to find the maximum and minimum values in an array of numbers
function findMax(arr){
    let max = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

function findMin(arr){
    let min = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

// Function that calculates the sum of all elements in an array.
function sumArray(arr) {
	let sum = 0; 
	
	for (let i = 0; i < arr.length; i++) {
	  sum += arr[i];
	}
	
	return sum;
  }

//   function that filters out elements from an array based on a given condition.
function filterArrayByCondition(arr, condition) {
	return arr.filter(condition);
  }

// function to calculate the factorial of a given number.
  function factorial(n) {
	if (n === 0) {
	  return 1;
	}
	return n * factorial(n - 1);
  }
  

//   function to check if a number is prime or not.
function isPrime(num) {
	if (num <= 1) {
	  return false;
	}
	
	for (let i = 2; i <= Math.sqrt(num); i++) {
	  if (num % i === 0) {
		return false;
	  }
	}
	
	return true; 
  }

//   function to generate the Fibonacci sequence up to a given number of terms. 
  function generateFibonacci(numTerms) {
	let fibonacciSequence = [];
	
	// Handle special cases: first two Fibonacci numbers
	if (numTerms >= 1) {
	  fibonacciSequence.push(0);
	}
	if (numTerms >= 2) {
	  fibonacciSequence.push(1);
	}
	
	// Generate subsequent Fibonacci numbers
	for (let i = 2; i < numTerms; i++) {
	  const nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
	  fibonacciSequence.push(nextFibonacci);
	}
	
	return fibonacciSequence;
  }
  

  
  
 