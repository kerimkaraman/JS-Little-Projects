const getButton = document.querySelector('.button-area button');
let setResult = document.querySelector('.result-wrapper p');

getButton.addEventListener('click', () => {

    let getHeight = document.querySelector('.height-area input').value;
    let getWeight = document.querySelector('.weight-area input').value;

    // bmi formula : w ÷ pow(h,2);
    let setHeight = parseInt(getHeight / 100) + parseFloat(((getHeight % 100) / 100));

    let BMI = parseFloat((getWeight / Math.pow(setHeight,2)).toFixed(1));

    if(BMI < 16) {setResult.innerHTML = `BMI: ${BMI}, Severely Underweight`;}

    if(BMI >= 16 && BMI <= 18.4) {setResult.innerHTML = `BMI: ${BMI}, Underweight`;}

    if(BMI >= 18.5 && BMI <= 24.9) {setResult.innerHTML = `BMI: ${BMI}, Normal`;}
    
    if(BMI >= 25 && BMI <= 29.9) {setResult.innerHTML = `BMI: ${BMI}, Overweight`;}
    
    if(BMI >= 30 && BMI <= 34.9) {setResult.innerHTML = `BMI: ${BMI}, Moderately Obese`;}

    if(BMI >= 35 && BMI <= 39.9) {setResult.innerHTML = `BMI: ${BMI}, Severaly Obese`;}
    
    if(BMI >= 40) {setResult.innerHTML = `BMI: ${BMI}, Morbidly Obese`;}

});