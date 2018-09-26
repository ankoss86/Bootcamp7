'use strict'

const getAllUsers = () => {
    fetch('https://test-users-api.herokuapp.com/users')
        .then(result => result.ok ? result.json() : null)
        .then(data => data.data)
        .then(data => {
            // console.log(data);
            writeList(data);
            return data;
        })
        .catch(error => console.log(error));
};

window.addEventListener('DOMContentLoaded', getAllUsers);

function writeList(object) {
    document.querySelector('.root').innerHTML = '';
    let ul = document.createElement('ul');
        object.map(el => {
            let li = document.createElement('li');
            li.textContent = `name: ${el.name}, age: ${el.age}`;
            ul.append(li)
        });
            document.querySelector('.root').append(ul);
};

const getUserById = id => {
    id = document.querySelector('#getId').value;
    event.preventDefault()
        fetch(`https://test-users-api.herokuapp.com/users/${id}`)
            .then(result => result.ok ? result.json() : null)
            .then(data => data.data)
            .then(user => {
                writeList([user]);
                return user;
            })
            .catch(error => console.log(error));
};

let id;
document.querySelector('.showUser').addEventListener('click', getUserById);

const removeUser = id => {
    id = document.querySelector('#getId').value;
    event.preventDefault()
        fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
            method: 'DELETE'
            })
            .then(response => response.json())
            .then(response => {
                getAllUsers();
                console.log(response);
                return response;
            })
            .catch(error => console.log(error));
};

document.querySelector('.delUser').addEventListener('click', removeUser);

const addUser = (name, age) => {
    name = document.querySelector('#name').value
    age = document.querySelector('#age').value
    event.preventDefault()
        fetch('https://test-users-api.herokuapp.com/users', {
            method: 'POST',
            body: JSON.stringify({ name: `${name}`, age: `${age}`}),
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(res => {
            getAllUsers();
            return res;
        });
        
};

let name;
let age;
document.querySelector('#addUser').addEventListener('click', addUser);

const updateUser = (id, user) => {
    let user = {
        name: 'yura',
        age : 31
    };
        fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
};


// const getAllId = () => {
//     fetch('https://test-users-api.herokuapp.com/users')
//         .then(result => result.ok ? result.json() : null)
//         .then(data => data.data)
//         .then(data => {
//             console.log(data);
//             let arr = []
//             for(let i of data){
//                 let id = i.id;
//                 arr.push(id);
                
//             }
//             console.log(arr);
//             arr.map(el => {
//                 removeUser(el)
//             })
//             return data;
//         })


//         .catch(error => console.log(error));
// }
// getAllId()