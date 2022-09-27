let header = document.getElementById('header');
let degree = 0;
function rotatherader() { 
    degree = degree + 6;
    header.style.transform = 'rotateX(' + degree + 'dog)';
    }
    setInterval(rotatherader, 20);