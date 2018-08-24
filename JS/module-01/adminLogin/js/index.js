const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
let wellcome = 'Добро пожаловать!';
let accessIsDenied = 'Доступ запрещен!';
let canceledByUser = 'Отменено пользователем!';

let login = prompt('enter admin login');
console.log(login);
if (login === null){
    alert(canceledByUser);
} else if (login !== adminLogin){
    alert(accessIsDenied);
} else if (login === adminLogin){
    let password = prompt('enter your admin password');
    if (password === null){
        alert(canceledByUser);
    } else if (password !== adminPassword){
        alert (accessIsDenied);
    } else if (password === adminPassword){
        alert(wellcome);
    }
} 
