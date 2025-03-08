const sumAll = function(num1,num2) {
    let total=0;
    let upper=num1>num2?num1:num2;
    let lower=num1<num2?num1:num2;
    let upFloor=Math.floor(upper);
    let lowFloor=Math.floor(lower);
    if (lower<0|| upper<0 || upFloor!==upper||lowFloor!==lower || isNaN(upper) ||isNaN(lower))
        return "ERROR";
    for (i=lower;i<=upper;i++)
        total+=i;
    return total;
};

// Do not edit below this line
module.exports = sumAll;
