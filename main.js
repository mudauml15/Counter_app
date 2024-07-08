let counter = 0;

function increment(){
    counter++;
    console.log(counter);
}

function decrement(){
    if (counter > 0){
        counter--;
        console.log(counter);
    } else {
        alert("Decrement stopped.");
    }
}


