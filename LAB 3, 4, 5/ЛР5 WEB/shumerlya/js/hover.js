var x =  document.createElement ('input');
x.type = 'button';
x.id = 'myUniqueID';
x.value = 'Нажми на меня:)'
x.addEventListener("mouseover", myFunction);
document.body.appendChild (x);

function myFunction() {
    if (x.style.backgroundColor == "red")
        x.style.backgroundColor = "green";
    else x.style.backgroundColor = "red";
    y = getRandomInt(0, document.body.childNodes.length);
    document.body.childNodes[y].appendChild (x);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
