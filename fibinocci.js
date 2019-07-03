function fib(n) {
  let [a , b] = [0 , 1], sum = 1;
  let series = [];
  do {
    //output +=","+sum;
    series.push(sum);
    sum = a+b;
    [a, b] = [b, sum];
  } while(sum<n);
  return series.join(",");
}
console.log(fib(6));