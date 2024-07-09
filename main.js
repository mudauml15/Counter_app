let counter = 0;

function increment(){
    counter++;
    // console.log(counter);
let results = document.getElementById('display');
    results.innerHTML= counter

}

function decrement(){
    if (counter > 0){
        counter--;
        // console.log(counter);

let results = document.getElementById('display');
    results.innerHTML= counter
    } else {
        alert("Decrement stopped.");
    }
}



