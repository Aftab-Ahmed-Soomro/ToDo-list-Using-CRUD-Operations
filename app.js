let inputData = document.getElementById('inputData');
let storeData = [];
let error = document.getElementById('error');
let list = document.querySelector('.list');
function addData () {
    if (inputData.value.trim()=== '') {
        error.innerText = 'Please enter a value';
        setTimeout(remove, 2000);
    }
    else {
        storeData.push(inputData.value);
        inputData.value = '';
        showData ();
    }
}

function showData () {
    list.innerHTML = '';
    for (let i = 0; i < storeData.length; i++) {
        list.innerHTML += `
        <h5 class="para d-flex align-items-center mt-2 mb-3 ms-3">${i + 1}) ${storeData[i]}</h5>
        <button type="button" class="btn btn-dark mb-3 ms-3" onClick="deleteData(${i});">Delete</button>
        <button type="button" class="btn btn-dark mb-3 me-3" onClick="editData(${i});">Edit</button>
        `;
    }
}

function deleteData(index) {
    storeData.splice(index, 1);
    console.log(storeData);
    showData();
}

function remove () {
    error.innerText = '';
}

function editData (index) {
    let newData = prompt('Enter a new value');
    storeData.splice(index, 1, newData);
    showData();
}