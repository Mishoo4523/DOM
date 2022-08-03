
let container = document.createElement('div');

document.body.appendChild(container);

container.style.textAlighn='center';

function element () {
    //elements
    let card = document.createElement('div');
    let title= document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');


    //create content

    let head = document.createTextNode('title');
    let ageContent = document.createTextNode('age');
    img.src = 'img/1.jpg';
    title.appendChild(head);
    age.appendChild(ageContent);

    //style
    card.style.width='200px';

    img.style.width='100%';
    

    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);

    container.appendChild(card);
}

element();


