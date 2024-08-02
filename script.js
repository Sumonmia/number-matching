// console.log("hello");

function generateKey(){
    let secretKey = Math.round(Math.random()*1000000).toString();
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

