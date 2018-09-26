'use strict'

const laptops = [
    {
      size: 13,
      color: 'white',
      price: 28000,
      release_date: 2015,
      name: 'Macbook Air White 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'gray',
      price: 32000,
      release_date: 2016,
      name: 'Macbook Air Gray 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'black',
      price: 35000,
      release_date: 2017,
      name: 'Macbook Air Black 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'white',
      price: 45000,
      release_date: 2015,
      name: 'Macbook Air White 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'gray',
      price: 55000,
      release_date: 2016,
      name: 'Macbook Pro Gray 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'black',
      price: 45000,
      release_date: 2017,
      name: 'Macbook Pro Black 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'white',
      price: 65000,
      release_date: 2015,
      name: 'Macbook Air White 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'gray',
      price: 75000,
      release_date: 2016,
      name: 'Macbook Pro Gray 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'black',
      price: 80000,
      release_date: 2017,
      name: 'Macbook Pro Black 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
  ];

//массив отфильрованых товаров
let laptopsFilter = [];
//массивы чекбоксов
let sizes = document.getElementsByName('size');
let colors = document.getElementsByName('color');
let dates = document.getElementsByName('release_date');
//обьект Values чекбоксов
const filter = {
    size: [], 
    color: [], 
    release_date: []
};

let submit = document.querySelector('.submit');
submit.addEventListener('click', goFilter);

function goFilter() {
    event.preventDefault();
        //снимаем Values чекбоксов и пишем в обьект filter
        sizes.forEach(el => {
            if (el.checked){        
                filter.size.push(el.value);
            };
        });
        colors.forEach(el => {
            if (el.checked){        
                filter.color.push(el.value);
            };
        });
        dates.forEach(el => {
            if (el.checked){        
                filter.release_date.push(el.value);
            };
        });
        filterProducts();
        createCards(laptopsFilter)
        laptopsFilter = [];
};        

function filterProducts(){
        if (filter.size.length==0){                                
                sizes.forEach(el => filter.size.push(el.value));       
        };
            laptops.map(el => {
                filter.size.map(elem=>{
                    if (el.size == elem){
                        laptopsFilter.push(el)           
                    };
                });
            });

        if(filter.color.length == 0){
                colors.forEach(el => filter.color.push(el.value));   
        };            

            laptopsFilter = laptopsFilter.filter(el => {
                for(let i of filter.color){
                    if (el.color === i){
                        return el;
                    };
                };
            });

        if(filter.release_date.length == 0){
                dates.forEach(el => filter.release_date.push(el.value));   
        };  

            laptopsFilter = laptopsFilter.filter(el => {
                for(let i of filter.release_date){
                    if (el.release_date == i){
                        return el;
                    };
                };
            });  

        console.log(laptopsFilter);
        console.log(filter);
};

function createCards(obj){
    reset();
    let root = document.querySelector('.root');
    // let cards = document.createElement('div');
    // cards.classList.add('cards');
    let cards = document.querySelector('.cards');
    // document.querySelector('.cards').innerHTML = '';
        obj.map(el =>{            
            let card = document.createElement('div');
            card.classList.add('card');
            let name = document.createElement('h2');
            name.classList.add('name');
            name.textContent = el.name;
            let photo = document.createElement('img');
            photo.setAttribute('src', el.img);
            photo.setAttribute('alt' , 'photo');
            photo.classList.add('photo');
            let text = document.createElement('p');
            text.classList.add('about');
            text.textContent = el.descr;
            let color = document.createElement('span');
            color.classList.add('color');
            color.textContent =`color: ${el.color}`;
            let price = document.createElement('span');
            price.classList.add('price');
            price.textContent =`price: ${el.price}`;
            let date = document.createElement('span');
            date.classList.add('date');
            date.textContent =`release date: ${el.release_date}`;
            let size = document.createElement('span');
            size.classList.add('size');
            size.textContent =`screen size: ${el.size}`;
            card.append(name);
            card.append(photo);
            card.append(text);
            card.append(color);
            card.append(price);
            card.append(date);
            card.append(size);
            cards.append(card);            
        });
    root.append(cards);
};

let res = document.querySelector('.reset');
res.addEventListener('click', reset);

function reset(){
    document.querySelector('.cards').innerHTML = '';  
    filter.size = [];
    filter.color = []; 
    filter.release_date = [];
};