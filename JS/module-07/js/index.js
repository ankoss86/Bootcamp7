'use strict'

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];

let createPostCard = function(post){
   
    let postCard = document.querySelector('#root');    
  
    let divPost = document.createElement('div');
    divPost.classList.add('post');

    let img = document.createElement('img');
    img.classList.add('post__image');
    img.setAttribute('src', post.img);
    img.setAttribute('alt', 'post image');

    let h2 = document.createElement('h2');
    h2.classList.add('post__title');
    h2.textContent = post.title;

    let p = document.createElement('p');
    p.classList.add('post__text');
    p.textContent = post.text;
    
    let a = document.createElement('a');
    a.classList.add('button');
    a.setAttribute('href', '#');
    a.textContent = post.link;
 

    divPost.append(img);
    divPost.append(h2);
    divPost.append(p);
    divPost.append(a);

    postCard.append(divPost);
};

let createCards = function(posts){
  for(let i of posts){
    createPostCard(i);
  }
};

createCards(posts);