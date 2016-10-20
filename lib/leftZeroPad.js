leftZeroPad = function(str, digits, char){
  // console.log('in left pad')
  str = String(str);

  var length = digits - str.length;
  var i=0;
  while(i < length){
    str = char + str;
    i++;
  }

  return str;
}
