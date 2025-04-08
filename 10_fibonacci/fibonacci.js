const fibonacci = function(pos) {
    const fib=[1];
    pos=+pos;
   
    if (pos<0)
        return "OOPS";
    else if (pos===0)
        return 0;
    else if (pos===1 || pos===2)
        return 1;
    else
        return fibonacci(pos-1)+fibonacci(pos-2);  
    };

// Do not edit below this line
module.exports = fibonacci;
 