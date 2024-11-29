function studentGrade(n){
    if (n > 79){
        console.log('A');
    } else if ( n => 60 && n <= 79){
        console.log('B');
    } else if ( n <= 59 && n > 49){
        console.log('C');
    } else if ( n <= 49 && n > 40){
        console.log('D');
    }else {
    console.log('E');
    }
    return 'You Entered: ' + n;
}
const Grade = studentGrade(98);
console.log(Grade)