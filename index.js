const inputField = document.getElementById('inputField');
const addButton = document.getElementById('addBtn');
const allDeleteBtn = document.getElementById('allDelete')
const valuesDiv = document.getElementById('outputContainer');
const randomingBtn = document.getElementById('randomingBtn')
const downAllDeleteBtn = document.getElementById('downAllDelete')

let valuesArray = [];

addButton.addEventListener('click', function () {
    const value = inputField.value;
    const valueDiv = document.createElement('div');
    const teamName = document.createElement('h1')
    const deleteBtn = document.createElement('h1')

    valuesDiv.appendChild(valueDiv);
    valueDiv.appendChild(teamName)
    valueDiv.appendChild(deleteBtn)

    if (value !== '') {
        valuesArray.push(value);
        teamName.textContent = value;
        deleteBtn.textContent = 'D'
        valueDiv.className = 'd-flex'
        teamName.className = 'newTeam'
        deleteBtn.className = 'deleteBtn'

    }

    // DELETE BUTTON
    deleteBtn.addEventListener('click', () => {
        var parentElement = deleteBtn.parentNode;
        parentElement.parentNode.removeChild(parentElement);
        const index = valuesArray.indexOf(value);
        if (index > -1) {
            valuesArray.splice(index, 1);
        }
        valuesDiv.removeChild(valueDiv);
        divContainer.parentNode.removeChild(divContainer);
    })

    // ALL DOWN ELEMENTS DELETE BUTTON
    downAllDeleteBtn.addEventListener('click', () => {
        valueDiv.parentNode.removeChild(valueDiv)
        valuesArray = []
    })
    inputField.value = '';
});

// RANDOMING BUTTON
randomingBtn.addEventListener('click', () => {
    const divContainer = document.getElementById('divContainer');

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    shuffleArray(valuesArray);

    for (let i = 0; i < valuesArray.length; i += 2) {
        const value1 = valuesArray[i];
        const value2 = valuesArray[i + 1];

        const team = document.createElement('div');
        team.textContent = `${value1} <-> ${value2}`;
        team.className = 'team'
        if (value1 === undefined || value2 === undefined) {
            valuesArray.splice(i, 1);
        }
        divContainer.appendChild(team);

        // ALL DELETE BUTTON
        allDeleteBtn.addEventListener('click', () => {
            valuesArray = []
            divContainer.removeChild(team);
        })
    }










})


