const calculateBtn = document.querySelector('.calculate'); 
const resetBtn = document.querySelector('.reset'); 

calculateBtn.addEventListener('click', () => {
    const getBill = document.querySelector('.bill-area input').value;
    const getTip = document.querySelector('.tip-area input').value;
    const getPeopleCount = document.querySelector('.people-area input').value;

    let setBill = document.querySelector('.bill-value h2');
    let setTip = document.querySelector('.tip-value h2');

    let setBillValue = 0;
    let setTipValue = 0;
    let setPeopleCount = getPeopleCount;

    setBillValue = getBill / setPeopleCount;
    setTipValue = getTip / setPeopleCount;

    setBill.innerHTML = `${setBillValue}$`;
    setTip.innerHTML = `${setTipValue}$`;
});

resetBtn.addEventListener('click', () => {
    let setBill = document.querySelector('.bill-value h2');
    let setTip = document.querySelector('.tip-value h2');

    const getBill = document.querySelector('.bill-area input');
    const getTip = document.querySelector('.tip-area input');
    const getPeopleCount = document.querySelector('.people-area input');

    setBill.innerHTML = "0$";
    setTip.innerHTML = "0$";

    getBill.value = " ";
    getTip.value = " ";
    getPeopleCount.value = " ";
});