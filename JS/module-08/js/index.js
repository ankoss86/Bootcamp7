const galleryItems = [
  { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];

  let fuelView = document.createElement('div');
  fuelView.classList.add('fullview');
  let fuelViewImg = document.createElement('img');
  fuelViewImg.classList.add('fuulImg');
  
  let list = document.createElement('ul');
  list.classList.add('preview');

function addContent(object){

  fuelViewImg.setAttribute('src', object[0].fullview);
  fuelViewImg.setAttribute('alt', object[0].alt);

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
  document.querySelector('.image-gallery').append(fuelView); 
  document.querySelector('.image-gallery').append(list);  

}
addContent(galleryItems)

document.querySelector('.preview').addEventListener('click', onClick);

let liArr = [...document.querySelectorAll('.size')];

function onClick(){
  fuelViewImg.setAttribute('src', event.target.dataset.fullview);  
  liArr.forEach(el => el.classList.contains('activ') ? el.classList.remove('activ') : el);  
  event.target.parentElement.classList.toggle('activ'); 
}
