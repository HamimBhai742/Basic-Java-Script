// week of day
const day=57;
switch (day){
    case 1:
        console.log("Saterday");
        break;
    case 2:
        console.log("Sunday");  
        break;
    case 3:
        console.log("Monday");    
        break;
    case 4:
        console.log("Tuesday");    
        break;
    case 5:
        console.log("Wednesday");    
        break;
    case 6:
        console.log("Thursday");    
        break;
    case 7:
        console.log("Friday");    
        break;
    default:
        console.log("No Defiend");  
}


// Boolean

const passed=true;
switch (passed){
    case true:
        console.log("Taile alaker sobaire misti khawmu");
        break;
    case false:
        console.log("Ami Ghor theke 15 din ber hobo na");
        break;
    default:
        console.log("Pera nai Chill");
}

// grading For mark
function calcGrading(mark){
    let gradingMark
    switch (true){
        case (mark<=100 && mark>=80):
            gradingMark = "A+";
            break;
        case (mark<=79 && mark>=70):
            gradingMark = "A";
            break;
        
        case (mark<=69 && mark>=60):
            gradingMark = "A-";
            break;
        
        case (mark<=59 && mark>=50):
            gradingMark = "B";
            break;
        
        case (mark<=49 && mark>=40):
            gradingMark = "C";
            break;
        case (mark<=39):
            gradingMark ="F";
            break;
        default:
            return "Invalid";  
    }
    return `You Got ${gradingMark} Grade`
}

const firstPerson=calcGrading(26);
console.log(firstPerson);
const sceondPerson=calcGrading(46);
console.log(sceondPerson);
const thirdPerson=calcGrading("fdtsdfd");
console.log(thirdPerson);