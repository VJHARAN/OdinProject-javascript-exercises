const findTheOldest = function(people) {
     let d=new Date(2025,3);
     let res=people.sort((person1,person2)=>{
        if (!person1.yearOfDeath)
            person1.yearOfDeath=d.getFullYear();
        if (!person2.yearOfDeath)
            person2.yearOfDeath=d.getFullYear();
        
        p1Age=person1.yearOfDeath-person1.yearOfBirth;
        p2Age=person2.yearOfDeath-person2.yearOfBirth;
        return p1Age>p2Age?-1:1;
    });
    return (res[0]);
    
};
// Do not edit below this line
module.exports = findTheOldest;
