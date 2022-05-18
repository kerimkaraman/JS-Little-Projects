const getButton = document.querySelector('.add');
const getGridArea = document.querySelector('.grid-area');

getButton.addEventListener('click', () => {
    let getInput = document.querySelector('input').value;
    getGridArea.innerHTML += `
    <div class="card">
        <div class="header-area">
            <h1>HELLO</h1>
            <h2>my name is</h2>
        </div>
        <div class="card-content">
            <h1>${getInput}</h1>
        </div>
    </div>
    `;
}); 