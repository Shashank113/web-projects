// let myHeading = document.querySelector('h1');
// myHeading.textContent = "Hello World!";

let myImage = document.querySelector('img');

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
    if(myImage.getAttribute('src') === 'images/gotdog.jpg') {
        myImage.setAttribute('src', 'images/image2.jpg');
    } else{
        myImage.setAttribute('src', 'images/gotdog.jpg');
    }
}

function setUser(){
    let myName = prompt("Please enter your name. ");
    localStorage.setItem("name", myName);
    myHeading.textContent = "This is a Husky, " + myName ;
}

if(!localStorage.getItem('name')){
    setUser();
} else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "This is a Husky, " + storedName ;
}

myButton.onclick = function(){
    setUser();
}