Numeral = {
  roman : function(n){
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
  },
  arabic : function(n){
    var res;
    var arabicNums = [1632, 1633,1634,1635,1636,1637,1638,1639,1640,1641,46];
    if(isNaN(n)){
      res = 0;
      var index, deciaml;
      decimal = n.indexOf('.');
      if(decimal<0){
        decimal = n.length;
      }
      for(i=0;i<n.length;i++){
        index = arabicNums.indexOf(n.charCodeAt(i));
        if(index < 0){
          return 'Not a valid number';
        }

        if(i !== decimal){
          var multipler = Math.pow(10,decimal-1-i);
          if(multipler<1){
            res += index * Math.abs(Math.pow(10,decimal-i));
          }
          else
            res += index * multipler;
        }
      }
      if(decimal === n.length){
        return res;
      }
      else {
        return res.toFixed(n.length-decimal-1);
      }
    }
    else{
      res ='';
      n = n.toString();
      for(i=0;i<n.length;i++){
        if(n.charAt(i)!='.'){
          if(isNaN(n.charAt(i))){
            return 'Not a valid numeral';
          }
          res += String.fromCharCode(arabicNums[parseInt(n.charAt(i))]);
        }
        else{
          res += '.';
        }
      }
      return res;
    }
  }
}
