'use strict'
const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

function Cashier(name, productDatabase){
  this.name = name,
  this.productDatabase = productDatabase,
  this.customerMoney = 0,
  this.getCustomerMoney = function(value){
    this.customerMoney = value;
  },
  this.countTotalPrice = function(order){
    let sum = (Object.keys(order)).map(function(el){
        return productDatabase[el]*order[el];
        }); 
    let res = sum.reduce((acc, el)=>acc+el)
        return res
  },
  this.countChange = function(){
    if (this.customerMoney >= this.countTotalPrice(order)){
      return this.customerMoney-this.countTotalPrice(order);
    } else {
      return null
    }
  },
  this.onError = function(){
    console.log('Очень жаль, вам не хватает денег на покупки');
  },
  this.reset = function(){
    this.customerMoney = 0;
  },
  this.onSuccess = function(){
    if (this.countChange() !== null){
      console.log(`Спасибо за покупку, ваша сдача ${change}!`);
      this.reset();
      
    } else {
      console.log(this.onError());
      this.reset();
    }
  }
}

const mango = new Cashier('Mango', products);

console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0

const totalPrice = mango.countTotalPrice(order);
console.log(totalPrice); // 110

mango.getCustomerMoney(300);
console.log(mango.customerMoney); // 300

const change = mango.countChange();
console.log(change); // 190

mango.onSuccess(change)

console.log(mango.customerMoney)