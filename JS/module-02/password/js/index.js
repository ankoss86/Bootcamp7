const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;

do {
    let userPass = prompt('Введите пароль');
    if (userPass === null){
        break;
    }
    if (passwords.includes(userPass)){
        alert('Добро пожаловать!');
            break;
    } else {
            attempts -=1;
            n = attempts;
                if (n > 0){
                    alert(`Неверный пароль, у вас осталось ${n} попыток`);
            }else {
                alert('У вас закончились попытки, аккаунт заблокирован!');
                    break;
                }                           
        }
    } while(n >=0 || userPass !==null);
