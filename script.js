// Contador de Likes
const likeButton = document.getElementById('likeButton');
const likeCountSpan = document.getElementById('likeCount');
let likeCount = 0;

likeButton.addEventListener('click', () => {
    likeCount++;
    likeCountSpan.textContent = likeCount;
});

// Cambiar el color del texto
const textColorInput = document.getElementById('textColor');
const mainElement = document.querySelector('main');

textColorInput.addEventListener('input', (event) => {
    mainElement.style.color = event.target.value;
});

// Contador de palabras
const commentBox = document.getElementById('commentBox');
const wordCountSpan = document.getElementById('wordCount');

commentBox.addEventListener('input', () => {
    const wordCount = commentBox.value.trim().split(/\s+/).filter(word => word).length;
    wordCountSpan.textContent = wordCount;
});

// Mensaje animado
const animatedMessage = document.getElementById('animatedMessage');
let animationId;

function startAnimation() {
    let position = 100;
    animationId = setInterval(() => {
        position--;
        if (position < -100) position = 100;
        animatedMessage.style.transform = `translateX(${position}%)`;
    }, 50);
}
startAnimation();

// Temporizador
const countdown = document.getElementById('countdown');
let timer = 10;

function startCountdown() {
    const timerId = setInterval(() => {
        timer--;
        countdown.textContent = timer;
        if (timer === 0) {
            clearInterval(timerId);
        }
    }, 1000);
}
startCountdown();

// Invertir filas de la tabla
const invertRowsButton = document.getElementById('invertRowsButton');
const favoritesTableBody = document.querySelector('#favoritesTable tbody');

invertRowsButton.addEventListener('click', () => {
    const rows = Array.from(favoritesTableBody.rows);
    rows.reverse().forEach(row => favoritesTableBody.appendChild(row));
});

// Agregar tareas a la lista
const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        todoList.appendChild(listItem);
        taskInput.value = '';
    }
});

// Cambiar el fondo
const backgroundColorInput = document.getElementById('backgroundColor');

backgroundColorInput.addEventListener('input', (event) => {
    document.body.style.backgroundColor = event.target.value;
});

// Cambiar el título del blog
const blogTitleInput = document.getElementById('blogTitleInput');
const header = document.querySelector('header');

blogTitleInput.addEventListener('input', () => {
    header.textContent = blogTitleInput.value;
});

// Mostrar/Ocultar descripción
const toggleDescriptionButton = document.getElementById('toggleDescriptionButton');
const blogDescription = document.getElementById('blogDescription');

let isDescriptionVisible = true;

toggleDescriptionButton.addEventListener('click', () => {
    isDescriptionVisible = !isDescriptionVisible;
    blogDescription.style.display = isDescriptionVisible ? 'block' : 'none';
});

// Mostrar fecha en el pie de página
const footerDate = document.getElementById('footerDate');
const currentDate = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
footerDate.textContent = `Hoy es ${currentDate}`;
