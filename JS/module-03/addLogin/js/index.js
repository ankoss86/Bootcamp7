const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

let login = prompt('enter login'); 

const isLoginValid = function(login){
    // 4<= login.length <=16 ? return true : return false; не работает тернарник
    if (login.length >=4 && login.length <=16){
        return true;
    } else {
        return false;
    }
}

const isLoginUnique = function(allLogins, login){
    if (allLogins.includes(login)){
        return false;
    } else {
        return true;
    }
}

const addLogin = function(logins, login){    
         
    if(isLoginValid(login) === false){
        alert('Ошибка! Логин должен быть от 4 до 16 символов');        
    } else if(isLoginUnique(logins, login) === true){
        logins.push(login);
        alert('Логин успешно добавлен!');        
    } else {
        alert('Такой логин уже используется!');
    }
}
addLogin(logins, login);
console.log(logins);
