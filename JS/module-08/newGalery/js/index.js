'use strickt'

const galleryItems = [
  { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];

class createGalery{
  constructor (object){
    this.items = object;
    this.parentNode = document.querySelector('.image-gallery');
    this.defaultActiveItem = object[0].fullview;
  };  

  addContent(object){ 

    let fuelView = document.createElement('div');
    fuelView.classList.add('fullview');
    let fuelViewImg = document.createElement('img');
    fuelViewImg.classList.add('fuulImg');
    fuelViewImg.setAttribute('src', this.defaultActiveItem);
    fuelViewImg.setAttribute('alt', object[0].alt);
    
    let list = document.createElement('ul');
    list.classList.add('preview'); 
    
      for(let i of object){
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.setAttribute('src', i.preview);
        img.setAttribute('data-fullview', i.fullview);
        img.setAttribute('alt', i.alt);
        img.classList.add('img-size');
        li.classList.add('size');
        li.append(img);
        list.append(li);
      };

      fuelView.append(fuelViewImg);
      this.parentNode.append(fuelView);
      this.parentNode.append(list);
           
      function onClick(){
        event.target.parentElement.parentElement.previousElementSibling.firstChild.setAttribute('src', event.target.dataset.fullview);        
        [...document.querySelectorAll('.size')].forEach(el => el.classList.contains('activ') ? el.classList.remove('activ') : el);  
        event.target.parentElement.classList.toggle('activ'); 
      };

      let uls = document.querySelectorAll('.preview');  

      for(let i of uls){
        i.addEventListener('click', onClick);
      };       
      
  }; 
};

function getGalery(){
  let galery = new createGalery(galleryItems);
  galery.addContent(galleryItems);
};

document.querySelector('.btn').addEventListener('click', getGalery);
  
