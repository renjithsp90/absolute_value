function f(n)
{
    var var1 = 0;
    var var2 = 1;
    var output = var2;
    var sum = var1+var2;
    do
    {
      output  +=","+sum;
      var1=var2;
      var2=sum;
      sum=var1+var2;
    }
    while(sum<n);
  document.write(output);
}
console.log(f(6));