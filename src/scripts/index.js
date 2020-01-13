import '../styles/index.scss'
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users';

let btn = document.querySelector('#loadData');
let p = document.querySelector('#output');

// Fetch API Details
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

btn.addEventListener('click', function () {
/*    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.forEach((user) => {
                p.innerHTML = `${p.innerHTML} <br> Name: ${user.name}`
            })
        })
        .catch(err => console.log(err))*/

    axios.get(url)
        .then(res => {
            res.data.forEach(user => {
                p.innerHTML = `${p.innerHTML} <br> Name: ${user.name}`
            })
        })
        .catch(err => console.log(err))
});
