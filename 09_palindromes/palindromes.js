const palindromes = function (sentence) {
   
    const withoutPunctuations=sentence.replace(/\W/g,'');
   
    const letters=[...withoutPunctuations.toLowerCase()];
 
    const copied=letters.slice();
  

    letters.reverse();


    return (copied.every((value,index)=>value===letters[index]));
};
// Do not edit below this line
module.exports = palindromes;
 