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

