class Hamburger{
  constructor(size, stuffing){
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  };

  addTopping(topping) {
    if(this.toppings.includes(topping)){
      return
    } else {this.toppings.push(topping)}
  };

  removeTopping(topping) {
    if(this.toppings.includes(topping)){
    this.toppings =  this.toppings.filter(el => el !== topping)
    }
  };

  getToppings() {
    return this.toppings
  };

  getSize() {
    return this.size
  };

  getStuffing() {
    return this.stuffing
  };

  calculatePrice() {
    if (this.toppings.length === 0){
      return Hamburger.SIZES[this.size].price + 
              Hamburger.STUFFINGS[this.stuffing].price
  } else {
      return Hamburger.SIZES[this.size].price +             
              Hamburger.STUFFINGS[this.stuffing].price+ 
                
              this.toppings.map(function(el){        //стоимость добавок через метод 'map+reduce'
                  return Hamburger.TOPPINGS[el].price
                    }).reduce((acc, el) => acc + el, 0) 
    }
  };

  calculateCalories() {
    if (this.toppings.length === 0){
      return Hamburger.SIZES[this.size].calories + 
        Hamburger.STUFFINGS[this.stuffing].calories
    } else {
        return Hamburger.SIZES[this.size].calories + 
          Hamburger.STUFFINGS[this.stuffing].calories+

            this.toppings.reduce((acc, el) => acc +   //количество калорий без метода 'map'
            Hamburger.TOPPINGS[el].calories, 0)
      } 
  }; 
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50,
  },

  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100,
  }
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD;';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20,
  },

  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 5,
  },

  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    calories: 15,
  }
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE'

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0,
  },

  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5,
  },
};

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice());

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1