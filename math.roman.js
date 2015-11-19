Math.roman = function(n){
  var roman=['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  var value=[1,     4,   5,    9,   10,  40,   50,  90,  100,  400,  500, 900, 1000];
  var res,i;
  if(!isNaN(parseInt(n,10))){ //if input is a number converts it to roman
    res ='';
    i = roman.length-1;
    while(i>=0){
      if(n>=value[i]){
        n -= value[i];
        res += roman[i];
      }
      else{
        i--;
      }
    }
  }else{ //else converts it to string
    var index;
    res = 0;
    n = n.toString();
    //checks if the string is a roman number
    for(i=0;i<n.length;i++){
      if(roman.indexOf(n.charAt(i))<0){
        return 'Not a valid numeral';
      }
    }
    i=0;
    while(i<n.length){
      //checks for unique cases
      if(i<n.length){
        index = roman.indexOf(n.charAt(i)+ n.charAt(i+1));
      }
      //checks index and updates the loop accordingly
      if(index < 0 ){
        index = roman.indexOf(n.charAt(i));
      }
      else{
        i++;
      }

      res += value[index];
      i++;
    }
  }
  return res;
};
