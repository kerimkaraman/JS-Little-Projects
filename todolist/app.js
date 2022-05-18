const getButton = document.querySelector('.input-area button');

getButton.addEventListener('click', () => {
    let getInput = document.querySelector('.input-area input').value;
    const getUl = document.querySelector('.wrapper');
    
    getUl.innerHTML += `<li>${getUl.children.length+1}. ${getInput}</li>`;
    
    let getListItems = document.querySelectorAll('.wrapper li');

    getListItems.forEach(function(li,index) {
        li.addEventListener('click', () => {
            if(li.classList.contains('disable')){
                li.classList.remove('disable');
            }
            else {
                li.classList.add('disable');
            }
        });
        console.log('Working');
    });

});

