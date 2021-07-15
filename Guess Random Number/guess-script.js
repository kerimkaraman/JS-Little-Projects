let randomNum = Math.floor(Math.random()*100) + 1;
let counter = 0;

document.querySelector("button").addEventListener('click', function() {
    var myGuess = document.querySelector("input").value;
    console.log(myGuess);
    console.log(randomNum);
   

    if(myGuess >= randomNum) {
        document.querySelector(".lowOrHigh").innerHTML = "Tahmininiz sayıdan büyük.";
        counter++;
        document.querySelector(".lowOrHighDiv").style.backgroundColor = "red";
        document.querySelector(".lowOrHighDiv").style.color = "white";
    }

    if(myGuess <= randomNum) {
        document.querySelector(".lowOrHigh").innerHTML = "Tahmininiz sayıdan küçük.";
        counter++;
        document.querySelector(".lowOrHighDiv").style.backgroundColor = "red";
        document.querySelector(".lowOrHighDiv").style.color = "white";
    }
    if(randomNum == myGuess) {
        document.querySelector(".lowOrHigh").innerHTML = "Tebrikler! Tahmininiz Doğru";
        document.querySelector(".lowOrHighDiv").style.backgroundColor = "green";
        document.querySelector(".lowOrHighDiv").style.color = "black";
    }

    if(counter == 10) {
        document.querySelector(".lowOrHigh").innerHTML = "Tahmin Hakkınız Dolmuştur. Kaybettiniz !";
        document.querySelector("button").style.
        document.querySelector(".lowOrHighDiv").style.backgroundColor = "red";
        document.querySelector(".lowOrHighDiv").style.color = "white";
    }
});

