const reverseString = function(string) {
    const letters=string.split('');
    let result='';
    for (let i =letters.length-1;i>-1;i--)
    {
        result+=letters[i];        
    } 
    return result;
};

// Do not edit below this line
module.exports = reverseString;
