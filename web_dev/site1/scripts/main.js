document.querySelector('html').onClick = function() {
    alert('Ouch! Stop poking me!');
}


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'image/image1.png') {
        myImage.setAttribute('src', 'images/jackma.png');
    } else {
        myImage.setAttribute('src', 'images/Tech1.jfif');
    } 
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName  = prompt('Please enter your name: ');
    if (!myName) {
        setUserName ();
    }else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'CloneWave is cool, '+ myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent  = 'CloneWave, ' + storedName;
}
