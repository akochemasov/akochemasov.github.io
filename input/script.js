function inputChange() {
    console.log('change')
}

function inputClick() {
    console.log('click')
}

function inputSearch() {
    console.log('search')
}

function inputInput() {
    console.log('input')
}

document.getElementById('inputItem').addEventListener('input', function (evt) {
    console.log(this.value);
});