
// Task 1
function isPalindrome(str) {
	let left = 0;
	let right = str.length - 1;

	while (left < right) {
		if (str[left] !== str[right])
			return false;
	    left++;
	    right--;
	}
	return true;

}
console.log(isPalindrome('124321'))

// Task 2
function isPrime(num) {
	for (let i = 2; i * i <= num; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}
console.log(isPrime(1));