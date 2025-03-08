const removeFromArray = function(inArray,...manyvals) {
    const result=[];
   mainloop: for (const i of inArray){
            for (const j of manyvals){
                if( i===j)
                    continue mainloop;
        }
        result.push(i);
    }
    // console.log(result)
    return result;
};


// removeFromArray([1,2,3,4,5,6,3,6,7,8],3,7,8)
// Do not edit below this line
module.exports = removeFromArray;
