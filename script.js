function threeSum(arr, target) {
// write your code here
	arr.sort(function(a,b) { return a-b});
	let diff = Number.MAX_VALUE;
	let ans = 0;
	for(let i = 0; i < arr.length; i++){
		let first = arr[i];
		let start = i+1;
		let end = arr.length-1;
		while(start < end){
			if(first + arr[start] + arr[end] === target){
				return target;
			}
			else if(Math.abs(first + arr[start] + arr[end] - target) < diff){
				diff = Math.abs(first + arr[start] + arr[end] - target);
				ans = first + arr[start] + arr[end];
			}
			if(first + arr[start] + arr[end] > target){
				end--;
			}else{
				start++;
			}
		}
	}
  return ans;
}

module.exports = threeSum;
