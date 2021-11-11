function palindrom (num, i = 0) {
    let reverse = Number(String(num).split(``).reverse().join(``));
    let obj = {};
    if (num !== reverse) {
        num += reverse;
        i++;
        return palindrom(num, i);
    }  else {
        obj.result = num;
        obj.steps = i;
        return obj;
    }
    
}
console.log(palindrom(78)) // {result: 4884, steps: 4} 
console.log(palindrom(96)); // {result: 4884, steps: 4}
console.log(palindrom(312)); // {result: 525, steps: 1}
