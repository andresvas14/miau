const yesButton1 = document.querySelector('#yes1');
const yesButton2 = document.querySelector('#yes2');
const messageBox = document.querySelector('#message');
const messageText = document.querySelector('#message-text');

// Frases para cada botón
const messages1 = [
  '¡Sabía que dirías que sí xD! 💖',
  '¡2X1 Con el Cumpleaños Miau xd',
  
];

const messages2 = [
  '¡Obvio! 🥰',
  '¡Me Encantas! Miau🍷💕',
];

// Animación de corazones flotantes
function createHearts() {
  for (let i = 0; i < 10; i++) {
    let heart = document.createElement('div');
    heart.innerHTML = '💖'; // Corazón
    heart.classList.add('floating-heart');
    document.body.appendChild(heart);
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
  }
}

// Animación de maracuyas flotantes usando una imagen
function createPassionfruits() {
  for (let i = 0; i < 10; i++) {
    let passionfruit = document.createElement('img');
    passionfruit.src = './assets/maracuya.png'; // Ruta de la imagen de la maracuyá
    passionfruit.classList.add('floating-passionfruit');
    
    // Ajustamos el tamaño de la imagen directamente en el JavaScript
    passionfruit.width = 85;  // Ajustamos el tamaño en píxeles
    passionfruit.height = 85; // Ajustamos el tamaño en píxeles
    
    document.body.appendChild(passionfruit);
    passionfruit.style.left = `${Math.random() * 100}vw`;
    passionfruit.style.animationDuration = `${Math.random() * 3 + 2}s`;
  }
}

// Animación de anillos
function createPassionrings() {
  for (let i = 0; i < 10; i++) {
    let passionring = document.createElement('img');
    passionring.src = './assets/anillos.png'; // Ruta de la imagen de la maracuyá
    passionring.classList.add('floating-passionrings');
    
    // Ajustamos el tamaño de la imagen directamente en el JavaScript
    passionring.width = 85;  // Ajustamos el tamaño en píxeles
    passionring.height = 85; // Ajustamos el tamaño en píxeles
    
    document.body.appendChild(passionring);
    passionring.style.left = `${Math.random() * 100}vw`;
    passionring.style.animationDuration = `${Math.random() * 4 + 5}s`;
  }
}

// Animación de miau
function createPassionmiau() {
  for (let i = 0; i < 10; i++) {
    let passionring = document.createElement('img');
    passionring.src = './assets/miau.png'; // Ruta de la imagen de la maracuyá
    passionring.classList.add('floating-passionrings');
    
    // Ajustamos el tamaño de la imagen directamente en el JavaScript
    passionring.width = 85;  // Ajustamos el tamaño en píxeles
    passionring.height = 85; // Ajustamos el tamaño en píxeles
    
    document.body.appendChild(passionring);
    passionring.style.left = `${Math.random() * 100}vw`;
    passionring.style.animationDuration = `${Math.random() * 4 + 5}s`;
  }
}
// Animación de miau
function createPassiondurmiendo() {
  for (let i = 0; i < 10; i++) {
    let passionring = document.createElement('img');
    passionring.src = './assets/durmiendo.png'; // Ruta de la imagen de la maracuyá
    passionring.classList.add('floating-passionrings');
    
    // Ajustamos el tamaño de la imagen directamente en el JavaScript
    passionring.width = 85;  // Ajustamos el tamaño en píxeles
    passionring.height = 85; // Ajustamos el tamaño en píxeles
    
    document.body.appendChild(passionring);
    passionring.style.left = `${Math.random() * 100}vw`;
    passionring.style.animationDuration = `${Math.random() * 4 + 5}s`;
  }
}

// Cuando se presiona el primer botón
yesButton1.addEventListener('click', () => {
  yesButton1.classList.add('hide'); // Desaparece el primer botón
  messageText.textContent = messages1[Math.floor(Math.random() * messages1.length)];
  messageBox.style.display = 'flex';
  createHearts();
  createPassionfruits(); // Añadimos maracuyas flotantes
});

// Cuando se presiona el segundo botón
yesButton2.addEventListener('click', () => {
  yesButton2.classList.add('hide'); // Desaparece el segundo botón
  messageText.textContent = messages2[Math.floor(Math.random() * messages2.length)];
  messageBox.style.display = 'flex';
  createPassionmiau();
  createPassionrings();
  createPassiondurmiendo();
});
