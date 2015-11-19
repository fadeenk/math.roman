Math.roman = function(n){
  var roman=['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  var value=[1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var res;
  if(!isNaN(parseInt(n,10))){
    res ='';
    var i = roman.length-1;
    while(i>=0){
      if(n>=value[i]){
        n -= value[i];
        res += roman[i];
      }
      else{
        i--;
      }
    }
  }
  return res;
};
