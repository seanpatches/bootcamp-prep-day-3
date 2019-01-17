var x = 15

if(x>12){
    console.log(x);
    console.log('grooving with if!');
}

if(x=15){
    console.log('you did it!');
}

else{
    console.log('too small!');
}

//1. Initialize
//2. Condition
//3. Post Loop Action
for(var i=0; i<x; i++){

/// Prints all numbers that are EVEN
    if( i%2 === 0){
        console.log(i);
    }
}


///CREATES FUNCTION
function sayHello(){
    console.log('hi');
}

if(x % 2 === 0){
    sayHello()
}

///eslint-disable-next line

///Function to obtain number from input and print even or odd
function evenOrOdd(){
    var input = document.getElementById('number');
    console.log(input.value);

    var y = input.value;

    if(y % 2 === 0){
        console.log('even')
}

    else {
        console.log('odd');
    }
}

//// NAME OF FUNCTION +paranthesis RUNS THE FUNCTION
sayHello();

