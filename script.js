// console.log("hello");
// key generation

let secretKey = "";
function generateKey(){
    secretKey = Math.round(Math.random()*1000000).toString();
    // console.log(secretKey);
    if(secretKey.length == 6){
        return secretKey;
    }else{
        return generateKey();
    }
}

document.getElementById("generate-key").addEventListener('click', function(){
    // console.log("hello");
    // console.log(generateKey());
    document.getElementById('display-key').innerText = generateKey();

})

// displaying digits
let appendInput = "";
document.getElementById('display-digit').addEventListener('click', function(event){
    // console.log(event.target.innerText);
    let showDigit = event.target.innerText;
    console.log(showDigit);
    if(showDigit == 'del'){
        backSpace();
    }
    else if(showDigit == 'Submit'){
        checkDigits();

    }
    else if(showDigit == 'Clear'){
        clearDigits();
    }
    else {
        enterDigit(showDigit);
    }
})

// appeding digits
function enterDigit(digit){
    // console.log("enter digit function");
    if(appendInput.length<6){
    appendInput = appendInput + digit;
    // console.log(appendInput);
    document.getElementById('entered-key-display').innerText = appendInput;
    }
}

// delete single digits
function backSpace(){
    appendInput = appendInput.slice(0, -1);
    document.getElementById('entered-key-display').innerText = appendInput;
}
// clear digits

function clearDigits(){
    document.getElementById('entered-key-display').innerText = "";
}


// matching digits
function checkDigits(){
    let autoDigits = document.getElementById('display-key').innerText;

    let enteredDigits = document.getElementById('entered-key-display').innerText;
    // console.log(enteredDigits);

    if(autoDigits == enteredDigits){
        document.getElementById('showMessage').innerHTML = "&#128512; Congrations!! Key Matched";
        ocument.getElementById('showMessage').style.color = "green";
    }
    else{
        document.getElementById('showMessage').innerHTML = " &#128514; Opps!! Key didn't Match";
        document.getElementById('showMessage').style.color = "red";
    }
}



