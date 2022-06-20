let nav1 = document.querySelector('#nav1');
let nav2 = document.querySelector('#nav2');
let nav3 = document.querySelector('#nav3');

let mesqu = document.querySelectorAll('.mesqu');
let mecir1 = document.querySelectorAll('.mecir1');
let mecir2 = document.querySelectorAll('.mecir2');

nav1.addEventListener('mouseover', () => {
    mesqu[0].style.backgroundColor = '#FF3838';
    mesqu[0].style.color = 'white';
    mecir1[0].style.backgroundColor = '#FF3838';
    mecir2[0].style.backgroundColor = '#FF3838';
})
nav1.addEventListener('mouseout', () => {
    mesqu[0].style.backgroundColor = 'white';
    mesqu[0].style.color = 'black';
    mecir1[0].style.backgroundColor = 'white';
    mecir2[0].style.backgroundColor = 'white';
})
nav2.addEventListener('mouseover', () => {
    mesqu[1].style.backgroundColor = '#FF3838';
    mesqu[1].style.color = 'white';
    mecir1[1].style.backgroundColor = '#FF3838';
    mecir2[1].style.backgroundColor = '#FF3838';
})
nav2.addEventListener('mouseout', () => {
    mesqu[1].style.backgroundColor = 'white';
    mesqu[1].style.color = 'black';
    mecir1[1].style.backgroundColor = 'white';
    mecir2[1].style.backgroundColor = 'white';
})
nav3.addEventListener('mouseover', () => {
    mesqu[2].style.backgroundColor = '#FF3838';
    mesqu[2].style.color = 'white';
    mecir1[2].style.backgroundColor = '#FF3838';
    mecir2[2].style.backgroundColor = '#FF3838';
})
nav3.addEventListener('mouseout', () => {
    mesqu[2].style.backgroundColor = 'white';
    mesqu[2].style.color = 'black';
    mecir1[2].style.backgroundColor = 'white';
    mecir2[2].style.backgroundColor = 'white';
})


nav1.addEventListener('click', () => {
    location.href = 'index.html';
})
nav2.addEventListener('click', () => {
    location.href = 'index2.html';
})
nav3.addEventListener('click', () => {
    location.href = 'index3.html';
})