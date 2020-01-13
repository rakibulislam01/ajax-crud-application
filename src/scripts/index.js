import '../styles/index.scss'
const url = 'https://jsonplaceholder.typicode.com/users';

let btn = document.querySelector('#loadData');
let p = document.querySelector('#output');

btn.addEventListener('click', function () {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        p.innerHTML = xhr.response
    };

    xhr.open('GET', url);
    xhr.send()

});
