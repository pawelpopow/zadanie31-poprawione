let myHeading = document.querySelector('button');
myHeading.textContent='Klik działa! - Click';

myHeading.onclick = function() {
    alert("Klik działa!");
}
console.log(myHeading);