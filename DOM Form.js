const form = document.querySelector('form');
const inputName = document.querySelector('#name');
const inputTweet = document.querySelector('#tweet');
const ul = document.querySelector('ul');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    addTweet();
})

function addTweet() {
    const name = inputName.value;
    const tweet = inputTweet.value;
    const newTweet = document.createElement('li');
    newTweet.innerHTML = `<li><span>${name}:</span> ${tweet}  <button>Delete</button></li>`;
    ul.appendChild(newTweet);
    inputName.value = '';
    inputTweet.value = '';
}



// ---------------------
const h2 = document.querySelector('h2');
inputTweet.addEventListener('input', (evt) => {
    h2.innerText = inputTweet.value;
})

ul.addEventListener('click', (evt) => {
    if (evt.target.nodeName === 'BUTTON') {
        evt.target.parentElement.remove();
    }
    console.dir(evt.target.parentNode);
})