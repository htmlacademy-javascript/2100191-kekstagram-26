test = function ( check , max){

 if( check <= max) return true 
 else return false
};

test ( 300 , 200);




test2 = function ( min , max){

if ( max < min) return Math.floor(Math.random() * min);
else if ( min == max) return max ;
else return Math.floor(Math.random() * max);

};

test2 ( 100 , 2);
