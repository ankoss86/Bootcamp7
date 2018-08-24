
let sharm = 25;
let hurgada = 15;
let taba = 6;

let quantity = +prompt('введите необходимое количество мест');
if (quantity > 0 && !isNaN(quantity) && Number.isInteger(quantity)){
    if ((quantity > sharm) && (quantity > hurgada) && (quantity > taba)){
        alert('Извините, столько мест нет ни в одной группе!');
    } else if (quantity <= sharm){
        let result = confirm('хотите в шарм?');
        if (result){
            alert('Приятного путешествия в Шарм');
        } else if  (quantity >= hurgada && quantity >= taba){
            alert('Нам очень жаль, приходите еще!');
        } else if (quantity <= hurgada){
            let result = confirm('может в Хургаду?');
            if (result){
                alert('Приятного путешествия в Хургаду');
            } else if  (quantity >= taba){
                alert('Нам очень жаль, приходите еще!');
            } else if (quantity <= taba){
                let result = confirm('может в Таба хотите??');
                if (result){
                    alert('Приятного путешествия в Таба');
                } else {
                    alert('Нам очень жаль, приходите еще!');
                }
            }
        } 

    }
} else {
    alert('Ошибка ввода');
}
