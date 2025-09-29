// can call earlier than the function definition
function cal1(birthYear){
    return 2025 - birthYear;
}

// can't call earlier that fucntion definition
const cal2 = function(birthYear){
    return 2025 - birthYear;
}

// With {} → return is required.
// Without {} → implicit return (no return keyword needed).
// doesn't support "this" keyword
const cal3 = (birthYear)=>{
    return 2025-birthYear;
}

let arr = [1,5,7,5,6,4]
console.log(arr.toString())
console.log(arr.length)
arr.push(10) // return the length of the array
arr.unshift(0) //add to the begining
arr.pop() //  remove the last element
arr.shift() // remove the first element
console.log(arr.indexOf(7)) // else -1
arr.includes(7) // return true or false


/* Write your code below. Good luck! 🙂 */

const calcTip = (bill) => {
    if (bill>50&&bill<300){
        return bill*0.15;
    } else {
        return bill*0.2;
    }
}

calcTip(100);

const bills = [125,555,44];
const tips = bills.map(bill=>{
    return calcTip(bill);
})

// objects can have methods
const person = {
    firstName: 'Sanjaya',
    birthYear: 1999,
    age: function(birthYear){
        return 2025-birthYear;
    },
    calcAge: function(){
        return 2025 - this.birthYear;
    }
}
console.log(person.age(1999))
console.log(person['age'](1999))


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height:1.69,
    calcBMI : function(){
        this.bmi = this.mass/(this.height*this.height)
        return bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass:92,
    height:1.95,
    calcBMI : function(){
        this.bmi = this.mass/(this.height*this.height)
        return bmi;
    }
}

const winnerName = (john.calcBMI() > mark.calcBMI()) ? john.fullName : mark.fullName
const loserName = (john.calcBMI() < mark.calcBMI()) ? john.fullName : mark.fullName
const highestBmi = (john.calcBMI() > mark.calcBMI()) ? john.calcBMI() : mark.calcBMI()
const lowerBmi = (john.calcBMI() < mark.calcBMI()) ? john.calcBMI() : mark.calcBMI()
console.log(`${winnerName}'s BMI (${highestBmi}) is heigher than ${loserName}'s (${lowerBmi})`)

for(let i=0;i<10;i++){
    console.log(i);
}

const arr1 = ["car", 5, true];
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i], typeof(arr1[i]));
}


const mixed = ["hello", 42, false, { key: "value" }, [1, 2, 3], () => "Hi!"];
console.log(mixed[3]); // { key: "value" }
console.log(mixed[4]); // [1, 2, 3]
console.log(mixed[5]()); // "Hi!"

let count = 0;
while(count<10){
    console.log(count);
    count++;
}


