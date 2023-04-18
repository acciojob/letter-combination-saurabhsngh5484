function letterCombinations(input_digit) {
  //Complete the function
	if(input_digit==""){
		return [];
	}
	let combination = [ '0','1','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
	let res = [];
	let q = [''];
	while(q.length>0){
		let s = q.shift();

		if(s.length === input_digit.length){
			res.push(s);
		}
		else{
			let index = Number(input_digit[s.length]);
			let inner = combination[index];
			for(let i = 0; i<inner.length; i++){
				q.push(s+inner[i]);
			}
		}
	}
	return res;
}

// let num = '23';
// let arr = letterCombinations(num);
// console.log(arr);

module.exports = letterCombinations;