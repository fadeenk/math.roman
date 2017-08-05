Numeral = {
  roman : function(n){
    // Supports up to 4,999,999,999
    // see http://www.csgnetwork.com/csgromancnv.html and reference wolfram for validation
    // http://www.wolframalpha.com/input/?i=4999999999+in+roman+numerals
    var roman=[
      'I', 'IV', 
      'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M',
      'V\u0305','I\u0305X\u0305', 'X\u0305', 'X\u0305L\u0305', 'L\u0305', 'X\u0305C\u0305', 'C\u0305', 'C\u0305D\u0305', 'D\u0305', 'C\u0305M\u0305', 'M\u0305',
      'V\u033F','I\u033FX\u033F', 'X\u033F', 'X\u033FL\u033F', 'L\u033F', 'X\u033FC\u033F', 'C\u033F', 'C\u033FD\u033F', 'D\u033F', 'C\u033FM\u033F', 'M\u033F',
    ];
    var value=[
      1,     4,   
      5,         9,                10,        40,               50,        90,               100,       400,             500,        900,              1000,
      5000,      9000,             10000,     40000,            50000,     90000,            100000,    400000,          500000,     900000,           1000000,
      5000000,   9000000,          10000000,  40000000,         50000000,  90000000,         100000000, 400000000,       500000000,  900000000,        1000000000,
    ];
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
