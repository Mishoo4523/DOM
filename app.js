
let name = ["Ahmad","Ali","Fadi"];

let ages = [ '18 years old', '15 years old','33 years old'];
let container = document.createElement('div');



document.body.appendChild(container);

container.style.textAlighn='center';

function element (name,ages) {
    //elements
    let card = document.createElement('div');
    let title= document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');

       

    //create content

    let head = document.createTextNode(name);
    let ageContent = document.createTextNode(ages);
    img.src = 'img/1.jpg';
    title.appendChild(head);
    age.appendChild(ageContent);

     // style
     card.style.width='200px';
     card.style.background='#444';
     card.style.color= '#fff';
     card.style.padding='10px';
     card.style.margin='2px';
     card.style.display= 'inline-block';

     img.style.width='100%';
    

    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);

    container.appendChild(card);
}
for (let i=0 ; i<3 ; i++){
   element(name[i],ages[i]);
}



