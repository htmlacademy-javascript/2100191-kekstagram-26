
randomInteger = (min, max) => {
 
  if (max < min) {
  return Math.floor(Math.random() * (min - max + 1)) + max;
  } else if ( min == max) {
   return max ;
  } else {
   return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

randomInteger(100 , 2);


lineLengthTest = (check, max) =>{
 
  if (check <= max) {
   return true 
  } else { 
   return false
  } 
};

lineLengthTest(100, 200);
