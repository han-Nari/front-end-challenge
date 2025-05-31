const move = document.querySelectorAll('.active-state');
const circle = document.querySelectorAll('.circle');
const lists = document.querySelectorAll('a');
const active = document.querySelector('#active');
const remove = document.querySelectorAll('button.btn-border');
const cards = document.querySelectorAll('.box-list');



lists.forEach(active => {
    active.addEventListener('click', () => {
        lists.forEach( active => {
            active.classList.remove('active');
        });         
            active.classList.add('active');
    });
});

remove.forEach(removed => {
    removed.addEventListener('click', () => {
        removed.closest('.box-list').style.display = 'none';
    });
});

move.forEach((button, index) => {
    button.addEventListener('click', () => {
        circle[index].classList.toggle('inactive');
        move[index].classList.toggle('inactive');
    });
});






